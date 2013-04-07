(defproject cljs-workers "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/cljx/generated/clj"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1586"]]

  :plugins [[lein-cljsbuild "0.3.0"]
            [com.keminglabs/cljx "0.2.0"]]

  :cljx {:builds [{:source-paths ["src/cljx/shared"]
                   :output-path "src/cljx/generated/clj"
                   :rules cljx.rules/clj-rules}
                  
                  {:source-paths ["src/cljx/shared" "src/cljx/client"]
                   :output-path "src/cljx/generated/cljs"
                   :extension "cljs"
                   :include-meta true
                   :rules cljx.rules/cljs-rules}

                  {:source-paths ["src/cljx/client-dev"]
                   :output-path "src/cljx/generated/cljs-dev"
                   :extension "cljs"
                   :include-meta true
                   :rules cljx.rules/cljs-rules}]}

  :cljsbuild {:builds
              {:prod
                {
                  :source-paths ["src/cljx/generated/cljs"]
                  :compiler {
                             :output-to "src/public/js/workers/cljsWorker.js"
                             :optimizations :advanced}}
               :dev
                {
                  :source-paths ["src/cljx/generated/cljs" "src/cljx/generated/cljs-dev"]
                  :compiler {
                             :output-to "src/public/js/workers/cljsWorker-dev.js"
                             :optimizations :whitespace}
                 }}})
