(def nsSymbol (symbol "gcj-util.gcj-solver"))
(= nsSymbol 'gcj-util.gcj-solver)

(ns gcj-app)

((symbol "solve-problem") "hello" "HI")

(def probName "reverse_credit")

(load-namespace (namespace nsSymbol))

(resolve (symbol "nsSymbol"))

(munge nsSymbol)

(in-ns (quote nsSymbol))

(= (quote (symbol "hello")) 'hello)

(quote "H")

probName



(gcj-util.gcj-solver/solve-problem "reverse_words" "some input file\n that has many lines\n and such")


(aget js/gcj_util "gcj_solver")

(comment

;<F5>
(.reload (.-location js/document))
  
;<F6>
(println (solve-problem "hey" "ho"))
  
 )
