(ns leiningen.solve
  (:use [clojure.java.io :only [file]]
        [problems.{{problemName}}.main :only [solve-for-input]]))

(defn solve
  "Solve each file in the input directory with a .in suffix"
  [projects & args]
  (let
    [inputDir (file "input")
     inputFiles (->> inputDir
                     file-seq
                     (filter #(.endsWith (.getName %) ".in")))]
    (doseq [inputFile inputFiles]
      (let
        [inputFileName (.getName inputFile)
         inputName (subs inputFileName 0 (- (count inputFileName) 3))
         inputText (slurp inputFile)
         outputText (solve-for-input inputText)
         outputFileName (str inputDir "/" inputName ".out")]
        (spit outputFileName outputText)))))
