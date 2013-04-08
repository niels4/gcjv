;;This file autogenerated from 
;;
;;  src/cljx/shared/problems/theme_park/main.cljx
;;
^{:cljs true, :line 1} (ns problems.theme_park.main ^{:line 2} (:use [gcj-util.misc :only [to-int indexed-values]] [gcj-util.case-reader :only [parse-cases-from-input]] [gcj-util.case-solver :only [solve-problem]] [clojure.string :only [split join]]))
^{:line 15} (def problemName "theme_park")
^{:line 17} (def linesPerCase 2)
^{:line 19} (defn parseCase [{:keys [index value]}] ^{:line 21} (let [[line1 line2] value [r k n] ^{:line 23} (->> ^{:line 23} (split line1 #"\s") ^{:line 24} (map to-int)) groups ^{:line 25} (->> ^{:line 25} (split line2 #"\s") ^{:line 26} (map to-int) vec)] {:caseNumber index, :times-run r, :capacity k, :num-groups n, :groups groups}))
^{:line 33} (def caseParser ^{:line 33} (partial parse-cases-from-input parseCase linesPerCase))
^{:line 35} (defn load-groups [groups capacity groups-to-load position] ^{:line 37} (let [next-group ^{:line 38} (get groups position) next-capacity ^{:line 39} (- capacity next-group) next-pos ^{:line 40} (if ^{:line 40} (>= ^{:line 40} (inc position) ^{:line 40} (count groups)) 0 ^{:line 42} (inc position))] ^{:line 43} (if ^{:line 43} (or ^{:line 43} (neg? next-capacity) ^{:line 43} (zero? groups-to-load)) [capacity position] ^{:line 45} (recur groups next-capacity ^{:line 45} (dec groups-to-load) next-pos))))
^{:line 47} (defn check-prev-positions [prev-positions position times-to-run money-made] ^{:line 49} (let [prev-position ^{:line 50} (prev-positions position)] ^{:line 51} (if prev-position ^{:line 52} (let [loop-length ^{:line 53} (- ^{:line 53} (:times-to-run prev-position) times-to-run) loop-money ^{:line 54} (- money-made ^{:line 54} (:money-made prev-position)) loop-times ^{:line 55} (quot times-to-run loop-length) times-left ^{:line 56} (rem times-to-run loop-length) total-loop-money ^{:line 57} (* loop-money loop-times)] {:loop-length loop-length, :loop-money loop-money, :loop-times loop-times, :times-left times-left, :total-loop-money total-loop-money}) nil)))
^{:line 65} (defn run-coaster [load-func groups capacity times-to-run money-made position prev-positions] ^{:line 67} (if ^{:line 67} (zero? times-to-run) money-made ^{:line 69} (let [pos-match ^{:line 70} (check-prev-positions prev-positions position times-to-run money-made)] ^{:line 71} (if ^{:line 71} (and pos-match ^{:line 71} (not= 0 ^{:line 71} (:loop-times pos-match))) ^{:line 72} (let [{:keys [loop-length loop-money loop-times times-left total-loop-money]} pos-match] ^{:line 74} (recur load-func groups capacity times-left ^{:line 74} (+ total-loop-money money-made) position prev-positions)) ^{:line 76} (let [prev-positions ^{:line 76} (assoc prev-positions position {:money-made money-made, :times-to-run times-to-run}) [empty-seats next-pos] ^{:line 78} (load-func position) run-money ^{:line 79} (- capacity empty-seats)] ^{:line 80} (recur load-func groups capacity ^{:line 80} (dec times-to-run) ^{:line 81} (+ run-money money-made) next-pos prev-positions))))))
^{:line 83} (defn processCase [{:keys [caseNumber times-run capacity groups num-groups]}] ^{:line 85} (let [load-func ^{:line 86} (memoize ^{:line 86} (partial load-groups groups capacity ^{:line 86} (count groups))) result ^{:line 87} (run-coaster load-func groups capacity times-run 0 0 {})] {:caseNumber caseNumber, :result ^{:line 89} (str result)}))
^{:line 91} (defn ^{:export true} solve-for-input [input] ^{:line 93} (str ^{:line 93} (solve-problem caseParser processCase input)))