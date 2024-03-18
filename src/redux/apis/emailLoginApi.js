import API from "../../API/API.js";
const api = new API();
const endPoints = "/login";
export const createEmailLoginApi = async (users) => {
  // console.log('users in api', users);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}`, users);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
