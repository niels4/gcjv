^:cljs (ns problems.fair_and_square.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.fair_and_square.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "fair_and_square")

(def linesPerCase 1)

(defn parseCase
  [{:keys [index value]}]
  (let
    [[line] value
     [start end] (map to-int (split line #"\s"))]
    {:caseNumber index
     :start start
     :end end}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn palindrome?
  [value]
  (= (reverse (str value)) (seq (str value))))

(defn processCase
  [{:keys [caseNumber start end]}]
  (let
    [result ""]
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
(load-file (str "target/cljx_generated/clj/problems/fair_and_square/main.clj"))
(in-ns 'problems.fair_and_square.main)

(defn fair-and-square?
  [value]
  (and (palindrome? value) (palindrome? (* value value))))


(->> (range)
     (filter  fair-and-square?)
     (take-while #(<= % 1E10))
     count)

)
