import API from "../../../API/API";
const api = new API();
const endPoints = "filter_by_product_name";
export const loadInnerProductDataApi = async (user) => {
  console.log("user product inner product page in api", user);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}?link_name=${user}`);
      resolve(result);
    } catch (error) {
      console.error("Error in innerproduct Api:", error);
      reject(error);
    }
  });
};
