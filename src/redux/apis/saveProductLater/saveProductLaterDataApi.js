import API from "../../../API/API";
const api = new API();
const addEndPoints = "saved_for_later";
const getAndDeleteEndPoints = "saved_for_laters";
const moveProductToCartFromSavedForLaterEndPoints = "move_to_cart";

export const createSaveProductForLaterApi = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${addEndPoints}/${id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in createSaveProductLaterApi:", error);
      reject(error);
    }
  });
};
export const loadSaveProductForLaterApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${getAndDeleteEndPoints}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadSaveProductLaterApi:", error);
      reject(error);
    }
  });
};
export const deleteSaveProductForLaterApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.delete(`${getAndDeleteEndPoints}/${userId}`);
      resolve(result);
    } catch (error) {
      console.error("Error in deleteSaveProductLaterApi:", error);
      reject(error);
    }
  });
};
export const createProductMovetoCartFromSavedForLaterApi = async (saveID) => {
  return new Promise(async (resolve, reject) => {//saveId is the id of save for later list
    try {
      const result = await api.delete(
        `${moveProductToCartFromSavedForLaterEndPoints}/${saveID}`
      );
      resolve(result);
    } catch (error) {
      console.error("Error in deleteSaveProductLaterApi:", error);
      reject(error);
    }
  });
};
