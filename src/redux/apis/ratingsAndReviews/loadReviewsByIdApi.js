import API from "../../../API/API";
const api = new API();
const endPoints = "reviews_and_ratings";

export const loadReviewsApi = async (product_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}/${product_id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadReviewsApi in api:", error);
      reject(error);
    }
  });
};
