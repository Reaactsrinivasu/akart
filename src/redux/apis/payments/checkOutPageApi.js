import API from "../../../API/API";
const api = new API();
const endPoints = "orders";
const invoiceEndPoints = "create_invoice_razorpay";

export const createOrderInCheckOutApi = async (user) => {
  return new Promise(async (resolve, reject) => { 
    try {
      // const result = await api.post(`${invoiceEndPoints}?product_id=${id}`);
      const result = await api.post(`${invoiceEndPoints}?customer_id=${user?.customer_id}&amount=${user?.amount}`);
      resolve(result);
    } catch (error) {
      console.error("Error in createOrderInCheckOutApi:", error);
      reject(error);
    }
  });
};
export const loadOrderInCheckOutApi = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}/${id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadOrderInCheckOutApi:", error);
      reject(error);
    }
  });
};

