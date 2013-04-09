^:cljs (ns problems.theme_park.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.theme_park.main
  (:use [gcj-util.misc :only [to-int indexed-values]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "theme_park")

(def linesPerCase 2)

(defn parseCase
  [{:keys [index value]}]
  (let
    [[line1 line2] value
      [r k n] (->> (split line1 #"\s")
                      (map to-int))
      groups  (->> (split line2 #"\s")
                   (map to-int)
                   vec)]
    {:caseNumber index
     :times-run r
     :capacity  k
     :num-groups n
     :groups groups}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn load-groups
  [groups capacity groups-to-load position]
  (let
    [next-group (get groups position)
     next-capacity (- capacity next-group)
     next-pos (if (>= (inc position) (count groups))
                  0
                  (inc position))]
    (if (or (neg? next-capacity) (zero? groups-to-load))
      [capacity position]
      (recur groups next-capacity (dec groups-to-load) next-pos))))

(defn check-prev-positions
  [prev-positions position times-to-run money-made]
  (let
    [prev-position (prev-positions position)]
    (if prev-position
      (let
        [loop-length (- (:times-to-run prev-position) times-to-run)
         loop-money (- money-made (:money-made prev-position))
         loop-times (quot times-to-run loop-length)
         times-left (rem times-to-run loop-length)
         total-loop-money (* loop-money loop-times)]
        {:loop-length loop-length
         :loop-money loop-money
         :loop-times loop-times
         :times-left times-left
         :total-loop-money total-loop-money})
      nil)))

(defn run-coaster
  [load-func groups capacity times-to-run money-made position prev-positions]
  (if (zero? times-to-run)
      money-made
      (let
        [pos-match (check-prev-positions prev-positions position times-to-run money-made)]
        (if (and pos-match (not= 0 (:loop-times pos-match)))
          (let
            [{:keys [loop-length loop-money loop-times times-left total-loop-money]} pos-match]
            (recur load-func groups capacity times-left (+ total-loop-money money-made)
                  position prev-positions)) 
          (let [prev-positions (assoc prev-positions position {:money-made money-made
                                                            :times-to-run times-to-run})
              [empty-seats next-pos] (load-func position)
              run-money (- capacity empty-seats)]
          (recur load-func groups capacity (dec times-to-run)
                (+ run-money money-made) next-pos prev-positions))))))

(defn processCase
  [{:keys [caseNumber times-run capacity groups num-groups]}]
  (let
    [load-func (memoize (partial load-groups groups capacity (count groups)))
     result (run-coaster load-func groups capacity times-run 0 0 {})]
    {:caseNumber caseNumber
     :result     (str result)}))

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
(load-file (str "target/cljx_generated/clj/problems/theme_park/main.clj"))
(in-ns 'problems.theme_park.main)

)
