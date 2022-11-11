import React, { useState } from "react";

const ToastContext = React.createContext();

//provider component
function ToastProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  const [toastMessage, setToastMessage] = useState("");
//   useEffect(() => {

//   }, []);
  return (
    <ToastContext.Provider value={{ toastMessage, setToastMessage }}>
      {children}
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
