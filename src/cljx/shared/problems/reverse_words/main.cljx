^:cljs (ns problems.reverse-words.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.reverse-words.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]))

(def problemName "reverse_words")

(def linesPerCase 1)

(defn parseCase
  [{:keys [index value]}]
  (let
    [[line] value
     words (split line #"\s")]
    {:caseNumber index
     :words words}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn processCase
  [{:keys [caseNumber words]}]
  (let
    [result (->> words
                 reverse
                 (join " "))]
    {:caseNumber caseNumber
     :result     result}))

(defn ^:export solve-for-input
  [input]
  (str (solve-problem caseParser processCase input)))

(comment

;<F5> Parse and print sample
(def cases (caseParser (slurp "src/cljx/problems/reverse_words/input/large.in")))
(pprint cases)
  
;<Refresh>
(load-file (str "src/clj/problems/reverse_words/main.clj"))
(in-ns 'problems.reverse-words.main)

  (solve-for-input (slurp "src/cljx/problems/reverse_words/input/large.in"))

)
