import API from "../../../API/API";
const api = new API();
const endPoints = "contents";
const subEndPoints = "about_us";

export const loadAboutUsApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}?title=${subEndPoints}`);
      resolve(result?.data?.data);
    } catch (error) {
      console.error("Error in loadAboutUsApi:", error);
      reject(error);
    }
  });
};
