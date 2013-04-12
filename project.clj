(defproject cljs-workers "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["target/cljx_generated/clj"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1586"]]

  :plugins [[lein-cljsbuild "0.3.0"]
            [com.keminglabs/cljx "0.2.0"]]

  :cljx {:builds [{:source-paths ["src/cljx/shared" "src/cljx/server"]
                   :output-path "target/cljx_generated/clj"
                   :rules cljx.rules/clj-rules}
                  
                  {:source-paths ["src/cljx/shared" "src/cljx/client"]
                   :output-path "target/cljx_generated/cljs"
                   :extension "cljs"
                   :include-meta true
                   :rules cljx.rules/cljs-rules}

                  {:source-paths ["src/cljx/client-dev"]
                   :output-path "target/cljx_generated/cljs-dev"
                   :extension "cljs"
                   :include-meta true
                   :rules cljx.rules/cljs-rules}]}

  :cljsbuild {:builds
              {:prod
                {
                  :source-paths ["target/cljx_generated/cljs"]
                  :compiler {
                             :output-to "src/public/js/workers/cljsWorker.js"
                             :optimizations :advanced}}
               :dev
                {
                  :source-paths ["target/cljx_generated/cljs" "target/cljx_generated/cljs-dev"]
                  :compiler {
                             :output-to "src/public/js/workers/cljsWorker-dev.js"
                             :optimizations :whitespace}
                 }}})
