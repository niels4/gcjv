(ns problems.store-credit.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [clojure.string :only [split]]))

(def problemName "store_credit")

(def linesPerCase 3)

(defn parseCase
  [{:keys [index value]}]
  (let
    [lines value]
    {:caseNumber index
     :lines lines}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn ^:export solve-for-input
  [input]
  (str (caseParser input)))
