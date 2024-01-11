import { Navigate, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root/route";
import Login, { action as loginAction } from "./routes/login";
import { action as logoutAction } from "./routes/logout";
import Dashboard from "./routes/dashboard/route";

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  { path: "/login", element: <Login />, action: loginAction },
  { path: "/logout", action: logoutAction },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
