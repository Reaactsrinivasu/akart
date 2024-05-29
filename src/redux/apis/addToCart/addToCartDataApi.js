import API from "../../../API/API";
const api = new API();
const addEndPoints = "add_to_cart";
const getAndDeleteEndPoints = "add_carts";
export const createAddProductToCartApi = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${addEndPoints}/${id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in createAddProductToCartDataApi:", error);
      reject(error);
    }
  });
};
export const loadAddProductToCartApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${getAndDeleteEndPoints}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadAddProductToCartDataApi:", error);
      reject(error);
    }
  });
};
export const deleteAddProductToCartApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.delete(`${getAndDeleteEndPoints}/${userId}`);
      resolve(result);
    } catch (error) {
      console.error("Error in deleteAddProductToCartDataApi:", error);
      reject(error);
    }
  });
};
