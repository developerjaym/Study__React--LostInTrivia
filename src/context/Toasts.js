import React, { useState } from "react";
import timer from "../Toast/Timer";

const ToastContext = React.createContext();

//provider component
function ToastProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  const [toastMessage, replaceToastMessage] = useState(null);

  const myTimer = timer;
  myTimer.func = () => {
      if(toastMessage && toastMessage.expiration < new Date()) {
          setToastMessage(null);
      }
  }

  const setToastMessage = message => replaceToastMessage({...message, expiration: new Date().setSeconds(new Date().getSeconds() + 4)});
  return (
    <ToastContext.Provider value={{ toastMessage, setToastMessage }}>
      {children}
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
