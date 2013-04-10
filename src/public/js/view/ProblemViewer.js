/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['underscore', 'backbone', './ProblemViewer/data/ProblemViewerState', 'hbs!template/problemViewer',
        './ProblemViewer/view/FileView', './ProblemViewer/view/SourceView', 'data/AppState'],
  function (_, Backbone, ProblemViewerState, tmpl, FileView, SourceView, AppState) {
    "use strict";
    return Backbone.Marionette.Layout.extend({
      className: "problemViewerMain",
      template: tmpl,
      type: 'handlebars',
      model: new ProblemViewerState(),
      regions: {
        content: ".pv_content"
      },
      ui: {
        solutionButton: '.solutionButton',
        sourceButton: '.sourceButton'
      },
      events: {
        "click .solutionButton": "onSolutionButtonClick",
        "click .sourceButton": "onSourceButtonClick"
      },
      initialize: function () {
        _.bindAll(this, 'onSubviewSelected', 'onProblemSelected');
        this.appState = this.options.appState;
        this.appState.onChangeProblemSelected(this.onProblemSelected);
        this.model.onChangeSubviewSelected(this.onSubviewSelected);
        this.subViews = {
          fileView: new FileView({model: this.model, appState: this.appState}),
          sourceView: new SourceView({model: this.model, appState: this.appState})
        };
      },
      onRender: function () {
        this.model.resetDefaults();
        this.content.show(this.subViews.fileView);
        this.subViews.fileView.delegateEvents();
      },
      onSolutionButtonClick: function () {
        this.model.set(ProblemViewerState.SUBVIEW_SELECTED, ProblemViewerState.FILE_VIEW_NAME);
      },
      onSourceButtonClick: function () {
        this.model.set(ProblemViewerState.SUBVIEW_SELECTED, ProblemViewerState.SOURCE_VIEW_NAME);
      },
      onSubviewSelected: function () {
        console.log("new subview selected:", this.model.get(ProblemViewerState.SUBVIEW_SELECTED));
        if (this.model.get(ProblemViewerState.SUBVIEW_SELECTED) === ProblemViewerState.FILE_VIEW_NAME) {
          this.model.resetDefaults();
          this.ui.sourceButton.removeClass('disabledButton');
          this.ui.solutionButton.addClass('disabledButton');
          this.content.show(this.subViews.fileView);
          this.subViews.fileView.delegateEvents();
        } else {
          this.ui.sourceButton.addClass('disabledButton');
          this.ui.solutionButton.removeClass('disabledButton');
          this.content.show(this.subViews.sourceView);
          this.subViews.sourceView.delegateEvents();
        }
      },
      onProblemSelected: function () {
        this.model.set(AppState.PROBLEM_SELECTED, this.appState.get(AppState.PROBLEM_SELECTED));
      }
    });
  });
