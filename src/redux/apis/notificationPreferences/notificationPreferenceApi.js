import API from "../../../API/API";
const api = new API();
const endPoints = "notification_preferances";
export const loadNotificationPreferencesApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${endPoints}`);
      console.log("result getNotificationPreferencesApi api", result.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const updateNotificationPreferencesApi = async (userId, preference) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.put(`${endPoints}/${userId}`, preference);
      console.log("result updateNotificationPreferencesApi api", result.data);
      resolve(result.data); // Directly resolving with the data
    } catch (error) {
      reject(error);
    }
  });
};
// export const updateNotificationPreferencesApi = async (userId, preference) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await api.put(`${endPoints}/${userId}`, {
//         notification_preference: preference,
//       });
//       console.log("result updateNotificationPreferencesApi api", result.data);
//       resolve(result);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

