import API from "../../API/API.js";
const api = new API();
const endPoints = "accounts";
const updateMyProfileUserDetailsendPoints = "update_account_details";
export const updateUserAccountApi = async (userId,user) => {
  console.log("userId,user in api", userId, user);
  return new Promise(async (resolve, reject) => {
    try {
       const result = await api.put(`${endPoints}/${userId}`, user);
       console.log("result updateUserAccountApi api", result.data);
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const updateMyProfileUserAccountApi = async (userId,user) => {
  console.log("userId,user in api", userId, user);
  return new Promise(async (resolve, reject) => {
    try {
       const result = await api.put(
         `${updateMyProfileUserDetailsendPoints}/${userId}`,
         user
       );
       console.log("result updateMyProfileUserAccountApi api", result.data);
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
