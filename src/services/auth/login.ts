import { API_URL } from "../common";

export type LoginInput = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  data: {
    accessToken: string;
  };
};

export async function login(input: LoginInput) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw res.json();
  }

  return res.json() as Promise<LoginResponse>;
}
