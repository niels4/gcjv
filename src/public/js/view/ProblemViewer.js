/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['underscore', 'backbone', './ProblemViewer/data/ProblemViewerState', 'hbs!template/problemViewer',
        './ProblemViewer/view/FileView', './ProblemViewer/view/SourceView'],
  function (_, Backbone, ProblemViewerState, tmpl, FileView, SourceView) {
    "use strict";
    var FILE_VIEW_NAME = 'fileView',
      SOURCE_VIEW_NAME = 'sourceView';
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
        _.bindAll(this, 'onSubviewSelected');
        this.appState = this.options.appState;
        this.model.set(ProblemViewerState.SUBVIEW_SELECTED, FILE_VIEW_NAME);
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
        this.model.set(ProblemViewerState.SUBVIEW_SELECTED, FILE_VIEW_NAME);
      },
      onSourceButtonClick: function () {
        this.model.set(ProblemViewerState.SUBVIEW_SELECTED, SOURCE_VIEW_NAME);
      },
      onSubviewSelected: function () {
        console.log("new subview selected:", this.model.get(ProblemViewerState.SUBVIEW_SELECTED));
        this.model.resetDefaults();
        if (this.model.get(ProblemViewerState.SUBVIEW_SELECTED) === FILE_VIEW_NAME) {
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
    });
  });
