(ns gcj-util.misc)

(defn to-int
  [numStr]
  (js/parseInt numStr))

(def indexed-values (let
    [reduceFunction (fn [{:keys [index acc]} nextVal]
                      {:index (inc index)
                       :acc   (conj acc {:index index
                                         :value nextVal})})
     initialAcc     {:index 1, :acc []}]
    (comp :acc (partial reduce reduceFunction initialAcc))))
