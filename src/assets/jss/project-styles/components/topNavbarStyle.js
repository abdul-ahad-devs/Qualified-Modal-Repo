import {
  containerFluid,
  defaultFont,
  grayColor,
} from "assets/jss/material-dashboard-pro-react.js";

const headerStyle = () => ({
  appBar: {
    backgroundColor: "white",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    top: "0",
    width: "100%",
    zIndex: "1029",
    color: grayColor[6],
    paddingTop: "10px",
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
  },
  container: {
    ...containerFluid,
    minHeight: "50px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    paddingTop: "0.625rem",
    paddingBottom: "0.625rem",
    margin: "0 !important",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  finalPadding: {
    padding: "0px 30px !important",
  },
  initialPadding: {
    paddingLeft: "30px",
  },
  logo: {
    padding: "0px",
    margin: "0",
    display: "block",
    position: "relative",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "hsla(0,0%,100%,.3)",
    },
  },
  logoMini: {
    transition: "all 300ms linear",
    opacity: 1,
    float: "left",
    textAlign: "center",
    width: "30px",
    display: "inline-block",
    marginRight: "18px",
    color: "inherit",
  },
  logoNormal: {
    ...defaultFont,
    transition: "all 300ms linear",
    display: "block",
    opacity: "1",
    transform: "translate3d(0px, 0, 0)",
    textTransform: "uppercase",
    fontSize: "18px",
    whiteSpace: "nowrap",
    fontWeight: "400",
    lineHeight: "30px",
    overflow: "hidden",
    "&,&:hover,&:focus": {
      color: "inherit",
    },
  },
  img: {
    width: "80px",
    verticalAlign: "middle",
    border: "0",
  },
});

export default headerStyle;
