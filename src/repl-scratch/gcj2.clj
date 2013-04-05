(ns gcj-app
  (:use [gcj-util.gcj-solver :only [solve-problem]]))



(solve-problem "reverse_words" "some input file\n that has many lines\n and such")

(comment

;<F5>
(println (solve-problem "hey" "ho"))
  
 )
