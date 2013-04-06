(ns gcj-app
  (:use [gcj-util.misc :only [pairItems combinations2]]))
(combinations2 [:a :b :c :d :e])

(combinations2 [1 2 3 4 5])

(pairItems 1 [2 3 4 5])



(rseq [1 2 3 4 5])

(rseq (subvec [1 2 3 4 5 6 7 9] 1 5))


(solve-for-input "HEYY man heres some input")

(comment

;<F5>
(println (solve-problem "hey" "ho"))
  
 )
