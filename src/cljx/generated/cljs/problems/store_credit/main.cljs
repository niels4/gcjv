;;This file autogenerated from 
;;
;;  src/cljx/shared/problems/store_credit/main.cljx
;;
^{:line 1} (ns problems.store-credit.main ^{:line 2} (:use [gcj-util.misc :only [to-int indexed-values cartesian-product]] [gcj-util.case-reader :only [parse-cases-from-input]] [gcj-util.case-solver :only [solve-problem]] [clojure.string :only [split join]]))
^{:line 7} (def problemName "store_credit")
^{:line 9} (def linesPerCase 3)
^{:line 11} (defn parseCase [{:keys [index value]}] ^{:line 13} (let [[line1 line2 line3] value credit ^{:line 15} (to-int line1) items ^{:line 16} (->> ^{:line 16} (split line3 #"\s") ^{:line 17} (map to-int) indexed-values)] {:caseNumber index, :credit credit, :items items}))
^{:line 22} (def caseParser ^{:line 22} (partial parse-cases-from-input parseCase linesPerCase))
^{:line 24} (defn processCase [{:keys [caseNumber credit items]}] ^{:line 26} (let [validItems ^{:line 27} (filter (fn* [p1__383154#] ^{:line 27} (< ^{:line 27} (:value p1__383154#) credit)) items) halfCredit ^{:line 28} (/ credit 2) bigItems ^{:line 29} (filter (fn* [p1__383155#] ^{:line 29} (> ^{:line 29} (:value p1__383155#) halfCredit)) validItems) smallItems ^{:line 30} (filter (fn* [p1__383156#] ^{:line 30} (< ^{:line 30} (:value p1__383156#) halfCredit)) validItems) halfItems ^{:line 31} (filter (fn* [p1__383157#] ^{:line 31} (= ^{:line 31} (:value p1__383157#) halfCredit)) validItems) resultItems ^{:line 32} (if ^{:line 32} (second halfItems) halfItems ^{:line 34} (->> ^{:line 34} (for [big bigItems small smallItems :when ^{:line 36} (= credit ^{:line 36} (+ ^{:line 36} (:value big) ^{:line 36} (:value small)))] [big small]) first)) result ^{:line 39} (->> resultItems ^{:line 40} (map :index) sort ^{:line 42} (join " "))] {:caseNumber caseNumber, :result result}))
^{:line 46} (defn ^{:export true} solve-for-input [input] ^{:line 48} (str ^{:line 48} (solve-problem caseParser processCase input)))