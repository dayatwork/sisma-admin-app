import { redirect } from "react-router-dom";
import { queryClient } from "@/main";
import { logout } from "@/services/auth/logout";
import { toast } from "sonner";

export const action = async () => {
  try {
    await logout();
    queryClient.clear();
    return redirect("/login");
  } catch (error) {
    toast.error("Logout failed");
    return null;
  }
};

export const loader = async () => {
  return redirect("/dashboard");
};
