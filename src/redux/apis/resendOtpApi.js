import API from "../../API/API.js";
const api = new API();
const endPoints = "accounts/resend_otp";
export const createResendOtpApi = async (users) => {
  // console.log('users in api', users);
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
