/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global Worker, require */
require.config({
  paths : {
    jquery     : 'lib/jquery/jquery-latest',
    underscore : 'lib/backbone/underscore-min',
    backbone   : 'lib/backbone/backbone-min',
    'backbone.marionette' : 'lib/backbone/backbone.marionette.min',
    'backbone.marionette.handlebars' : 'lib/backbone/backbone.marionette.handlebars.min',
    text: 'lib/require/text',
    Handlebars : 'lib/require/hbs/Handlebars',
    hbs        : 'lib/require/hbs',
    chosen     : 'lib/jquery/chosen.jquery.min',
    saveAs     : 'lib/FileSaver',
    syntaxHighlighter: 'lib/shCore',
    clojureBrush: 'lib/shBrushClojure'
  },
  shim : {
    underscore : {
      exports : '_'
    },
    backbone : {
      exports : 'Backbone',
      deps : ['jquery', 'underscore']
    },
    'backbone.marionette' : {
      exports : 'Backbone.Marionette',
      deps : ['backbone']
    },
    chosen : {
      deps: ['jquery']
    },
    saveAs : {
      exports: 'saveAs'
    },
    syntaxHighlighter : {
      exports: 'SyntaxHighlighter'
    },
    clojureBrush: {
      deps: ['syntaxHighlighter']
    }
  },
  deps : ['text', 'jquery', 'underscore', 'backbone.marionette.handlebars', 'chosen']
});

require(['jquery', 'app/GcjSolutionViewer'],
  function ($, gcjSolutionViewer) {
    "use strict";
    var app, options;
    options = {
      mainId: "codeJamSolutionViewer"
    };
    app = gcjSolutionViewer.createApp(options);
    app.start();
    console.log("build works");
  });
