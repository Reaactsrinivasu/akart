// const createActionCreators = ({ actionTypes, title }) => {
//   return {
//     [`${title}Start`]: () => ({
//       type: `${actionTypes}_START`,
//     }),
//     [`${title}Success`]: (data) => ({
//       type: `${actionTypes}_SUCCESS`,
//       payload: data,
//     }),
//     [`${title}Error`]: (error) => ({
//       type: `${actionTypes}_ERROR`,
//       payload: error,
//     }),
//   };
// };

const createActionCreators = ({ actionTypes, title }) => {
  return {
    [`${title}Start`]: () => ({
      type: `${actionTypes}_START`,
    }),
    [`${title}Success`]: (data) => ({
      type: `${actionTypes}_SUCCESS`,
      payload: data,
    }),
    [`${title}Error`]: (error) => ({
      type: `${actionTypes}_ERROR`,
      payload: error,
    }),
  };
};

export default createActionCreators;

