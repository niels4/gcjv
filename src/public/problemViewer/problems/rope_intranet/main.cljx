^:cljs (ns problems.rope_intranet.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.rope_intranet.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "rope_intranet")

(def linesPerCase :var)

(defn parseCase
  [{:keys [index value]}]
  (let
    [lines value
     wires (for [line (rest lines)]
             (let [[lheight rheight] (split line #"\s")]
               {:l (to-int lheight) :r (to-int rheight)}))]
    {:caseNumber index
     :wires wires}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn intersectCount
  [[acc restWires] nextWire]
  (if (empty? restWires)
    acc
    [(+ acc (->> restWires
                 (filter #(< (:r %) (:r nextWire)))
                 count))
     (rest restWires)]))

(defn processCase
  [{:keys [caseNumber wires]}]
  (let
    [wires (sort-by :l  wires)
     result (reduce intersectCount [0 (rest wires)] wires)]
    (print-status (str "Completed Case #" caseNumber))
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
(load-file (str "target/cljx_generated/clj/problems/rope_intranet/main.clj"))
(in-ns 'problems.rope_intranet.main)

)
