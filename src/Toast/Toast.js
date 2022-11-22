import { useContext } from "react";
import { ToastContext } from "../context/Toasts";
import "./Toast.css";

export default function Toast() {
  const { toastMessage } = useContext(ToastContext);

  return Boolean(toastMessage) ? (
    <div className={`toast toast--${toastMessage.mood} expand`}>
      {toastMessage.message}
    </div>
  ) : null;
}
