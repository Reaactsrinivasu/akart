import API from "../../API/API.js";
const api = new API();
const endPoints = "current_account";
// const endPoints = "accounts";
export const getUserAccountApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}`);
      console.log("result getuserAccount api", result.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
