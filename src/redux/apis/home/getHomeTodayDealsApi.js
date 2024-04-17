import API from "../../../API/API";
const api = new API();
const endPoints = "contents";
const subEndPoints = "home_todaydeals_data";
export const loadHomeTodayDealsDataApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Requesting TodayDeals..."); // Log a message before making the request
      const result = await api.get(`${endPoints}?title=${subEndPoints}`); // Assuming `endPoints` is a valid URL
      console.log("TodayDeals data  loaded:", result); // Log the result
      resolve(result);
    } catch (error) {
      console.error("Error in TodayDeals api:", error); // Log the error for debugging
      reject(error);
    }
  });
};
