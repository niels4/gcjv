^:cljs (ns problems.treasure.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.treasure.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "treasure")

(def linesPerCase :var2)

(defn parseCase
  [{:keys [index value]}]
  (let
    [lines (rest value)
     keyTypes (map to-int (split (first lines) #"\s"))
     chests (for [chest (rest lines)]
                 (let
                   [[lockType numKeys & keyTypes] (map to-int (split chest #"\s"))]
                   {:lockType lockType
                    :keyTypes keyTypes}))]
    {:caseNumber index
     :keyTypes keyTypes
     :chests chests}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn processCase
  [{:keys [caseNumber lines]}]
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
(load-file (str "target/cljx_generated/clj/problems/treasure/main.clj"))
(in-ns 'problems.treasure.main)

)
