import API from "../../../API/API";
const api = new API();
const EndPoints = "update_device_token";

export const createFCMTokenApi = async (service_token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(
        `${EndPoints}?device_token=${service_token}`
      );
      // const result = await api.post(`${EndPoints}`, service_token);
      resolve(result);
    } catch (error) {
      console.error("Error in createFCMTokenApi:", error);
      reject(error);
    }
  });
};

