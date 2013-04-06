(ns problems.store-credit.main
  (:use [clojure.string :only [split]]))

(defn to-int
  [numStr]
  (js/parseInt numStr))

(def indexed-values (let
    [reduceFunction (fn [{:keys [index acc]} nextVal]
                      {:index (inc index)
                       :acc   (conj acc {:index index
                                         :value nextVal})})
     initialAcc     {:index 1, :acc []}]
    (comp :acc (partial reduce reduceFunction initialAcc))))

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
    [lines (split input #"\n")
     rawCases (raw-cases-from-lines linesPerCase lines)]
    (map parseFunction (:rawCases rawCases))))

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
