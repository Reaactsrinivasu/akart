import * as Yup from "yup";
const generateValidationSchema = (fields) => {
  const validationRules = {};
  fields.forEach((field) => {
    switch (field) {
      case "name":
        validationRules.name = Yup.string()
          .min(2, "Name is Short!")
          .max(50, "Name is Long!")
          .required("Name is required");
        break;
      case "email":
        validationRules.email = Yup.string()
          .email("Invalid email address format")
          .required("Email is required");
        break;
      case "mobile_number":
        validationRules.mobile_number = Yup.string()
          .required("Mobile Number is required")
          .matches(/^[6-9][0-9]{9}$/, "Invalid Mobile Number");
        break;
      case "phone_number":
        validationRules.phone_number = Yup.string()
          .required("Phone Number is required")
          .matches(/^[6-9][0-9]{9}$/, "Invalid Phone Number");
        break;
      case "relationship":
        validationRules.relationship = Yup.string()
          .min(3, "Relationship is Short!")
          .max(50, "Relationship is Long!")
          .required("Relationship is required");
        break;
      case "address":
        validationRules.address = Yup.string()
          .min(5, "Address is Short!")
          .max(100, "Address is Long!")
          .required("Address is required");
        break;
      case "first_name":
        validationRules.first_name = Yup.string()
          .min(2, "First Name is Short!")
          .max(50, "First Name is Long!")
          .required("First Name is required");
        break;
      case "last_name":
        validationRules.last_name = Yup.string()
          .min(2, "Last Name is Short!")
          .max(50, "Last Name is Long!")
          .required("Last Name is required");
        break;
      case "password":
        validationRules.password = Yup.string()
          .min(8, "Password should be at least 8 characters")
          .required("Password is required");
        // .validateSync(value, { abortEarly: false }) || "";
        break;
      case "new_password":
        validationRules.new_password = Yup.string()
          .min(8, "New Password should be at least 8 characters")
          .required("New Password is required");
        // .validateSync(value, { abortEarly: false }) || "";
        break;
      case "password_confirmation":
        validationRules.password_confirmation = Yup.string()
          .min(8, "Password should be at least 8 characters")
          .required("Confirm Password is required");
        // .validateSync(value, { abortEarly: false }) || "";
        break;

      // Add additional fields as needed
      default:
        break;
    }
  });
 
  return Yup.object(validationRules);
};
 
const initialValues = {
  name: "",
  email: "",
  mobile_number: "",
  relationship: "",
  address: "",
  first_name: "",
  password: "",
  password_confirmation: ""
  
};
 
export { initialValues, generateValidationSchema };