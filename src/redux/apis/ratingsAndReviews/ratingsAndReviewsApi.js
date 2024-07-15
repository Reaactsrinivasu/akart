import API from "../../../API/API";
const api = new API();
const endPoints = "create_reviews_and_ratings";
const getEndPoints = "reviews_and_ratings";


export const createRatingAndReviewApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(
        `${endPoints}?product_id=${user.product_id}&rating=${user.rating}&review=${user.review}`
      );
      resolve(result);
    } catch (error) {
      console.error("Error in RatingAndReview in api:", error);
      reject(error);
    }
  });
};

export const loadRatingAndReviewApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${getEndPoints}/${user}`);
      // const result = await api.get(`${endPoints}`);
      resolve(result);
    } catch (error) {
      console.error("Error in RatingAndReview in api:", error);
      reject(error);
    }
  });
};
