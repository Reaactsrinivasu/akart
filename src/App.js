import React,{useEffect,useState} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Approutes from "./Approutes";
// import { generateToken,messaging } from "./notifications/firebase";
import { generateToken, onMessageListener } from "./firebase";
import { onMessage } from "firebase/messaging";
function App() {

  // useEffect(() => {
  //   generateToken();
  //   onMessage(messaging, (payload) => {
      // console.log('payload', payload);
  //     
  //   });
  // }, [onMessage]);
 
useEffect(() => {
  generateToken().then((token) => {
    if (token) {
      // Send the token to your backend server
      console.log("FCM Token:", token);
    }
  });

  onMessageListener()
    .then((payload) => {
      console.log("Message received in foreground: ", payload);
      // Display notification or handle the payload as required
    })
    .catch((err) => console.log("Failed to receive foreground message: ", err));
}, []);
  return (
    <>
      <ToastContainer />
      <Approutes />
    </>
  );
}

export default App;

