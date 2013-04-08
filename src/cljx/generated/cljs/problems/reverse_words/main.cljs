;;This file autogenerated from 
;;
;;  src/cljx/shared/problems/reverse_words/main.cljx
;;
^{:cljs true, :line 1} (ns problems.reverse_words.main ^{:line 2} (:use [gcj-util.misc :only [to-int indexed-values]] [gcj-util.case-reader :only [parse-cases-from-input]] [gcj-util.case-solver :only [solve-problem]] [clojure.string :only [split join]]))
^{:line 15} (def problemName "reverse_words")
^{:line 17} (def linesPerCase 1)
^{:line 19} (defn parseCase [{:keys [index value]}] ^{:line 21} (let [[line] value] {:caseNumber index, :words ^{:line 24} (split line #"\s")}))
^{:line 25} (def caseParser ^{:line 25} (partial parse-cases-from-input parseCase linesPerCase))
^{:line 27} (defn processCase [{:keys [caseNumber words]}] ^{:line 29} (let [result ^{:line 30} (->> words reverse ^{:line 32} (join " "))] {:caseNumber caseNumber, :result result}))
^{:line 36} (defn ^{:export true} solve-for-input [input] ^{:line 38} (str ^{:line 38} (solve-problem caseParser processCase input)))