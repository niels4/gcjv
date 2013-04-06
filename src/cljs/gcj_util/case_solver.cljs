(ns gcj-util.case-solver
  (:use [clojure.string :only [join]]))

(defn result-to-line
  [{:keys [caseNumber result]}]
  (str "Case #" caseNumber ": " result))

(defn format-results
  [results]
  (let
    [formattedResult (->> results
                   (map result-to-line)
                   (join "\n")
                   (apply str))]
    formattedResult))

(defn solve-problem
  [caseParser processCase input]
  (let
    [cases (caseParser input)
     results (map processCase cases)]
    (format-results results)))
