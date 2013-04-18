^:cljs (ns problems.lawnmower.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.lawnmower.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "lawnmower")

(def linesPerCase :var1)

(defn parseCase
  [{:keys [index value]}]
  (let
    [lines value
     rows (vec (for [line (rest lines)]
                 (->> (split line #"\s")
                      (map to-int)
                      indexed-values
                      vec)))]
    {:caseNumber index
     :rows rows}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn rowsToCols
  [rows]
  (vec (for [rowIndex (range (count (rows 0)))]
    (vec (for [row rows]
      (:value (row rowIndex)))))))

(defn colValid?
  [cols {:keys [index value]}]
  (every? #(<= % value) (cols (dec index))))

(defn rowValid?
  [cols row]
  (let
    [maxHeight (apply max (map :value row))
     colsToCheck (filter #(< (:value %) maxHeight) row)]
    (every? (partial colValid? cols) colsToCheck)))

(defn processCase
  [{:keys [caseNumber rows]}]
  (let
    [cols (rowsToCols rows)
     isValid (every? (partial rowValid? cols) rows)
     result (if isValid "YES" "NO")]
    ^:clj (print-status (str "Completed Case #" caseNumber))
    {:caseNumber caseNumber
     :result     result}))

(defn ^:export solve-for-input
  [input]
  (str (solve-problem caseParser processCase input)))

(comment ;comment area used for repl development

;<F5> Parse and print sample
(def cases (caseParser (read-input-text problemName "sample")))
(pprint cases)
(def rows (:rows (nth cases 2)))

(def cols (rowsToCols rows))
(colValid? cols {:index 2 :value 1})

;<F6> Test sample output vs expected output
(test-expected-output solve-for-input problemName "sample")

;<S-F5> Parse and print small
(def cases (caseParser (read-input-text problemName "small")))
(pprint cases)

;<S-F6> Solve small and copy output file location to clipboard
(println (write-solution solve-for-input problemName "small"))

;<C-F6> Solve large and copy output file location to clipboard
(def largeSolution (write-solution solve-for-input problemName "large"))
  
;<Refresh>
(load-file (str "target/cljx_generated/clj/problems/lawnmower/main.clj"))
(in-ns 'problems.lawnmower.main)

)
