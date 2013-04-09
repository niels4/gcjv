/*jslint browser: true, indent: 2, nomen: true, es5: true, devel: true */
/*global define, Blob, FileReader, Worker */
define(['underscore', 'jquery', 'backbone', 'hbs!../template/fileView',
        'data/AppState', '../data/ProblemViewerState', 'saveAs'],
  function (_, $, Backbone, tmpl, AppState, ProblemViewerState, saveAs) {
    "use strict";

    return Backbone.Marionette.ItemView.extend({
      template: tmpl,
      type: 'handlebars',
      viewName: 'fileView',
      events: {
        "change select": 'onInputSelected',
        "blur .inputFile": 'onCustomTextBlur',
        "focus .inputFile": 'onCustomTextFocus',
        "keyup .inputFile": 'onInputFileKeyup',
        "paste .inputFile": 'onInputFilePaste',
        "drop .inputFile": 'onInputFileDrop',
        "click .runButton": 'onRunButtonClick',
        "click .downloadButton": 'onDownloadButtonClick'
      },
      ui: {
        inputFile: ".inputFile",
        outputFile: ".outputFile",
        inputSelector: "select",
        runButtonDiv: '.runButtonDiv',
        runButton: '.runButton',
        downloadButton: '.downloadButton'
      },
      constants: {
        placeHolderClass: 'placeholderInput'
      },
      initialize: function () {
        _.bindAll(this, 'onInputSelectedChange', 'onOutputTextValueChange',
          'onInputFileKeyup', 'processWorkerMessage');
        this.appState = this.options.appState;
        this.model.onChangeInputSelected(this.onInputSelectedChange);
        this.model.onChangeOutputTextValue(this.onOutputTextValueChange);
      },
      onShow: function () {
        var self = this;
        setTimeout(function () {
          self.ui.inputSelector.chosen({disable_search: true});
          self.ui.inputFile.val(ProblemViewerState.INPUT_PLACEHOLDER);
          self.$el.find('.chzn-search input').attr('disabled', 'disabled');
        }, 0);
      },

      onInputSelected: function (evt) {
        this.model.set(ProblemViewerState.INPUT_SELECTED, evt.target.value);
      },
      onInputSelectedChange: function () {
        var self;
        self = this;
        this.model.set(ProblemViewerState.OUTPUT_TEXT_VALUE, '');
        if (this.model.isDefaultInputSelected()) {
          this.ui.inputFile.val(this.model.get(ProblemViewerState.INPUT_TEXT_VALUE));
          this.ui.inputFile.attr('readonly', false);
          if (this.model.isInputTextPlaceholder()) {
            this.ui.inputFile.addClass(this.constants.placeHolderClass);
            this.ui.runButtonDiv.css('visibility', 'hidden');
          } else {
            this.ui.inputFile.removeClass(this.constants.placeHolderClass);
            this.ui.runButtonDiv.css('visibility', 'visible');
          }
        } else {
          $.ajax({url: 'problemViewer/problems/' + this.appState.get(AppState.PROBLEM_SELECTED)
            + '/input/' + this.model.get(ProblemViewerState.INPUT_SELECTED) + '.in'}).then(function (inputText) {
            self.ui.inputFile.attr('readonly', true);
            self.ui.inputFile.val(inputText);
            self.ui.inputFile.removeClass(self.constants.placeHolderClass);
            self.ui.runButtonDiv.css('visibility', 'visible');
          });
        }
      },
      onCustomTextFocus: function (evt) {
        if (evt.target.value === ProblemViewerState.INPUT_PLACEHOLDER) {
          this.ui.inputFile.removeClass(this.constants.placeHolderClass);
          this.ui.inputFile.val('');
        }
      },
      onCustomTextBlur: function (evt) {
        if (evt.target.value === "") {
          this.ui.inputFile.addClass(this.constants.placeHolderClass);
          this.ui.inputFile.val(ProblemViewerState.INPUT_PLACEHOLDER);
        }
        if (this.model.isDefaultInputSelected()) {
          this.model.set(ProblemViewerState.INPUT_TEXT_VALUE, this.ui.inputFile.val());
        }
      },
      onInputFilePaste: function () {
        setTimeout(this.onInputFileKeyup, 0);
      },
      onInputFileKeyup: function () {
        var inputVal = this.ui.inputFile.val();
        if (inputVal !== this.model.get(ProblemViewerState.INPUT_TEXT_VALUE)) {
          this.model.set(ProblemViewerState.OUTPUT_TEXT_VALUE, '');
        }
        if (inputVal === '') {
          this.ui.runButtonDiv.css('visibility', 'hidden');
        } else {
          this.ui.runButtonDiv.css('visibility', 'visible');
        }
      },
      onOutputTextValueChange: function () {
        if (this.shouldShowDownloadButton()) {
          this.ui.outputFile.val('');
          this.ui.downloadButton.css('visibility', 'hidden');
        } else {
          this.ui.downloadButton.css('visibility', 'visible');
          this.ui.outputFile.val(this.model.get(ProblemViewerState.OUTPUT_TEXT_VALUE));
        }
      },
      shouldShowDownloadButton: function () {
        return this.model.get(ProblemViewerState.INPUT_TEXT_VALUE) === "" ||
            this.model.get(ProblemViewerState.OUTPUT_TEXT_VALUE) === "" ||
            (this.model.isDefaultInputSelected() && this.model.isInputTextPlaceholder());
      },
      onDownloadButtonClick: function () {
        var fileName, blob;
        fileName = this.model.get(ProblemViewerState.INPUT_SELECTED) +
          "_output.txt";
        blob = new Blob([this.model.get(ProblemViewerState.OUTPUT_TEXT_VALUE)],
          {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
      },
      onInputFileDrop: function (evt) {
        var file, fileText, reader, self;
        self = this;
        evt.stopPropagation();
        file = evt.originalEvent.dataTransfer.files[0];
        if (!file) { return false; }
        reader = new FileReader();
        reader.onload = function (evt2) {
          fileText = evt2.target.result;
          self.model.set(ProblemViewerState.INPUT_TEXT_VALUE, fileText);
          self.onInputSelectedChange();
        };
        reader.readAsText(file);
        return false;
      },
      onRunButtonClick: function (evt) {
        if (!this.startWorker()) { return; }
        this.worker.addEventListener('message', this.processWorkerMessage);
        this.worker.postMessage(
          {
            problemName: this.appState.get(AppState.PROBLEM_SELECTED),
            input: this.ui.inputFile.val()
          }
        );
      },
      startWorker: function () {
        var workerUrl;
        if (this.worker) { return false; }
        this.ui.runButton.html("Running...");
        this.ui.runButton.addClass("disabledButton");
        workerUrl = 'js/workers/cljsWorker.js';
        if (this.appState.get(AppState.DEBUG_MODE)) {
          workerUrl += "?time=" + new Date().getTime();
        }
        this.worker = new Worker(workerUrl);
        return true;
      },
      processWorkerMessage: function (evt) {
        if (evt.data.status === "completed") {
          console.log("Solution completed:", evt.data);
          this.model.set(ProblemViewerState.OUTPUT_TEXT_VALUE,
            evt.data.message);
          this.endWorker();
        }
      },
      endWorker: function () {
        this.worker.terminate();
        this.worker = null;
        this.ui.runButton.html("Run it!");
        this.ui.runButton.removeClass("disabledButton");
      }
    });
  });
