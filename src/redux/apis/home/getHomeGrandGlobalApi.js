import API from "../../../API/API";
const api = new API();
const endPoints = "contents";
const subEndPoints = "home_grandglobal_data"
export const loadHomeGrandGlobalDataApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log("Requesting carousel..."); // Log a message before making the request
      const result = await api.get(`${endPoints}?title=${subEndPoints}`); // Assuming `endPoints` is a valid URL
      // console.log("grandGlobal data  loaded:", result); // Log the result
      resolve(result);
    } catch (error) {
      // console.error("Error in loadAllExpertsApi:", error); // Log the error for debugging
      reject(error);
    }
  });
};
