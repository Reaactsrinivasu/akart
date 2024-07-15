import API from "../../../API/API";
const api = new API();
const endPoints = "payments";

export const createTransactionApi = async (details) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}`, details);
      resolve(result);
    } catch (error) {
      console.error("Error in createTransactionApi:", error);
      reject(error);
    }
  });
};
export const updateTransactionApi = async (track_id, payment_details) => {
  console.log("payment_details", track_id, payment_details);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.put(`${endPoints}/${track_id}`, payment_details);
      resolve(result);
    } catch (error) {
      console.error("Error in updateTransactionApi:", error);
      reject(error);
    }
  });
};
