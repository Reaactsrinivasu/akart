import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyDepSZFaBM-6OL0XwhpH1SZpwO90roCh4Q",
  authDomain: "my-push-notifications-666.firebaseapp.com",
  projectId: "my-push-notifications-666",
  storageBucket: "my-push-notifications-666.appspot.com",
  messagingSenderId: "254670177759",
  appId: "1:254670177759:web:68c9274c47a872accbf06a",
  measurementId: "G-Z5T0C2WGLH",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BKva46Vfhc-tMqTQVqVGSnBZZWe8eH6M5Hp7yVTrRO3hQxzBXXOAxvbSiRngUIfnzy0mjwFCd3icoxCYRoLVntM",
        serviceWorkerRegistration: await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        ),
      });
      console.log("FCM Token:", token);
      return token;
    } else {
      throw new Error("Notification permission not granted");
    }
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Message received in foreground:", payload);
      resolve(payload);
    });
  });

export { messaging };
