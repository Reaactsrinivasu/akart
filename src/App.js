import React,{useEffect,useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Approutes from "./Approutes";
import { ToastContainer, toast } from "react-toastify";
import {
  messaging,
  generateToken,
  onMessageListener,
} from "./notifications/firebase";
import { onMessage } from "firebase/messaging";
import {
  // LoadNotificationsInitiate,
  createFCMTokenInitiate,
} from "./redux/actions/notifications/createFCMTokenActions";
function App() {
  const dispatch = useDispatch();
  //  const ToastifyNotification = ({ title, body }) => (
  //    <div >
  //      <h2 >{title}</h2>
  //      <p>{body}</p>
  //    </div>
  //  );
useEffect(() => {
  const setupMessaging = async () => {
    try {
      const firebaseToken = await generateToken();
      if (firebaseToken) {
        console.log("Firebase token: ", firebaseToken);
        dispatch(createFCMTokenInitiate(firebaseToken));
      }

      onMessageListener()
        .then((payload) => {
          console.log("Received foreground message: ", payload);
          const {
            notification: { title, body },
          } = payload;
        //  toast(<ToastifyNotification title={title} body={body} />);
        })
        .catch((err) =>
          console.error("Error receiving foreground message: ", err)
        );
    } catch (err) {
      console.error("An error occurred while setting up messaging: ", err);
    }
  };

  setupMessaging();
}, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Approutes />
    </>
  );
}

export default App;

