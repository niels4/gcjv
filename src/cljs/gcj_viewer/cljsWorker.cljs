(ns gcj-viewer.cljsWorker)

(.addEventListener js/self "message"
  (fn [event]
    (let
      [data (js->clj (aget event "data"))
       problemName (data "problemName")
       input (data "input")]
      (.postMessage js/self
      (clj->js {:status "completed",
       :message (str "Message received!! " problemName)})))))
