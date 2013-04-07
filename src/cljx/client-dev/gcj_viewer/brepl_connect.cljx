(ns gcj-viewer.brepl-connect
(:require [clojure.browser.repl :as repl]))

(defn breplConnect []
  (if true
    (repl/connect "http://localhost:9000/repl")))
