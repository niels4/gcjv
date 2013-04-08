/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['underscore', 'backbone', 'data/AppState', 'hbs!template/headerControls'],
  function (_, Backbone, AppState, tmpl) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: tmpl,
      type: 'handlebars',
      tagName: "SPAN",
      events: {
        "change select" : "onProblemSelected"
      },
      ui: {
        problemSelector: "select",
        problemDescLink: '.problemDescLink'
      },
      onShow: function () {
        this.ui.problemSelector.chosen({disable_search: true});
        this.$el.find('.chzn-search input').attr('disabled', 'disabled');
      },

      onProblemSelected: function (evt) {
        var problemSelected;
        problemSelected = evt.target.value;
        this.model.set(AppState.PROBLEM_SELECTED, problemSelected);
        if (this.model.isDefaultProblemSelected()) {
          this.ui.problemDescLink.css('visibility', 'hidden');
        } else {
          this.ui.problemDescLink.css('visibility', 'visible');
          this.ui.problemDescLink.attr('href',
            _.findWhere(this.model.get(AppState.PROBLEMS),
              {name: problemSelected}).descriptionUrl);
        }
      }
    });
  });
