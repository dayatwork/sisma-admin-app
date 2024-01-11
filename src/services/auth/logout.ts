import { API_URL } from "../common";

export type LogoutResponse = {
  message: string;
};

export async function logout() {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json() as Promise<LogoutResponse>;
}
