import API from "../../../API/API";
const api = new API();
const addEndPoints = "wishlist";
const getAndDeleteEndPoints = "wishlists";
export const createWishListDataApi = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${addEndPoints}/${id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in createWishListDataApi:", error);
      reject(error);
    }
  });
};
export const loadWishListDataApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${getAndDeleteEndPoints}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadWishListDataApi:", error);
      reject(error);
    }
  });
};
export const deleteWishListDataApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.delete(`${getAndDeleteEndPoints}/${userId}`);
      resolve(result);
    } catch (error) {
      console.error("Error in deleteWishListDataApi:", error);
      reject(error);
    }
  });
};
