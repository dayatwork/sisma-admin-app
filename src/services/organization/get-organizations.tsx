import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../common";
import { queryClient } from "../../main";

export type GetOrganizationsResponse = {
  message: string;
  data: {
    id: string;
    name: string;
    type: "SUPPLIER" | "HEALTHCARE_PROVIDER" | "GOVERNMENT" | null;
    logo: string | null;
    province: string | null;
    city: string | null;
    district: string | null;
    subdistrict: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
};

export const ORGANIZATIONS_KEY = "organizations";

export async function getOrganizations(signal?: AbortSignal) {
  const res = await fetch(`${API_URL}/organizations`, {
    method: "GET",
    credentials: "include",
    signal,
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json() as Promise<GetOrganizationsResponse>;
}

export const useOrganizations = () => {
  return useQuery<GetOrganizationsResponse>({
    queryKey: [ORGANIZATIONS_KEY],
    queryFn: ({ signal }) => getOrganizations(signal),
  });
};

export const fetchOrganizations = () => {
  return queryClient.fetchQuery({
    queryKey: [ORGANIZATIONS_KEY],
    queryFn: ({ signal }) => getOrganizations(signal),
  });
};
