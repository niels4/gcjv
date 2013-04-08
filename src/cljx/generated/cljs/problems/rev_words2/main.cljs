;;This file autogenerated from 
;;
;;  src/cljx/shared/problems/rev_words2/main.cljx
;;
^{:cljs true, :line 1} (ns problems.rev_words2.main ^{:line 2} (:use [gcj-util.misc :only [to-int indexed-values]] [gcj-util.case-reader :only [parse-cases-from-input]] [gcj-util.case-solver :only [solve-problem]] [clojure.string :only [split join]]))
^{:line 15} (def problemName "rev_words2")
^{:line 17} (def linesPerCase 1)
^{:line 19} (defn parseCase [{:keys [index value]}] ^{:line 21} (let [lines value] {:caseNumber index, :lines lines}))
^{:line 25} (def caseParser ^{:line 25} (partial parse-cases-from-input parseCase linesPerCase))
^{:line 27} (defn processCase [{:keys [caseNumber lines]}] ^{:line 29} (let [result ""] {:caseNumber caseNumber, :result result}))
^{:line 34} (defn ^{:export true} solve-for-input [input] ^{:line 36} (solve-problem caseParser processCase input))