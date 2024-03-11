import API from "../../API/API.js";
const api = new API();
const endPoints = "accounts/verify_otp";
export const verityOtpWithEmailIdApi = async (users) => {
  console.log('user otp in api', users);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}`, users);
      console.log("result in api", result);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
