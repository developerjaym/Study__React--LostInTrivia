import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastProvider } from "./context/Toasts";
import Toast from "./Toast/Toast";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Outlet/>
        <Toast/>
      </div>
    </ToastProvider>
  );
}

export default App;
