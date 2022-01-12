import {
  primaryColor,
  whiteColor,
  redColor,
  blackColor,
} from "assets/jss/material-dashboard-pro-react";
import authCoverImage from "assets/img/activateImages/activate-cover.png";

const signupStyle = {
  logo: {
    margin: "10px",
    textAlign: "center",
  },
  form: {
    margin: "0px 100px",
  },
  coverImage: {
    backgroundColor: "blanchedalmond",
    minHeight: "100%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center !important",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    backgroundImage: `url(${authCoverImage})`,
  },
  removePadding: {
    padding: "0px !important",
  },
  container: {
    backgroundColor: whiteColor,
  },
  fullSize: {
    width: "100%",
    minHeight: "100vh",
  },
  primary: {
    color: primaryColor[0],
  },
  imgTitle: {
    color: whiteColor,
    fontSize: "3.9rem",
    margin: "40px 0px 0px 0px",
  },
  imgText: { color: whiteColor, fontSize: "2.1rem" },
  whiteBg: {
    backgroundColor: whiteColor,
  },
};

export default signupStyle;
