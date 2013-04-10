/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['jquery', 'backbone', 'hbs!../template/sourceView'],
  function ($, Backbone, tmpl) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: tmpl,
      type: 'handlebars',
      className: 'sourceView',
      ui: {
        sourceSelector: ".sourceSelector",
        sourceText: ".sourceViewText"
      },
      events: {
        'change .sourceSelector': 'updateSourceText'
      },
      onShow: function () {
        var self = this;
        setTimeout(function () {
          self.ui.sourceSelector.chosen({disable_search: true});
          self.$el.find('.chzn-search input').attr('disabled', 'disabled');
        }, 0);
        self.updateSourceText();
      },

      updateSourceText: function () {
        var textUrl, self;
        self = this;
        textUrl = "problemViewer/" + this.ui.sourceSelector.val();
        $.ajax({url: textUrl}).then(function (inputText) {
          self.ui.sourceText.val(inputText);
        });
      }
    });
  });
