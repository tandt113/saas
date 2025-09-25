import { apiFetch } from "../../utils/api";
import { handleApiSuccess, handleApiError } from "../../utils/responseHandler";

export default defineEventHandler(async (event) => {

    try {
        const data = await apiFetch<any>(event, "/account/get-me", {method: "GET"});
        return handleApiSuccess(data, "Lấy thông tin người dùng thành công");
    } catch (error) {
        handleApiError(error);
    }
});
