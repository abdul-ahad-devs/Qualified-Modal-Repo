import { grayColor } from "assets/jss/material-dashboard-pro-react.js";
import { primaryColor } from "../material-dashboard-pro-react";

const modalStyle = (theme) => ({
  modalRoot: {
    overflow: "auto",
    alignItems: "unset",
    justifyContent: "unset",
  },
  modal: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "600px",
      margin: "auto",
    },
    borderRadius: "25px !important",
    border: `5px solid ${primaryColor[0]}`,
    overflow: "visible",
    maxHeight: "unset",
    position: "relative",
    height: "fit-content",
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "15px",
    paddingRight: "15px",
    paddingBottom: "0",
    paddingLeft: "15px",
    minHeight: "16.43px",
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143",
  },
  modalCloseButton: {
    color: grayColor[0],
    marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    float: "right",
  },
  modalClose: {
    width: "16px",
    height: "16px",
  },
  modalBody: {
    paddingTop: "20px",
    paddingRight: "20px",
    paddingBottom: "16px",
    paddingLeft: "20px",
    position: "relative",
    overflow: "visible",
  },
  modalFooter: {
    padding: "15px",
    textAlign: "center",
    paddingTop: "0",
    margin: "0",

    "&.MuiDialogActions-root": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px",
    },
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  instructionNoticeModal: {
    marginBottom: "25px",
  },
  imageNoticeModal: {
    maxWidth: "150px",
  },
  modalSmall: {
    width: "300px",
  },
  modalSmallBody: {
    paddingTop: "0",
  },
  modalSmallFooterFirstButton: {
    margin: "0",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "auto",
  },
  modalSmallFooterSecondButton: {
    marginBottom: "0",
    marginLeft: "5px",
  },
});

export default modalStyle;
