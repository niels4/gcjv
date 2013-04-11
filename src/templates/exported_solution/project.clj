(defproject gcj-solution "0.1.0-SNAPSHOT"
  :description "Solution to Google Code Jam problem"
  :source-paths ["target/cljx_generated/clj" "src/lein_tasks"]
  :eval-in-leiningen true
  :dependencies [[org.clojure/clojure "1.5.1"]]

  :plugins [[com.keminglabs/cljx "0.2.1"]]

  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/cljx_generated/clj"
                   :rules cljx.rules/clj-rules}]} 
)
