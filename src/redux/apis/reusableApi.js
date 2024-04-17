import API from "../../API/API";
const api = new API();

export const getApi = async ({endPoints,subEndPoints}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}?title=${subEndPoints}`);
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};
