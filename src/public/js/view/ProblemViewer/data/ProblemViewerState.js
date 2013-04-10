/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['backbone', 'text!../template/inputPlaceholder.txt'],
  function (Backbone, inputPlaceholderText) {
    "use strict";
    var constants, modelDefaults;

    constants = {
      SUBVIEW_SELECTED: 'subviewSelected',
      INPUT_SELECTED: "inputSelected",
      INPUT_TEXT_VALUE: 'inputTextValue',
      DEFAULT_INPUT: 'custom',
      INPUT_PLACEHOLDER: inputPlaceholderText,
      OUTPUT_TEXT_VALUE: 'outputTextValue',
      FILE_VIEW_NAME: 'fileView',
      SOURCE_VIEW_NAME: 'sourceView'
    };

    modelDefaults = {};
    modelDefaults.inputFiles = [{name: constants.DEFAULT_INPUT}, {name: "sample"},
      {name:  "small"}, {name:  "large"}];
    modelDefaults[constants.INPUT_TEXT_VALUE] = constants.INPUT_PLACEHOLDER;
    modelDefaults[constants.INPUT_SELECTED] = constants.DEFAULT_INPUT;
    modelDefaults[constants.OUTPUT_TEXT_VALUE] = '';
    modelDefaults[constants.SUBVIEW_SELECTED] = constants.FILE_VIEW_NAME;

    return Backbone.Model.extend(
      {
        defaults: modelDefaults,
        isDefaultInputSelected: function () {
          return this.get(constants.INPUT_SELECTED) === constants.DEFAULT_INPUT;
        },
        onChangeSubviewSelected: function (onChangeFunction) {
          return this.on("change:" + constants.SUBVIEW_SELECTED, onChangeFunction);
        },
        onChangeInputSelected: function (onChangeFunction) {
          return this.on("change:" + constants.INPUT_SELECTED, onChangeFunction);
        },
        resetDefaults: function () {
          this.set(constants.INPUT_SELECTED, constants.DEFAULT_INPUT);
          this.set(constants.INPUT_TEXT_VALUE, constants.INPUT_PLACEHOLDER);
          this.set(constants.SUBVIEW_SELECTED, constants.FILE_VIEW_NAME);
        },
        onChangeOutputTextValue: function (onChangeFunction) {
          return this.on("change:" + constants.OUTPUT_TEXT_VALUE, onChangeFunction);
        },
        isInputTextPlaceholder: function () {
          return this.get(constants.INPUT_TEXT_VALUE) === constants.INPUT_PLACEHOLDER;
        }
      },
      constants
    );
  });
