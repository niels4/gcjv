^:cljs (ns problems.tic_tac_toe_tomek.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]))
^:clj (ns problems.tic_tac_toe_tomek.main
  (:use [gcj-util.misc :only [to-int indexed-values print-status]]
        [gcj-util.case-reader :only [parse-cases-from-input]]
        [gcj-util.case-solver :only [solve-problem]]
        [clojure.string :only [split join]]
        [clojure.pprint :only [pprint]]
        [gcj-viewer.file-util :only [write-solution read-input-text
                                     test-expected-output]]))

(def problemName "tic_tac_toe_tomek")

(def linesPerCase 4)

(defn parseCase
  [{:keys [index value]}]
  (let
    [lines value
     rows (vec (map vec lines))]
    {:caseNumber index
     :rows rows}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))

(defn rowsToCols
  [rows]
  (vec (for [rowIndex (range 4)]
    (vec (for [row rows]
      (row rowIndex))))))

(defn diagonalsFromBoard
  [rows]
  [(vec (for [rowIndex (range 4)]
         ((rows rowIndex) rowIndex)))
   (vec (for [rowIndex (range 4)]
         ((rows rowIndex) (- 3 rowIndex))))])

(defn winFilter
  [symb possibleWin]
  (every? #(or (= % symb) (= % \T)) possibleWin))

(defn boardFull?
  [rows]
  (every? #(not= \. %)
          (for [row rows
                symb row]
               symb)))

(defn processCase
  [{:keys [caseNumber rows]}]
  (let
    [cols (rowsToCols rows)
     diagonals (diagonalsFromBoard rows)
     possibleWins (concat rows cols diagonals)
     xWon (seq (filter (partial winFilter \X) possibleWins))
     oWon (seq (filter (partial winFilter \O) possibleWins))
     boardFull (boardFull? rows)
     result (cond (or xWon oWon) (if xWon "X won" "O won")
                  boardFull "Draw"
                  :else "Game has not completed")]
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
(load-file (str "target/cljx_generated/clj/problems/tic_tac_toe_tomek/main.clj"))
(in-ns 'problems.tic_tac_toe_tomek.main)

)
