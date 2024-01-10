import { Outlet, redirect } from "react-router-dom";
import { getLoggedInUser } from "../services/auth/me";
import { queryClient } from "../main";

export async function loader() {
  try {
    const response = await getLoggedInUser();
    return queryClient.fetchQuery({
      queryKey: ["me"],
      queryFn: () => response,
    });
  } catch (error) {
    return redirect("/login");
  }
}

export default function Root() {
  return <Outlet />;
}
