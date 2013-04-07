(ns gcj-viewer.file-util)

(def baseDir "src/cljx/shared/problems/")

(defn read-input-text
  [problemName inputName]
  (slurp (str baseDir problemName "/input/" inputName ".in")))

(defn write-solution
  [solve-for-input problemName inputName]
  (let
    [inputText (read-input-text problemName inputName)
     outputFile (str baseDir problemName "/output/" inputName ".out")
     results (solve-for-input inputText)]
    (spit outputFile results)))
