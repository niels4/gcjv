(ns gcj-viewer.file-util
  (:use [clojure.string :only [trim-newline]]))

(def baseDir "src/cljx/shared/problems/")

(defn inputFile-name
  [problemName inputName]
  (str baseDir problemName "/input/" inputName ".in"))

(defn outputFile-name
  [problemName inputName]
  (str baseDir problemName "/output/" inputName ".out"))

(def read-input-text (comp slurp inputFile-name))

(def read-output-text (comp slurp outputFile-name))

(defn write-solution
  [solve-for-input problemName inputName]
  (let
    [inputText (read-input-text problemName inputName)
     outputFile (outputFile-name problemName inputName)
     solution (solve-for-input inputText)]
    (spit outputFile solution)
    solution))

(defn test-expected-output
  [solve-for-input problemName inputName]
  (let
    [inputText (read-input-text problemName inputName)
     expectedSolution (trim-newline
                        (read-output-text problemName (str "expected-" inputName)))
     solution (solve-for-input inputText)
     successMsg (if (= solution expectedSolution) "PASSED!" "FAILED!")]
    (println "Expected output:")
    (println expectedSolution)
    (println "Actual output:")
    (println solution)
    (println "GCJ Test Sample: " successMsg)))
