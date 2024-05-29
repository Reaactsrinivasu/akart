import React from 'react';
import Imports from "../common/Imports";
const TextLink = (props) => {
    return (
      <>
        <Imports.Link
          variant={props.variant}
          //   underline={props.underline}
          underline="none"
          onClick={props.onClick}
          sx={{
            cursor: "pointer",
            color: "blue",
            transition: "0.3s",
            fontWeight: 500,
            ...props.sx,
          }}
        >
          {props.title}
        </Imports.Link>
      </>
    );
};

export default TextLink;

// const TextLink = ({ title }) => {
//   return (
//     <ReusableLink
//       variant="subtitle2"
//       underline="none"
//       sx={{
//         cursor: "pointer",
//         color: "blue",
//         // m: 3,
//         transition: "0.3s",
//         fontWeight: 500,
//       }}
//     >
//       {title}
//     </ReusableLink>
//   );
// };