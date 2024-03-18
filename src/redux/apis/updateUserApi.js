import API from "../../API/API.js";
const api = new API();
const endPoints = "accounts";
export const updateUserAccountApi = async (userId,user) => {
  console.log("userId,user in api", userId, user);
  return new Promise(async (resolve, reject) => {
    try {
       const result = await api.put(`${endPoints}/${userId}`, user);
       console.log("result updatefamily api", result.data);
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
