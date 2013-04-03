/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['backbone', 'hbs!template/layout', 'view/HeaderControls',
        'view/WelcomeMessage', 'view/ProblemViewer', 'data/AppState'],
  function (Backbone, layoutTemplate, HeaderControls,
            WelcomeMessage, ProblemViewer, AppState) {
    "use strict";
    var initOptions, initData, initLayout, initViews, initEventHandles,
      createApp;

    initOptions = function (options) {
      var appOptions = {};
      appOptions.mainId = options.mainId || "main";
      return appOptions;
    };

    initData = function () {
      var appData = {};
      appData.appState = new AppState();
      return appData;
    };

    initLayout = function (app, appOptions) {
      var Layout, appLayout;

      app.addRegions({
        main: '#' + appOptions.mainId
      });

      Layout = Backbone.Marionette.Layout.extend({
        className: 'gcj_cljs',
        type: 'handlebars',
        template: layoutTemplate,
        regions: {
          header: '#' + appOptions.mainId + '_header',
          headerControls: '.headerControls',
          content: '#' + appOptions.mainId + '_content',
          footer: '#' + appOptions.mainId + '_footer'
        }
      });

      appLayout = new Layout({model: new Backbone.Model({mainId: appOptions.mainId})});
      app.main.show(appLayout);
      return appLayout;
    };

    initViews = function (appLayout, appData) {
      var appViews = {};
      appViews.headerControls = new HeaderControls({model: appData.appState});
      appViews.welcomeMessage = new WelcomeMessage();
      appViews.problemViewer = new ProblemViewer({appState: appData.appState});
      appLayout.headerControls.show(appViews.headerControls);
      appLayout.content.show(appViews.welcomeMessage);
      return appViews;
    };

    initEventHandles = function (appLayout, appViews, appData) {
      var handleProblemSelect, appEventHandles, verticalExpandClass;
      verticalExpandClass = 'verticalExpand';
      handleProblemSelect = function () {
        if (appData.appState.isDefaultProblemSelected()) {
          appLayout.content.$el.removeClass(verticalExpandClass);
          appLayout.content.show(appViews.welcomeMessage);
        } else {
          appLayout.content.$el.addClass(verticalExpandClass);
          appLayout.content.show(appViews.problemViewer);
        }
      };

      appEventHandles = {};
      appEventHandles.problemSelectedEvent =
        appData.appState.onChangeProblemSelected(handleProblemSelect);
      return appEventHandles;
    };

    createApp = function (options) {
      var app, appOptions;
      appOptions = initOptions(options);

      app = new Backbone.Marionette.Application();
      app.addInitializer(function () {
        var appData, appLayout, appViews, appEventHandles;
        appData = initData();
        appLayout = initLayout(app, appOptions);
        appViews = initViews(appLayout, appData);
        appEventHandles = initEventHandles(appLayout, appViews, appData);

        window.app = app;
        window.appData = appData;
        window.appLayout = appLayout;
        window.appViews = appViews;
      });

      return app;
    };

    return {
      createApp: createApp
    };
  });
