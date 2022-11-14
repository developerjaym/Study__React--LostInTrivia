import { useContext } from "react";
import { ToastContext } from "../context/Toasts";
import timer from "./Timer";
import "./Toast.css";

export default function Toast() {
  const { toastMessage, setToastMessage } = useContext(ToastContext);

  const myTimer = timer;
    myTimer.func = () => {
        if(toastMessage && toastMessage.expiration < new Date()) {
            setToastMessage(null);
        }
    }
  return Boolean(toastMessage) ? (
    <div className={`toast toast--${toastMessage.mood}`}>
      {toastMessage.message}
    </div>
  ) : null;
}
