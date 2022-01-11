import { docsFileFormats } from "components/Uploaders/fileFormats";
import { excelFileFormats } from "components/Uploaders/fileFormats";

export const validateWebsite = (url) => {
  const websiteRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

  return websiteRegex.test(url);
};

export const validateMandatoryEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return "This field is mandatory.";
  } else if (!emailRegex.test(email && String(email).toLowerCase()))
    return "Please enter a valid email.";

  return null;
};

// THIS IS CHECKING OPTIONAL EMAIL ADDRESS
export const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email && String(email).toLowerCase())) return true;

  return false;
};

export const validateConfPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "This field is mandatory.";
  } else if (confirmPassword !== password) {
    return "Passwords do not match.";
  }
  return null;
};

// THI FUNCTION WILL REMOVE COMMAS FROM A STRING FIELD AND CONVERT IT INTO A NUMBER
export const convertIntoNumber = (value) => {
  return parseInt(value.split(",").join(""));
};

// THE FUNCTION  IS USED TO VALIDATE NUMBER INPUTS
export const validateNumber = (value) => {
  let newValue = value;
  if (value !== null) {
    if (value.includes(",")) {
      newValue = value.split(",").join("");
    }
    if (!isNaN(newValue)) {
      return true;
    } else {
      return false;
    }
  } else {
    return value;
  }
};
export const isEmpty = (value) => {
  if (value === null || value === undefined || !value || value.length === 0) {
    return "This field is mandatory.";
  }
  return null;
};

export const validatePassword = (value) => {
  if (isEmpty(value)) {
    return "This field is mandatory.";
  }
  if (!verifyPassword(value)) {
    return "at least 8 characters, a number, 1 upper, 1 lower & 1 special character be included";
  }
  return null;
};

const verifyPassword = (value) => {
  var passwordRex = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (passwordRex.test(value)) {
    return true;
  }
  return false;
};
export const isNumber = (value) => {
  if (isEmpty(value)) {
    return "This field is mandatory.";
  }
  if (isNaN(Number(value))) {
    return "This field only contain number";
  }
};

export const validateDate = (selectedDate, expiryDate) => {
  selectedDate = new Date(selectedDate.toLocaleDateString());
  expiryDate = new Date(expiryDate.toLocaleDateString());
  if (!selectedDate) {
    return "This fields is mandatory.";
  } else if (selectedDate.toString() === "Invalid Date") {
    return "Please select a valid date.";
  } else if (selectedDate < expiryDate) {
    return "Please select a valid date.";
  }

  return null;
};

export const validateExcelFiles = (file) => {
  if (excelFileFormats.indexOf(file.type) < 0) {
    return "Please upload the correct file.";
  }
  return null;
};

export const validateMandatoryDocsFiles = (file) => {
  if (!file) {
    return "This field is mandatory.";
  }

  if (docsFileFormats.indexOf(file.type) < 0) {
    return "Please upload the correct file.";
  }

  return null;
};
