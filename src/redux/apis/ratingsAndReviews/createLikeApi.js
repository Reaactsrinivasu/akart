import API from "../../../API/API";
const api = new API();
const endPoints = "likes";

export const createLikesApi = async (review_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}?review_id=${review_id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in Likes in api:", error);
      reject(error);
    }
  });
};
export const loadLikesApi = async (review_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}/${review_id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in Likes in api:", error);
      reject(error);
    }
  });
};