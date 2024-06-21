import API from "../../../API/API";
const api = new API();
const endPoints = "transactions";

export const createTransactionApi = async (amount) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}?amount=${amount}`);
      resolve(result);
    } catch (error) {
      console.error("Error in createTransactionApi:", error);
      reject(error);
    }
  });
};
