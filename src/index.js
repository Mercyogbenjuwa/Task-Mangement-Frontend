import React from "react";
import Root from "./routes/root";
import ErrorPage from "./pages/errorpage/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
