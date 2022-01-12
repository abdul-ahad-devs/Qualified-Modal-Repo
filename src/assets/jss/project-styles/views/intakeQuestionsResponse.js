import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.js";

const intakeQuestionsResponse = (theme) => ({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    textAlign: "center",
  },
  modalSectionTitle: {
    marginTop: "30px",
  },
  ...modalStyle(theme),
  bold: {
    fontWeight: "500 !important",
  },
  semiBold: {
    fontWeight: "400 !important",
  },
  modalSize: {
    minWidth: "600px",
  },
  modalBorder: {
    border: `5px solid ${primaryColor[0]}`,
    borderRadius: "10px !important",
  },
  footer: {
    justifyContent: "center",
  },
  submit: {
    marginTop: "20px",
    textTransform: "none",
    position: "absolute",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    flex: "1",
  },
  noTextTransform: {
    textTransform: "none",
  },
  customInputStyle: {
    padding: "5px 0px !important",
  },
  rightAligned: {
    float: "right",
    paddingRight: "0px",
  },
  customPadding: {
    padding: "0px",
  },
  customGridStyle: {
    marginLeft: "42px",
    textAlign: "left",
  },
  closeButton: {
    padding: "5px",
  },
  closeBtnText: {
    fontWeight: "600",
  },
});

export default intakeQuestionsResponse;
