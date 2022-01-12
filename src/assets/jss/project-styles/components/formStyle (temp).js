import {
  grayColor,
  hexToRgb,
  blackColor,
  redColor,
  primaryColor,
  whiteColor,
  primaryBoxShadow,
} from "assets/jss/material-dashboard-pro-react.js";

const formStyle = {
  formContainer: {
    borderRadius: "25px",
  },

  formControl: {
    display: "flex",
    zIndex: "1 !important",
  },
  customFormInputLabel: {
    margin: "10px 0px",
    textAlign: "left",
    color: "black",
  },
  inputLabel: {
    color: `${blackColor} !important`,
    display: "flex",
    alignItems: "center",
    height: "0px",
    "&.MuiInputLabel-shrink": {
      marginTop: "6px",
    },
  },
  bold: {
    fontWeight: "500",
  },
  input: {
    fontSize: "1rem",
    backgroundColor: "transparent",
    marginBottom: "30px",
    color: `${blackColor} !important`,
    // STYLING FOR * MARK
    "& .MuiInputLabel-asterisk": {
      color: redColor,
    },
    "& .MuiInputLabel-outlined": {
      color: blackColor,
    },
    // CHANGING THE COLOR OF ICON TO PRIMARY COLOR
    "& .MuiSvgIcon-root": {
      color: `${primaryColor[0]} !important`,
    },
    // MAKING THE LABEL TEXT GRAY ON FOCUSED
    "& label.Mui-focused": {
      color: blackColor,
    },
    // ADDING SOME MARGIN AFTER LEFT ICON
    "& .MuiOutlinedInput-inputMarginDense": {
      marginLeft: "5px",
    },
    "& .MuiOutlinedInput-root": {
      color: `${blackColor} !important`,

      "& fieldset": {
        borderColor: grayColor[0],
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        borderColor: grayColor[0],
        borderRadius: "10px",
      },
    },
    "& .MuiIcon-root": {
      color: `${primaryColor[0]} !important`,
    },
  },

  formFixedHeight: {
    height: "500px",
  },

  selectMenuItemSelected: {
    backgroundColor: primaryColor[0] + "!important",
    color: whiteColor,
  },

  required: {
    color: `${redColor} !important`,
  },

  marginRight: {
    marginRight: "5px",
  },
  clickAble: {
    cursor: "pointer",
  },
  placeHolder: {
    color: blackColor,
  },
  selected: {
    backgroundColor: "white !important",
  },
  textFieldStyling: {
    margin: "30px 0px !important",
  },
  textFieldSelectStyling: {
    paddingBottom: "30px !important",
    "& .Mui-disabled": {
      backgroundColor: `${grayColor[8]} !important`,
    },
  },
  disabled: {
    borderRadius: "10px",
    fontSize: "1rem",
    backgroundColor: `${grayColor[8]} !important`,
    "& .MuiOutlinedInput-root": {
      color: blackColor,
    },
    "& .MuiInputLabel-root": {
      color: `${blackColor} !important`,
    },
  },
  selectInput: {
    borderRadius: "10px",
    fontSize: "1rem",
    backgroundColor: `${whiteColor} !important`,
    color: blackColor,
    padding: "5px",
    margin: "0px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: `${grayColor[0]} !important`,
    },

    // CHANGING THE COLOR OF DROPDOWN CARET
    "& .MuiSelect-iconOutlined": {
      color: primaryColor[0],
    },
  },
  menuItem: {
    borderRadius: "10px !important",
    backgroundColor: `${whiteColor} !important`,
    "&:hover": {
      backgroundColor: `${primaryColor[0]} !important`,
      color: `${whiteColor} !important`,
    },
  },

  disabledSelect: {
    borderRadius: "10px",
    fontSize: "1rem",
    backgroundColor: `${grayColor[8]} !important`,
    color: blackColor,
    padding: "5px",
    margin: "0px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: `${grayColor[0]} !important`,
    },

    // CHANGING THE COLOR OF DROPDOWN CARET
    "& .MuiSelect-iconOutlined": {
      color: grayColor[0],
    },
  },

  // below is the styling for searchable select dropdown
  autocompleteRoot: {
    backgroundColor: "transparent",
    marginBottom: "30px",
    color: `${blackColor} !important`,
    // STYLING FOR * MARK
    "& .MuiInputLabel-asterisk": {
      color: redColor,
    },
    "& .MuiInputLabel-outlined": {
      color: blackColor,
    },
    // MAKING THE LABEL TEXT GRAY ON FOCUSED
    "& label.Mui-focused": {
      color: blackColor,
    },

    "& .MuiOutlinedInput-root": {
      color: `${blackColor} !important`,

      "& fieldset": {
        borderColor: grayColor[0],
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        borderColor: grayColor[0],
        borderRadius: "10px",
      },
    },
    "& .MuiAutocomplete-popupIndicator": {
      color: `${primaryColor[0]} !important`,
    },
  },
  autocompleteInputRoot: {
    padding: "2px 50px 2px 2px !important",
  },
  autocompleteTagSizeSmall: {
    marginLeft: "5px !important",
    backgroundColor: `${primaryColor[0]} !important`,
    color: `${whiteColor} !important`,
  },
  autocompleteOption: {
    "&:hover": {
      borderRadius: "10px !important",
      backgroundColor: `${primaryColor[0]} !important`,
      color: whiteColor,
    },
  },
  optionsContainer: {
    marginTop: "10px",
  },
  optionsField: {
    marginRight: "5px",
  },
  btnIcon: {
    marginRight: "5px",
  },
  optionsLabel: {
    margin: "0px",
    padding: "0px 0px 10px 0px",
  },
  validateOptionsText: {
    color: redColor,
    fontSize: "0.8rem",
    fontWeight: "500",
    margin: "0px 5px",
  },
  optionsButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};

export default formStyle;
