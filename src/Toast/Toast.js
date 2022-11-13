import { useContext, useEffect } from "react";
import { ToastContext } from "../context/Toasts";
import "./Toast.css";

export default function Toast() {
    const {toastMessage, setToastMessage} = useContext(ToastContext);
    useEffect(() => {
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);
    }, [toastMessage, setToastMessage]);
    return (
       Boolean(toastMessage) ?  <div className={`toast toast--${toastMessage.mood}`}>{toastMessage.message}</div> : null
    );
}