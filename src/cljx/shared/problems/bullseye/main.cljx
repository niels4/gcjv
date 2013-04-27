^:cljs (ns problems.bullseye.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.bullseye.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "bullseye")

(def linesPerCase 1)

(defn parseCase
  [{:keys [index value]}]
  (let
    [[line] value
     [r t] (map bigint (split line #"\s"))]
    {:caseNumber index
     :r r
     :t t}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(def pi Math/PI)

(defn ring-area
  [r]
  (let
    [r2-2 (* (inc r) (inc r))
     r1-2 (* r r)]
    (- r2-2 r1-2)))

(defn processCase
  [{:keys [caseNumber r t]}]
  (let
    [result (loop
              [paint-area t
               r r
               circles 0]
              (let
                [circle-area (- (* (inc r) pi) (* r pi))]
                (if (< paint-area circle-area)
                  circles
                  (recur (- paint-area circle-area) (+ r 2) (inc circles)))))]
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
(load-file (str "target/cljx_generated/clj/problems/bullseye/main.clj"))
(in-ns 'problems.bullseye.main)

(->> (iterate (partial + 2) 1)
     (take 20)
     (map #(println (str % ": "(ring-area %)))))

)
