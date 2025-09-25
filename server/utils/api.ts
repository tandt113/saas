// server/utils/api.ts
import type { H3Event } from "h3";
import type { FetchOptions } from "ofetch";

type HttpMethod =
  | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS" | "TRACE" | "CONNECT"
  | "get" | "post" | "put" | "patch" | "delete" | "head" | "options" | "trace" | "connect";

// Loại bỏ method gốc (string) của ofetch và thay bằng union mà Nitro chấp nhận
type ApiFetchOptions = Omit<FetchOptions, "method"> & { method?: HttpMethod };

export async function apiFetch<T = unknown>(
  event: H3Event,
  url: string,
  options: ApiFetchOptions = {}
): Promise<T> {
  const config = useRuntimeConfig();
  const token = getCookie(event, "accessToken");
  const base = (config as any).backendBaseUrl || (config as any).apiBase || "";
  const fullUrl = url.startsWith("http") ? url : `${base}${url}`;

  return await $fetch<T>(fullUrl, {
    ...options,
    headers: {
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  }) as T; 
}
