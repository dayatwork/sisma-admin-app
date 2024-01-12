import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../common";
import { queryClient } from "../../main";

export type GetOrganizationsResponse = {
  message: string;
  data: {
    id: string;
    name: string;
    code: string;
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

type GetOrganizationsParams = {
  search?: string;
};

export async function getOrganizations(
  signal?: AbortSignal,
  params?: GetOrganizationsParams
) {
  const URL = params
    ? `${API_URL}/organizations?` + new URLSearchParams(params)
    : `${API_URL}/organizations`;

  const res = await fetch(URL, {
    method: "GET",
    credentials: "include",
    signal,
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json() as Promise<GetOrganizationsResponse>;
}

export const useOrganizations = (params?: GetOrganizationsParams) => {
  return useQuery<GetOrganizationsResponse>({
    queryKey: [ORGANIZATIONS_KEY, params],
    queryFn: ({ signal }) => getOrganizations(signal, params),
  });
};

export const fetchOrganizations = (params?: GetOrganizationsParams) => {
  return queryClient.fetchQuery({
    queryKey: [ORGANIZATIONS_KEY, params],
    queryFn: ({ signal }) => getOrganizations(signal, params),
  });
};
