import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.js";

const profileSetup = (theme) => ({
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
  modalBorder: {
    border: `5px solid ${primaryColor[0]}`,
  },
  iconsButtons: {
    marginRight: "10px",
  },
  footer: {
    justifyContent: "center",
  },
  done: {
    marginTop: "20px",
    position: "absolute",
  },
  logout: {
    color: primaryColor[0],
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default profileSetup;
