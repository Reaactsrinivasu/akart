import API from "../../../API/API";
const api = new API();
const endPoints = "contents";
const subEndPoints = "terms_and_conditions";

export const loadTermsAndConditionsApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}?title=${subEndPoints}`);
      resolve(result?.data?.data);
    } catch (error) {
      console.error("Error in loadTermsAndConditionsApi:", error);
      reject(error);
    }
  });
};
