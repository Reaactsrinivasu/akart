import API from "../../../API/API";
const api = new API();
const endPoints = "dislikes";

export const createDisLikesApi = async (review_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}?review_id=${review_id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in DisLikes in api:", error);
      reject(error);
    }
  });
};
export const loadDisLikesApi = async (review_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}/${review_id}`);
      resolve(result);
    } catch (error) {
      console.error("Error in DisLikes in api:", error);
      reject(error);
    }
  });
};
