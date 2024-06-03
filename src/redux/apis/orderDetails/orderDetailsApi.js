import API from "../../../API/API";
const api = new API();
const endPoints = "orders";

export const createOrderDetailsApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}?product_id=${user}`);
      resolve(result);
    } catch (error) {
      console.error("Error in orderProduct in api:", error);
      reject(error);
    }
  });
};

export const loadOrderDetailsApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // const result = await api.get(`${endPoints}/${user}`);
      const result = await api.get(`${endPoints}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadOrderProduct in api:", error);
      reject(error);
    }
  });
};

export const deleteOrderDetailsApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.delete(`${endPoints}/${user}`);
      resolve(result);
    } catch (error) {
      console.error("Error in deleteOrderProduct in api:", error);
      reject(error);
    }
  });
};
