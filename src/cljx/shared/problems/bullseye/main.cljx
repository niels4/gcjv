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
    [area0 (* r r)
     n0 (bigint (/ (inc r) 2))
     n0 (if (even? r)
          (+ 2 n0)
          n0)
     target-area (+ (* 2 t) area0 (* 4 n0))
     max-r (Math/sqrt target-area)
     max-n (bigint (/ (inc max-r) 2))
     result {:n0 n0
             :area0 area0
             :target-area target-area
             :max-r max-r
             :max-n max-n
             :answer (str (bigint (- max-n n0)))}]
    ^:clj (print-status (str "Completed Case #" caseNumber))
    {:caseNumber caseNumber
     :result     (:answer result)}))

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
