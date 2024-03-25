import { useEffect } from "react";
import { setOfflineLocalStorage } from "./OfflineStorage";

export const useSaveToLocalstorage = (trigger, data) => {
    useEffect(() => {
      if (data){
        setOfflineLocalStorage(data.key, data.value)
      } 
    //   window.localStorage.setItem(data.key, data.value);
    }, [trigger]);
};