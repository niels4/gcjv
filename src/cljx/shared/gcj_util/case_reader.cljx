(ns gcj-util.case-reader
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [clojure.string :only [split trim-newline]]))

(defn numLines-from-lines0
  [position-func linesPerCase lines]
  "take the last int on the first line of each case"
  (->> lines
       first
       (#(split % #"\s"))
       position-func
       to-int
       inc))

(defmulti numLines-from-lines
  (fn [linesPerCase lines]
    linesPerCase))

(defmethod numLines-from-lines :var
  [linesPerCase lines]
  "take the last int on the first line of each case"
  (numLines-from-lines0 last linesPerCase lines))

(defmethod numLines-from-lines :var1
  [linesPerCase lines]
  "take the first int on the first line of each case"
  (numLines-from-lines0 first linesPerCase lines))

(defmethod numLines-from-lines :var2
  [linesPerCase lines]
  "take the last int on the first line of each case and add one more line"
  (inc (numLines-from-lines :var lines)))

(defmulti cases-from-lines
  (fn [linesPerCase lines]
    (if (keyword? linesPerCase) :var))
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
        [numLines (numLines-from-lines linesPerCase lines)
         [groupedLines restOfFile] (split-at numLines lines)]
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
               (split #"\n")
               (#(filter (comp not empty?) %)))
     rawCases (raw-cases-from-lines linesPerCase lines)]
    (map parseFunction (:rawCases rawCases))))
