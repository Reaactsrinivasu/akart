import API from "../../API/API.js";
const api = new API();
const endPoints = "/accounts/reset_password";
export const createNewPasswordApi = async (users) => {
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
