import API from "../../../API/API";
const api = new API();
const endPoints = "add_carts";
// const getAndDeleteEndPoints = "add_carts";
export const createAddProductToCartApi = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}?product_id=${id}`);
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
      const result = await api.get(`${endPoints}`);
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
      const result = await api.delete(`${endPoints}/${userId}`);
      resolve(result);
    } catch (error) {
      console.error("Error in deleteAddProductToCartDataApi:", error);
      reject(error);
    }
  });
};
export const updateAddProductToCartApi = async (userId, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.put(`${endPoints}/${userId}?quantity=${user}`);
      console.log("result updateAddProductToCartApi api", result.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};