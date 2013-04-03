(ns leiningen.webapp
  (:use [clojure.java.shell :only [sh with-sh-dir]]
        [clojure.java.io :only [file delete-file writer copy]]))

(defn delete-file-recursively
    "Delete file f. If it's a directory, recursively delete all its contents.
Raise an exception if any deletion fails unless silently is true."
    [f & [silently]]
    (System/gc) ; This sometimes helps release files for deletion on windows.
    (let [f (file f)]
          (if (.isDirectory f)
                  (doseq [child (.listFiles f)]
                            (delete-file-recursively child silently)))
          (delete-file f silently)))

(defn webapp
  "Build the static webapp for GCJ Viewer"
  [projects & args]
  (let
    [publicSrcDir (str (:root projects) "/src/public")
     indexFile    (file (str publicSrcDir "/index.html"))
     publicDeployDir (str (:target-path projects) "/public")
     publicBuiltDir (str (:target-path projects) "/public")
     indexDeployFile    (file (str publicDeployDir "/index.html"))
     mainJsBuilt (file (str publicBuiltDir "/js/main.js"))]
    (println "Building GCJ Viewer Webapp...")
    ;(println projects)
    (println "public directory:" publicDeployDir)
    (delete-file-recursively publicDeployDir true)
    (.mkdir (file publicDeployDir))
    (copy indexFile indexDeployFile)))
