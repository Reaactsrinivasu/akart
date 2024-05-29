import API from "../../../API/API";
const api = new API();
const endPoints = "sub_category_filter";
export const loadProductDataApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}?sub_category_name=${user}`); 
      resolve(result);
    } catch (error) {
        console.error("Error in getProduct in api:", error);
        reject(error);
    }
  });
};
