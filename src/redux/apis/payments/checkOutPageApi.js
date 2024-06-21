import API from "../../../API/API";
const api = new API();
const endPoints = "orders";


export const createOrderInCheckOutApi = async (id) => {
  return new Promise(async (resolve, reject) => { 
    try {
      const result = await api.post(`${endPoints}?product_id=${id}`);
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

