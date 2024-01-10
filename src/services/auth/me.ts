import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../common";

type Role =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "ORGANIZATION_ADMIN"
  | "ORGANIZATION_USER";

export type GetLoggedInUserResponse = {
  message: string;
  data: {
    id: string;
    email: string;
    name: string;
    organizationId: string | null;
    photo: string | null;
    isActive: boolean;
    role: Role;
    verifiedAt: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export async function getLoggedInUser(signal?: AbortSignal) {
  const res = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
    signal,
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json() as Promise<GetLoggedInUserResponse>;
}

export const useLoggedInUser = () => {
  return useQuery<GetLoggedInUserResponse>({
    queryKey: ["me"],
    queryFn: ({ signal }) => getLoggedInUser(signal),
  });
};
