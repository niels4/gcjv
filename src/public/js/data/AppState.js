/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['backbone', 'text!data/problems.json'],
  function (Backbone, problemsList) {
    "use strict";
    var constants, modelDefaults;

    constants = {
      DEFAULT_SELECT_MESSAGE: "Select a Problem...",
      PROBLEM_SELECTED: "problemSelected",
      PROBLEMS: "problems"
    };

    modelDefaults = {};
    modelDefaults[constants.PROBLEM_SELECTED] = constants.DEFAULT_SELECT_MESSAGE;
    modelDefaults[constants.PROBLEMS] = [
      { name: constants.DEFAULT_SELECT_MESSAGE,
        descriptionUrl: ""}].concat(JSON.parse(problemsList));

    return Backbone.Model.extend(
      {
        defaults: modelDefaults,
        isDefaultProblemSelected: function () {
          return this.get(constants.PROBLEM_SELECTED) ===
                 constants.DEFAULT_SELECT_MESSAGE;
        },
        onChangeProblemSelected: function (onChangeFunction) {
          return this.on("change:" + constants.PROBLEM_SELECTED, onChangeFunction);
        }
      },
      constants
    );
  });
