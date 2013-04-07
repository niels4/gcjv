;;This file autogenerated from 
;;
;;  src/cljx/shared/problems/store_credit/main.cljx
;;
(ns problems.store-credit.main (:use [gcj-util.misc :only [to-int indexed-values cartesian-product]] [gcj-util.case-reader :only [parse-cases-from-input]] [gcj-util.case-solver :only [solve-problem]] [clojure.string :only [split join]]))
(def problemName "store_credit")
(def linesPerCase 3)
(defn parseCase [{:keys [index value]}] (let [[line1 line2 line3] value credit (to-int line1) items (->> (split line3 #"\s") (map to-int) indexed-values)] {:caseNumber index, :credit credit, :items items}))
(def caseParser (partial parse-cases-from-input parseCase linesPerCase))
(defn processCase [{:keys [caseNumber credit items]}] (let [validItems (filter (fn* [p1__12223#] (< (:value p1__12223#) credit)) items) halfCredit (/ credit 2) bigItems (filter (fn* [p1__12224#] (> (:value p1__12224#) halfCredit)) validItems) smallItems (filter (fn* [p1__12225#] (< (:value p1__12225#) halfCredit)) validItems) halfItems (filter (fn* [p1__12226#] (= (:value p1__12226#) halfCredit)) validItems) resultItems (if (second halfItems) halfItems (->> (for [big bigItems small smallItems :when (= credit (+ (:value big) (:value small)))] [big small]) first)) result (->> resultItems (map :index) sort (join " "))] {:caseNumber caseNumber, :result result}))
(defn solve-for-input [input] (str (solve-problem caseParser processCase input)))