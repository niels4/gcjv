/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['backbone', 'text!../template/inputPlaceholder.txt'],
  function (Backbone, inputPlaceholderText) {
    "use strict";
    var constants, modelDefaults;

    constants = {
      INPUT_SELECTED: "inputSelected",
      INPUT_TEXT_VALUE: 'inputTextValue',
      DEFAULT_INPUT: 'custom',
      INPUT_PLACEHOLDER: inputPlaceholderText,
      OUTPUT_TEXT_VALUE: 'outputTextValue'
    };

    modelDefaults = {};
    modelDefaults.inputFiles = [{name: constants.DEFAULT_INPUT}, {name: "sample"},
      {name:  "small"}, {name:  "large"}];
    modelDefaults[constants.INPUT_TEXT_VALUE] = constants.INPUT_PLACEHOLDER;
    modelDefaults[constants.INPUT_SELECTED] = constants.DEFAULT_INPUT;
    modelDefaults[constants.OUTPUT_TEXT_VALUE] = '';

    return Backbone.Model.extend(
      {
        defaults: modelDefaults,
        isDefaultInputSelected: function () {
          return this.get(constants.INPUT_SELECTED) === constants.DEFAULT_INPUT;
        },
        onChangeInputSelected: function (onChangeFunction) {
          return this.on("change:" + constants.INPUT_SELECTED, onChangeFunction);
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
