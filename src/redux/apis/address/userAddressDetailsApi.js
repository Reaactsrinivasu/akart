import API from "../../../API/API";
const api = new API();
const endPoints = "addresses";
// const endPoints = "accounts";
export const loadUserAddressApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}`);
      console.log("result getUserAddressApi api", result.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const createUserAddressApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${endPoints}`,user);
      console.log("result addUserAddressApi api", result.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const updateUserAddressApi = async (userId,user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.put(`${endPoints}/${userId}`,user);
      console.log("result updateUserAddressApi api", result.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const deleteUserAddressApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.delete(`${endPoints}/${userId}`);
      console.log("result deleteUserAddressApi api", result.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
