/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['backbone', 'hbs!../template/sourceView'],
  function (Backbone, tmpl) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: tmpl,
      type: 'handlebars',
      viewName: 'sourceView'
    });
  });
