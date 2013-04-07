^:cljs (ns problems.{{problemName}}.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.{{problemName}}.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]))

(def problemName "{{problemName}}")

(def linesPerCase 1)

(defn parseCase
  [{:keys [index value]}]
  (let
    [lines value]
    {:caseNumber index
     :lines lines}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn processCase
  [{:keys [caseNumber lines]}]
  (let
    [result ""]
    {:caseNumber caseNumber
     :result     result}))

(defn ^:export solve-for-input
  [input]
  (str (solve-problem caseParser processCase input)))

(comment ;comment area used for repl development

;<F5> Parse and print sample
(def cases (caseParser (slurp "src/cljx/shared/problems/{{problemName}}/input/sample.in")))
(pprint cases)
  
;<Refresh>
(load-file (str "src/cljx/generated/clj/problems/{{problemName}}/main.clj"))
(in-ns 'problems.{{problemName}}.main)

(solve-for-input (slurp "src/cljx/shared/problems/{{problemName}}/input/sample.in"))

)
