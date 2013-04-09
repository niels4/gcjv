(ns gcj-util.case-reader
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [clojure.string :only [split trim-newline]]))

(defn cases-from-lines
  [linesPerCase lines]
  (partition linesPerCase lines))

(defn raw-cases-from-lines 
  [linesPerCase lines]
  (let
    [expectedCount (to-int (first lines))
     rawCases (->> (rest lines)
                   (cases-from-lines linesPerCase)
                   indexed-values)
     isCountValid  (= expectedCount (count rawCases))]
    (assert isCountValid) ;make sure we are getting the expected number of cases
    {:count         expectedCount
     :rawCases      rawCases
     :isCountValid  isCountValid}))

(defn parse-cases-from-input
  [parseFunction linesPerCase input]
  (let
    [lines (-> input
               trim-newline
               (split #"\n"))
     rawCases (raw-cases-from-lines linesPerCase lines)]
    (map parseFunction (:rawCases rawCases))))
