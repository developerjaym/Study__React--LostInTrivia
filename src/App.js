import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import { ToastProvider } from "./context/Toasts";
import Toast from "./Toast/Toast";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Toast/>
      </div>
    </ToastProvider>
  );
}

export default App;
