import API from "../../../API/API";
const api = new API();
const endPoints = "contents";
const subEndPoints = "privacy_and_policy";
export const loadPrivacyAndPolicyApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}?title=${subEndPoints}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadPrivacyAndPolicyApi:", error);
      reject(error);
    }
  });
};
