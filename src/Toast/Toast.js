import { useContext, useEffect } from "react";
import { ToastContext } from "../context/Toasts";
import "./Toast.css";

export default function Toast() {
    const {toastMessage, setToastMessage} = useContext(ToastContext);
    useEffect(() => {
        setTimeout(() => {
            setToastMessage("");
        }, 3000);
    }, [toastMessage, setToastMessage]);
    return (
       Boolean(toastMessage) ?  <div className="toast">{toastMessage}</div> : null
    );
}