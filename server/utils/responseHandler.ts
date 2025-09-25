export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  statusCode?: number;
}

export interface ApiError {
  statusCode: number;
  statusMessage: string;
  data?: any;
}

/**
 * Handle successful API response
 */
export function handleApiSuccess<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message: message || "Thành công"
  };
}

/**
 * Handle API error and create consistent error response
 */
export function handleApiError(error: any): never {
  const statusCode = error?.statusCode || error?.status || 500;
  const statusMessage = error?.data?.message || "Lỗi không xác định";
  
  throw createError({
    statusCode,
    statusMessage,
    data: error?.data || null
  });
}

/**
 * Wrapper function to handle API calls with consistent response/error handling
 */
export async function withApiHandler<T>(
  apiCall: () => Promise<T>,
  successMessage?: string
): Promise<ApiResponse<T>> {
  try {
    const data = await apiCall();
    return handleApiSuccess(data, successMessage);
  } catch (error) {
    handleApiError(error);
  }
}