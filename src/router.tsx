import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import Root from "./routes/root";

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
]);
