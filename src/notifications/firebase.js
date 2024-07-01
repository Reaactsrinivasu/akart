import { initializeApp } from "firebase/app";
import { getToken, getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDepSZFaBM-6OL0XwhpH1SZpwO90roCh4Q",
  authDomain: "my-push-notifications-666.firebaseapp.com",
  projectId: "my-push-notifications-666",
  storageBucket: "my-push-notifications-666.appspot.com",
  messagingSenderId: "254670177759",
  appId: "1:254670177759:web:68c9274c47a872accbf06a",
};

console.log("*** Environment ***", process.env.REACT_APP_VAPID_KEY);
console.log("*** Environment ***", process.env.REACT_APP_ENV);
console.log("*** Firebase Config ***", firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
 export const messaging = getMessaging(firebaseApp);

export const getOrRegisterServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    const serviceWorker = await window.navigator.serviceWorker
      .getRegistration("/firebase-push-notification-scope");
    if (serviceWorker) return serviceWorker;
    return window.navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
      {
        scope: "/firebase-push-notification-scope",
      }
    );
  }
  throw new Error("The browser doesn't support service worker.");
};

export const getFirebaseToken = () =>
  getOrRegisterServiceWorker().then((serviceWorkerRegistration) =>
    getToken(messaging, {
      vapidKey:
        "BKva46Vfhc-tMqTQVqVGSnBZZWe8eH6M5Hp7yVTrRO3hQxzBXXOAxvbSiRngUIfnzy0mjwFCd3icoxCYRoLVntM",
      serviceWorkerRegistration,
    })
  );

export const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
