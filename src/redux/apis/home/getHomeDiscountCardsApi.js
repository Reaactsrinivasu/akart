import API from "../../../API/API";
const api = new API();
const endPoints = "contents";
const subEndPoints = "home_discountcards_data";
export const loadHomeDiscountCardsDataApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Requesting carousel..."); // Log a message before making the request
      const result = await api.get(`${endPoints}?title=${subEndPoints}`); // Assuming `endPoints` is a valid URL
      console.log("DiscountCardsData data  loaded:", result); // Log the result
      resolve(result);
    } catch (error) {
      console.error("Error in DiscountCardsData api:", error); // Log the error for debugging
      reject(error);
    }
  });
};
