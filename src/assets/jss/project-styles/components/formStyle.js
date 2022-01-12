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
    boxShadow:
      "0 14px 26px -12px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.42), 0 4px 23px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.1)",
  },
  form: {
    borderRadius: "25px",
    boxShadow:
      "0 14px 26px -12px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.42), 0 4px 23px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.1)",
  },
  formControl: {
    margin: "20px",
    display: "flex",
    zIndex: "1 !important",
  },
  inputLabel: {
    fontWeight: "450",
    color: `${blackColor} !important`,
    fontSize: "1.25rem",
  },
  errorInput: {
    border: `1px solid ${redColor}`,
    borderRadius: "25px",
    paddingLeft: "10px",
    fontSize: "1rem",
  },

  input: {
    border: `1px solid ${grayColor[0]}`,
    borderRadius: "10px",
    padding: "3px 3px 3px 10px",
    fontSize: "1rem",
    backgroundColor: "transparent",
  },
  iconInput: {
    display: "flex",
    flex: 1,
    border: `1px solid ${grayColor[0]}`,
    borderRadius: "5px",
    alignItems: "center",
  },
  errorIconInput: {
    display: "flex",
    flex: 1,
    border: `1px solid ${redColor}`,
    borderRadius: "5px",
    fontSize: "1rem",
  },

  icon: {
    margin: "0px 10px",
    color: primaryColor[0],
  },
  errorMsg: {
    textTransform: "none",
    color: `${redColor} !important`,
    fontSize: "0.75rem",
    marginTop: "10px",
    textAlign: "left",
  },
  errorIconInputMsg: {
    textTransform: "none",
    color: `${redColor} !important`,
    fontSize: "1rem",
    opacity: "1 !important",
  },
  multilineInput: {
    border: `1px solid ${grayColor[0]}`,
    borderRadius: "15px",
    paddingLeft: "10px",
    fontSize: "1rem",
    backgroundColor: "transparent",
  },

  formFixedHeight: {
    height: "500px",
  },

  selectMenuItemSelected: {
    backgroundColor: primaryColor[0] + "!important",
    color: whiteColor,
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: grayColor[7],
    paddingRight: "30px",
    "&:hover": {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      ...primaryBoxShadow,
    },
    select: {
      padding: "12px 0 7px",
      fontSize: ".75rem",
      fontWeight: "400",
      lineHeight: "1.42857",
      textDecoration: "none",
      textTransform: "uppercase",
      color: grayColor[2],
      letterSpacing: "0",
      "&:focus": {
        backgroundColor: "transparent",
      },
      "&[aria-owns] + input + svg": {
        transform: "rotate(180deg)",
      },
      "& + input + svg": {
        transition: "all 300ms linear",
      },
    },
    selectMenu: {
      "& > div > ul": {
        border: "0",
        padding: "5px 0",
        margin: "0",
        boxShadow: "none",
        minWidth: "100%",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "block",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: whiteColor,
        backgroundClip: "padding-box",
      },
      "& $selectPaper $selectMenuItemSelectedMultiple": {
        backgroundColor: "inherit",
      },
      "& > div + div": {
        maxHeight: "266px !important",
      },
    },
  },
  required: {
    color: redColor,
  },

  disabled: {
    border: `1px solid ${grayColor[0]}`,
    borderRadius: "10px",
    padding: "3px 3px 3px 10px",
    fontSize: "1rem",
    color: `#606060 !important`,
    backgroundColor: grayColor[4],
  },
  marginRight: {
    marginRight: "5px",
  },
  clickAble: {
    cursor: "pointer",
  },
  placeHolder: {
    color: grayColor[4],
  },
  selected: {
    backgroundColor: "white !important",
  },
};

export default formStyle;
