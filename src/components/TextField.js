import React from "react";
import Imports from "../common/Imports";
const ReusableFormTextField = (props) => {
  return (
    <>
      <Imports.TextField
        InputProps={{
          style: {
            // Example styles
            backgroundColor: "#fff",
            color: "black",
            borderRadius: "8px",
            padding: "10px 8px",
            height: '2.75rem',
            // border:'1px solid #cfcfcf',
          },
          // disableunderline: true, //Removes the underline
          //  underline:false, // Removes the underline
          classes: {
            root: {
              borderBottom: "none", // Remove the underline
            },
          },
        }}
        fullWidth
        placeholder={props.placeholder}
        margin={props.margin}
        label={props.label}
        id={props.id}
        name={props.name}
        type={props.type}
        variant={props.variant}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        error={props.error}
        helperText={props.helperText}
        size={props.size}
        autoComplete="off"
      >
        {props.children}
      </Imports.TextField>
    </>
  );
};
export default ReusableFormTextField;
