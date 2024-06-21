import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
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
const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log('Permission status:', permission);

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
      console.log('Message received in foreground:', payload);
      resolve(payload);
    });
  });

export { messaging };
