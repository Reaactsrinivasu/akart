// Reusable action initiator function generator
// const createInitiator = (actionCreators, apiCall) => {
//   console.log('actionCreators', actionCreators);
//   return (user, navigate) => {
//     return function (dispatch) {
//       dispatch(actionCreators[`${actionCreators.name}Start`]()); // Start action
//       apiCall()
//         .then((res) => {
//           dispatch(actionCreators[`${actionCreators.name}Success`](res)); // Success action
//         })
//         .catch((error) => {
//           dispatch(
//             actionCreators[`${actionCreators.name}Error`](error.message)
//           ); // Error action
//         });
//     };
//   };
// };
const createInitiator = (actionCreators, apiCall, title) => {
  console.log("actionCreators", title, actionCreators);
  return (user, navigate) => {
    return function (dispatch) {
      dispatch(actionCreators[`${title}Start`]()); // Start action
      apiCall()
        .then((res) => {
          // console.log(title, "res", res.data);
          dispatch(actionCreators[`${title}Success`](res)); // Success action
        })
        .catch((error) => {
          dispatch(actionCreators[`${title}Error`](error.message)); // Error action
        });
    };
  };
};
export default createInitiator;


