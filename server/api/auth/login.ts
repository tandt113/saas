import { apiFetch } from "../../utils/api";
import { handleApiSuccess, handleApiError } from "../../utils/responseHandler";
import setTokenCookie from '@/composables/useCookies';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const data = await apiFetch<any>(event, "/account/login", {
      method: "POST",
      body,
    });

    setTokenCookie(event, data.metadata?.accessToken || '');

    return handleApiSuccess(data, "Đăng nhập thành công");
  } catch (error) {
    handleApiError(error);
  }
});
