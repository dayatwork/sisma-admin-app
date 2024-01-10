import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root";
import Login, { action as loginAction } from "./routes/login";

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  { path: "/login", element: <Login />, action: loginAction },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
]);
