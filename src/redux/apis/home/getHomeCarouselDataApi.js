import API from "../../../API/API";
const api = new API();
const endPoints = "contents";
const subEndPoints = "home_carousel_data";
export const loadHomeCarouselDataApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Requesting carousel..."); // Log a message before making the request
      // const result = await api.get(`${endPoints}?${user}`); // Assuming `endPoints` is a valid URL
      const result = await api.get(`${endPoints}?title=${subEndPoints}`); // Assuming `endPoints` is a valid URL
      console.log("carouseldata loaded:", result); // Log the result
      resolve(result.data);
    } catch (error) {
      console.error("Error in loadAllExpertsApi:", error); // Log the error for debugging
      reject(error);
    }
  });
};