/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['backbone', 'hbs!../template/sourceView'],
  function (Backbone, tmpl) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: tmpl,
      type: 'handlebars',
      className: 'sourceView',
      ui: {
        sourceSelector: ".sourceSelector"
      },
      onShow: function () {
        var self = this;
        setTimeout(function () {
          self.ui.sourceSelector.chosen({disable_search: true});
          self.$el.find('.chzn-search input').attr('disabled', 'disabled');
        }, 0);
      }
    });
  });
