import { apiFetch } from "../../utils/api";
import { handleApiSuccess, handleApiError } from "../../utils/responseHandler";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const data = await apiFetch<any>(event, "/account/login", {
      method: "POST",
      body,
    });

    setCookie(event, 'accessToken', data.metadata?.accessToken || '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24
    });

    return handleApiSuccess(data, "Đăng nhập thành công");
  } catch (error) {
    handleApiError(error);
  }
});
