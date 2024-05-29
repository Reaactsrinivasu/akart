import API from "../../API/API";
const api = new API();

export const getApi = async ({endPoints,subEndPoints}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}?title=${subEndPoints}`);
      resolve(result.data);
      // resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
