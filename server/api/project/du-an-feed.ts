import { parseStringPromise } from "xml2js";
import { handleApiSuccess, handleApiError } from "../../utils/responseHandler";
// import { defineEventHandler, getQuery, setResponseHeader } from "h3";

export default defineEventHandler(async (event) => {
  const url = "https://batdongsan.vn/rss/du-an.rss";

  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Failed to fetch RSS: ${resp.status}`);
    }
    const xml = await resp.text();
    const json = await parseStringPromise(xml, { explicitArray: false });

    // Nếu bạn muốn trả JSON
    // setResponseHeader(event, "content-type", "application/json");

    return handleApiSuccess(json, "Lấy thông tin dự án thành công");

    // Nếu bạn muốn trả nguyên XML, thì:
    // setResponseHeader(event, "content-type", "application/xml");
    // return xml;

  } catch (err) {
    handleApiError(err);
  }
});
