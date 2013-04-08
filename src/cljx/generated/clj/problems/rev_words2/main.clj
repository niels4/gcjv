;;This file autogenerated from 
;;
;;  src/cljx/shared/problems/rev_words2/main.cljx
;;
(ns problems.rev_words2.main (:use [gcj-util.misc :only [to-int indexed-values]] [gcj-util.case-reader :only [parse-cases-from-input]] [gcj-util.case-solver :only [solve-problem]] [clojure.string :only [split join]] [clojure.pprint :only [pprint]] [gcj-viewer.file-util :only [write-solution read-input-text test-expected-output]]))
(def problemName "rev_words2")
(def linesPerCase 1)
(defn parseCase [{:keys [index value]}] (let [lines value] {:caseNumber index, :lines lines}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))
(defn processCase [{:keys [caseNumber lines]}] (let [result ""] {:caseNumber caseNumber, :result result}))
(defn solve-for-input [input] (solve-problem caseParser processCase input))