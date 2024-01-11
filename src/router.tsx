import { Navigate, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root/route";
import Login, { action as loginAction } from "./routes/login";
import { action as logoutAction } from "./routes/logout";
import Dashboard from "./routes/dashboard/route";
import Organizations from "./routes/(organizations)/organizations/route";
import Users from "./routes/users/route";
import Notifications from "./routes/notifications/route";
import Settings from "./routes/settings/route";
import CreateOrganization from "./routes/(organizations)/organizations.create/route";

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
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "organizations",
        element: <Organizations />,
        children: [
          {
            path: "create",
            element: <CreateOrganization />,
          },
        ],
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
