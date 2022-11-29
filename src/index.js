import React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createHashRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import Home from "./Home/Home";
import "./index.css";
import QuizWrapper from "./Quiz/QuizWrapper";
import Test from "./Quiz/Test/Test";
import { quizLoader } from "./some_tools/QuizLoader";

const router = createHashRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>,
        loader: quizLoader
      },
      {
        path:"/quiz/:id",
        element: <QuizWrapper/>,
        loader: quizLoader
      },
      {
        path:"/test",
        element: <Test/>
      },
    ],
    errorElement:  <Navigate to="/" replace/>
  },
  
  {
    path:"*",
    element: <Navigate to="/" replace/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);
