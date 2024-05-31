import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Componnet/Home.jsx";
import Login from "./Componnet/Login.jsx";
import Singup from "./Componnet/Singup.jsx";
import Dashbord from "./Componnet/Dashbord.jsx";
import T from "./Componnet/T.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signin" element={<Singup />} />
      <Route path="dashbord" element={<Dashbord />} />
      <Route path="/home/test" element={<T />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
