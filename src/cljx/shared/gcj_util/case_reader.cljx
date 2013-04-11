(ns gcj-util.case-reader
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [clojure.string :only [split trim-newline]]))

(defmulti cases-from-lines
  (fn [linesPerCase lines]
    (if (keyword? linesPerCase) linesPerCase))
  :default :fixed)

(defmethod cases-from-lines :fixed
  [linesPerCase lines]
  (partition linesPerCase lines))

(defmethod cases-from-lines :var
  [linesPerCase lines]
  (loop
    [acc []
     lines lines]
    (if (empty? lines)
      acc
      (let
        [numLines (->> lines ;take the last int on the first line of each case
                       first
                       (#(split % #"\s"))
                       last
                       to-int)
         [groupedLines restOfFile] (split-at numLines (rest lines))]
        (recur (conj acc groupedLines) restOfFile)))))

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
