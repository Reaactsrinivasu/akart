import API from "../../../API/API";
const api = new API();
const EndPoints = "notifications";

export const loadNotificationApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${EndPoints}`);
      resolve(result);
    } catch (error) {
      console.error("Error in loadNotificationApi:", error);
      reject(error);
    }
  });
};
