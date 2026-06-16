import { API_BASE_URL } from "./constants";
import { getToken } from "./auth-storage";

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(
    message: string,
    status: number,
    data?: unknown
  ) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

type RequestOptions = RequestInit & {
  auth?: boolean;
};

async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    auth = true,
    headers,
    ...restOptions
  } = options;

  const token = getToken();

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...restOptions,
      headers: {
        "Content-Type": "application/json",
        ...(auth &&
          token && {
            Authorization: `Bearer ${token}`,
          }),
        ...headers,
      },
    }
  );

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(
      data?.message || "Something went wrong",
      response.status,
      data
    );
  }

  return data;
}

export const apiClient = {
  get: <T>(
    endpoint: string,
    options?: RequestOptions
  ) =>
    request<T>(endpoint, {
      ...options,
      method: "GET",
    }),

  post: <T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions
  ) =>
    request<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    }),

  patch: <T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions
  ) =>
    request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  delete: <T>(
    endpoint: string,
    options?: RequestOptions
  ) =>
    request<T>(endpoint, {
      ...options,
      method: "DELETE",
    }),
};