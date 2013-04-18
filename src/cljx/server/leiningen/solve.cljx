(ns leiningen.solve
  (:use [clojure.java.io :only [file]]
        [clojure.pprint :only [pprint]]))

(defn solve
  "solve <problemName> <inputName>"
  [projects & [problem-name inputName]]
  (let
    [problem-ns (do
                  (load (str "problems/" problem-name "/main"))
                  (find-ns (symbol (str "problems." problem-name ".main"))))
     solve-for-input (get (ns-publics problem-ns) 'solve-for-input)
     problemDir (str "src/cljx/shared/problems/" problem-name)
     mainFile  (str "target/cljx_generated/clj/problems/" problem-name "/main.clj")
     inputFile (file (str problemDir "/input/" inputName ".in"))
     outputFile (file (str problemDir "/output/" inputName ".out")) 
     inputText (slurp inputFile)
     outputText (solve-for-input inputText)
     ]
    (println "solving for: " problem-name)
    (spit outputFile outputText)
    (println "solution written to:" (.getPath outputFile))))
