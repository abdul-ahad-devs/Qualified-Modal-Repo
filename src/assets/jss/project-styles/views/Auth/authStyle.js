import backGroundImage from "assets/img/activateImages/activate-cover.png";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { blackColor } from "assets/jss/material-dashboard-pro-react";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const authStyle = {
  no_padding_margin: {
    margin: "0 !important",
    padding: "0 !important",
  },

  login_form: {
    backgroundColor: "white",
    height: "100vh !important",
  },

  login_form_cover: {
    height: "100vh !important",
  },

  login_content: {
    backgroundColor: "blanchedalmond",
    textAlign: "center",
    backgroundImage: `url(${backGroundImage})`,
    height: "100vh !important",
    backgroundPosition: "center !important",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
  },

  form_icon: {
    margin: "10px 0px",
    textAlign: "center",
  },

  invalid_content: {
    marginLeft: "-13px",
  },

  width_80: {
    width: "85% !important",
  },

  login_form_border: {
    border: "1.5px solid rgb(211, 204, 204)",
    borderRadius: "5px",
  },

  login_form_border_invalid: {
    border: "1.5px solid #d65746",
    borderRadius: "5px",
  },

  theme_color: {
    color: "#d65746",
  },

  theme_color_background: {
    backgroundColor: "#d65746 !important",
  },

  login_form_content1: {
    color: "white",
    fontSize: "3.9rem",
    margin: "40px 0px 0px 0px",
  },
  login_form_content2: {
    color: "white",
    fontSize: "2.1rem",
  },

  cursor_pointer: {
    cursor: "pointer",
  },

  forgot_signin_logo: {
    marginTop: "10px",
    marginRight: "4px",
    paddingTop: "20px",
    display: "inline",
  },

  container: {
    display: "flex",
  },

  item1: {
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
  signup: {
    display: "flex",
    flexDirection: "row",
    color: blackColor,
  },
  marginLeft: {
    marginLeft: "5px",
  },
};
export default authStyle;
