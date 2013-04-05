/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['underscore', 'backbone', './ProblemViewer/data/ProblemViewerState', 'hbs!template/problemViewer',
        './ProblemViewer/view/FileView'],
  function (_, Backbone, ProblemViewerState, tmpl, FileView) {
    "use strict";
    return Backbone.Marionette.Layout.extend({
      template: tmpl,
      type: 'handlebars',
      model: new ProblemViewerState(),
      regions: {
        content: ".pv_content"
      },
      initialize: function () {
        this.appState = this.options.appState;
        this.subViews = {
          fileView: new FileView({model: this.model, appState: this.appState})
        };
      },
      onRender: function () {
        this.model.resetDefaults();
        this.content.show(this.subViews.fileView);
        this.subViews.fileView.delegateEvents();
      }
    });
  });
