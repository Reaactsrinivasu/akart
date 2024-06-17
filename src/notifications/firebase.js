// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getMessaging,getToken } from "firebase/messaging";
import { getMessaging, getToken } from "firebase/messaging";
import { onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnenxG5dPH9_LAp-P2e4TrnyfGsFVYpcU",
  authDomain: "akart-ef5dd.firebaseapp.com",
  projectId: "akart-ef5dd",
  storageBucket: "akart-ef5dd.appspot.com",
  messagingSenderId: "1022418037023",
  appId: "1:1022418037023:web:a184e5bb48e323e26de82a",
  measurementId: "G-Q5YHN9D1RN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// export const generateToken = async() => {
//     const permission = await Notification.requestPermission();
//     console.log('permission', permission);
//     if (permission === "granted") {
//         const token = await getToken(messaging, {
//           vapidKey:
//             "BLnOqZXO9GKuziDaxiK-Di9NT2zGhsyTU8BkWW1Y6Ky7msuWTMoHsek5DE2vJsRudK4YgcX-h0oxRrEo1La8kCA",
//         });
//         console.log("token", token);
// }
// };

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log("permission", permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_VAPID_KEY",
      serviceWorkerRegistration: await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js"
      ),
    });
    console.log("FCM Token:", token);
    return token;
  } else {
    console.error("Permission not granted for Notification");
    return null;
  }
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      resolve(payload);
    });
  });
};