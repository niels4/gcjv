;;This file autogenerated from 
;;
;;  src/cljx/client/gcj_viewer/cljsWorker.cljx
;;
^{:line 1} (ns gcj-viewer.cljsWorker)
^{:line 3} (.addEventListener js/self "message" ^{:line 4} (fn [event] ^{:line 5} (let [data ^{:line 6} (js->clj ^{:line 6} (aget event "data")) problemName ^{:line 7} (data "problemName") input ^{:line 8} (data "input") solve-for-input ^{:line 9} (-> js/self ^{:line 10} (aget "problems") ^{:line 11} (aget problemName) ^{:line 12} (aget "main") ^{:line 13} (aget "solve_for_input"))] ^{:line 14} (.postMessage js/self ^{:line 15} (clj->js {:status "completed", :message ^{:line 16} (solve-for-input input)})))))