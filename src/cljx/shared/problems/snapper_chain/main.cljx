^:cljs (ns problems.snapper_chain.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.snapper_chain.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "snapper_chain")

(def linesPerCase 1)

(defn parseCase
  [{:keys [index value]}]
  (let
    [[line] value
     [num-snappers times-snapped] (->> (split line #"\s")
                                   (map to-int))]
    {:caseNumber index
     :num-snappers num-snappers
     :times-snapped times-snapped}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn snaps-to-power-light
  [num-switches]
  (loop
    [num-switches num-switches
     snap-count 0]
    (if (zero? num-switches)
      snap-count
      (recur (dec num-switches) (inc (* 2 snap-count))))))

(defn is-light-on
  [num-switches num-snaps]
  (let
    [snaps-to-power (snaps-to-power-light num-switches)]
    (loop
      [last-multiple snaps-to-power]
      (cond (= num-snaps last-multiple) true
            (< num-snaps last-multiple) false
            :else (recur (+ last-multiple 1 snaps-to-power))))))

(defn format-state
  [state]
  (if state "ON" "OFF"))

(defn processCase
  [{:keys [caseNumber num-snappers times-snapped]}]
  (let
    [light-state (is-light-on num-snappers times-snapped)
     result (format-state light-state)]
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
(load-file (str "src/cljx/generated/clj/problems/snapper_chain/main.clj"))
(in-ns 'problems.snapper_chain.main)

(snaps-to-power-light 5)

)
