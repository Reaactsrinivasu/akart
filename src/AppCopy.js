import React,{useEffect,useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Approutes from "./Approutes";
import { ToastContainer, toast } from "react-toastify";
import { getFirebaseToken, onForegroundMessage } from "./notifications/firebase";
import {
  LoadNotificationsInitiate,
  createFCMTokenInitiate,
} from "./redux/actions/notifications/createFCMTokenActions";
function App() {
  const dispatch = useDispatch();
  const [responsePayload, setResponsePayload] = useState('');
  // useEffect(() => {
  //   generateToken();
  //   onMessage(messaging, (payload) => {
  //     console.log("payload", payload);
  //   });
  // }, [onMessage]);
  //  const ToastifyNotification = ({ title, body }) => (
  //    <div >
  //      <h2 >{title}</h2>
  //      <p>{body}</p>
  //    </div>
  //  );
  useEffect(() => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log('Firebase token: ', firebaseToken);
        if (firebaseToken) {
          // setShowNotificationBanner(false);
          dispatch(createFCMTokenInitiate(firebaseToken));
        }
      })
      .catch((err) => console.error('An error occured while retrieving firebase token. ', err));
  
    onForegroundMessage()
      .then((payload) => {
        console.log("Received foreground message: ", payload);
        const {
          notification: { title, body },
        } = payload;
        // toast(<ToastifyNotification title={title} body={body} />);
      })
      .catch((err) =>
        console.log(
          "An error occured while retrieving foreground message. ",
          err
        )
      );
  }, []);
  return (
    <>
      <ToastContainer />
      <Approutes />
    </>
  );
}

export default App;
-------------------------------------------------
  import React,{useEffect,useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Approutes from "./Approutes";
import { ToastContainer, toast } from "react-toastify";
// import {
//   messaging,
//   generateToken,
//   onMessageListener,
// } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";

import {
  getFirebaseToken,
  onForegroundMessage,
} from "./notifications/firebase";
import {
  // LoadNotificationsInitiate,
  createFCMTokenInitiate,
} from "./redux/actions/notifications/createFCMTokenActions";
function App() {
  const dispatch = useDispatch();
   const ToastifyNotification = ({ title, body }) => (
     <div >
       <h2 >{title}</h2>
       <p>{body}</p>
     </div>
   );
// useEffect(() => {
//   const setupMessaging = async () => {
//     try {
//       const firebaseToken = await generateToken();
//       if (firebaseToken) {
//         console.log("Firebase token: ", firebaseToken);
//         // dispatch(createFCMTokenInitiate(firebaseToken));
//       }

//       onMessageListener()
//         .then((payload) => {
//           console.log("Received foreground message: ", payload);
//           const {
//             notification: { title, body },
//           } = payload;
//         //  toast(<ToastifyNotification title={title} body={body} />);
//         })
//         .catch((err) =>
//           console.error("Error receiving foreground message: ", err)
//         );
//     } catch (err) {
//       console.error("An error occurred while setting up messaging: ", err);
//     }
//   };

//   setupMessaging();
// }, [dispatch]);

  const [showNotificationBanner, setShowNotificationBanner] = useState(
    Notification.permission === "default"
  );

  // useEffect(() => {
  //   onForegroundMessage()
  //     .then((payload) => {
  //       console.log("Received foreground message: ", payload);
  //       const {
  //         notification: { title, body },
  //       } = payload;
  //       toast(<ToastifyNotification title={title} body={body} />);
  //     })
  //     .catch((err) =>
  //       console.log(
  //         "An error occured while retrieving foreground message. ",
  //         err
  //       )
  //     );
  // }, []);


  useEffect(() => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log("Firebase token: ", firebaseToken);
        // if (firebaseToken) {
        //   setTimeout(() => {
        //     dispatch(createFCMTokenInitiate(firebaseToken));
        //   }, 500);
        // }
      })
      .catch((err) =>
        console.error(
          "An error occurred while retrieving firebase token. ",
          err
        )
      );
  }, []);

  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log("Received foreground message: ", payload);
        const {
          notification: { title, body, icon },
        } = payload;

        // Check if the browser supports notifications
        if (Notification.permission === "granted") {
          new Notification(title, {
            body: body,
            icon: icon || "default-icon.png", // Provide a default icon if not included in the payload
          });
        } else if (Notification.permission === "default") {
          // Request permission if not granted yet
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              new Notification(title, {
                body: body,
                icon: icon || "default-icon.png",
              });
            }
          });
        }
      })
      .catch((err) =>
        console.error(
          "An error occurred while retrieving foreground message. ",
          err
        )
      );
  }, []);

  return (
    <>
      <ToastContainer />
      <Approutes />
    </>
  );
}

export default App;



