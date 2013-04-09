(ns gcj-viewer.cljsWorker)

(.addEventListener js/self "message"
  (fn [event]
    (let
      [data (js->clj (aget event "data"))
       problemName (data "problemName")
       input (data "input")
       solve-for-input (-> js/self
                        (aget "problems")
                        (aget problemName)
                        (aget "main")
                        (aget "solve_for_input"))]
      (.postMessage js/self
        (clj->js {:status "completed",
                  :message (solve-for-input input)})))))
