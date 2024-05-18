import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./Fonts/Proxima.otf";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RedirectResume from "./Components/RedirectToResume/redirectResume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
  },
  {
    path: "/resume",
    element: <RedirectResume />,
    errorElement: <App />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
