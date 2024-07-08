import API from "../../../API/API";
const api = new API();
const createInvoiceEndPoints = "razor_pay_order_create";
const getInvoiceEndPoints = "get_invoice_id";

export const createInvoiceApi = async (product_details) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const result = await api.post(`${invoiceEndPoints}?product_id=${id}`);
      const result = await api.post(
        `${createInvoiceEndPoints}`,
        product_details
      );
      resolve(result);
    } catch (error) {
      console.error("Error in createInvoicetApi:", error);
      reject(error);
    }
  });
};
export const loadInvoiceApi = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${getInvoiceEndPoints}/${id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadInvoiceApi:", error);
      reject(error);
    }
  });
};
