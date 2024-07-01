// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDepSZFaBM-6OL0XwhpH1SZpwO90roCh4Q",
  authDomain: "my-push-notifications-666.firebaseapp.com",
  projectId: "my-push-notifications-666",
  storageBucket: "my-push-notifications-666.appspot.com",
  messagingSenderId: "254670177759",
  appId: "1:254670177759:web:68c9274c47a872accbf06a",
  measurementId: "G-Z5T0C2WGLH",
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});



