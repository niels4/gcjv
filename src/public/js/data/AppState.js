/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define */
define(['underscore', 'backbone', 'text!data/problems.json'],
  function (_, Backbone, problemsListJson) {
    "use strict";
    var constants, modelDefaults, problemsList;

    constants = {
      DEFAULT_SELECT_MESSAGE: "Select a Problem...",
      PROBLEM_SELECTED: "problemSelected",
      PROBLEMS: "problems",
      DEBUG_MODE: 'debugMode'
    };

    problemsList = _.sortBy(JSON.parse(problemsListJson), "name");

    modelDefaults = {};
    modelDefaults[constants.DEBUG_MODE] = true;
    modelDefaults[constants.PROBLEM_SELECTED] = constants.DEFAULT_SELECT_MESSAGE;
    modelDefaults[constants.PROBLEMS] = [
      { name: constants.DEFAULT_SELECT_MESSAGE,
        descriptionUrl: ""}].concat(problemsList);

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
