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

