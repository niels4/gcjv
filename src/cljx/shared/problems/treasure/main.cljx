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
     keysList (map to-int (split (first lines) #"\s"))
     chests (for [chest (rest lines)]
                 (let
                   [[lockType numKeys & keysInside] (map to-int (split chest #"\s"))]
                   {:lockType lockType
                    :keysInside keysInside}))]
    {:caseNumber index
     :keysList keysList
     :chests (apply sorted-set-by (fn [l r] (compare (:index l) (:index r)))
                                      (indexed-values chests))}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(def addToKeysHeld
  (partial reduce
    (fn [keysHeld nextKey]
      (let [nextKeyTotal (get keysHeld nextKey)]
        (if nextKeyTotal
            (assoc keysHeld nextKey (inc nextKeyTotal))
            (assoc keysHeld nextKey 1))))))

(defn removeKeyHeld
  [keysHeld keyType]
  (let
    [keyTotal (get keysHeld keyType)]
    (if (= 1 keyTotal)
      (dissoc keysHeld keyType)
      (assoc keysHeld keyType (dec keyTotal)))))

(defn find-paths
  [keysHeld chests]
  (if (or (empty? keysHeld) (empty? chests))
      (if (empty? chests)
        (lazy-seq [false])
        nil)
      (mapcat (fn [{:keys [index value] :as chest}]
             (let
              [{:keys [lockType keysInside]} value]
              (if (keysHeld lockType)
                (let
                  [keysHeld (removeKeyHeld keysHeld lockType)
                   keysHeld (addToKeysHeld keysHeld keysInside)
                   chests (disj chests chest)
                   paths (find-paths keysHeld chests)]
                  (if (seq paths)
                    (cons index (find-paths keysHeld chests))
                    nil)))))
           chests)))

(defn processCase
  [{:keys [caseNumber keysList chests]}]
  (let
    [keysHeld (addToKeysHeld {} keysList)
     paths (find-paths keysHeld chests)
     bestPath (take-while identity paths)
     validPaths (filter last paths)
     result (if (seq bestPath)
              (join " " bestPath)
              "IMPOSSIBLE")]
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

(disj (:chests (first cases)) {:index 2})

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

(def ls (cons 4 (cons 5 (lazy-seq [(empty? `(1))]))))
(def lastls (last ls))
(if lastls true false)

(def v1 #{1 2 3 4 8})

(contains? v1 3)

(disj v1 3)

)
