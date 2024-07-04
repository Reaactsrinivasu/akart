import API from "../../../API/API";
const api = new API();
const endPoints = "payments";
// /payments?product_id=25&address_id=13&type=CashOnDelivery
export const createPaymentWithCodApi = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(
        `${endPoints}`,data
      );
      resolve(result);
    } catch (error) {
      console.error("Error in createPaymentWithCodApi:", error);
      reject(error);
    }
  });
};

