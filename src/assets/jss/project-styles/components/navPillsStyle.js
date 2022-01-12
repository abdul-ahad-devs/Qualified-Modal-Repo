import {
  primaryColor,
  grayColor,
} from "assets/jss/material-dashboard-pro-react.js";

const navPillsStyle = (theme) => ({
  root: {
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
    justifyContent: "left",
  },
  rootLeft: {
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
  },
  scroller: {
    flexGrow: "0",
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      // display: "flex",
      // flexWrap: "wrap",
    },
  },
  primaryIndicator: {
    backgroundColor: primaryColor[0],
  },
  fixed: {
    overflow: "visible !important",
  },
  horizontalDisplay: {
    display: "block",
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    color: grayColor[6],
    height: "auto",
    opacity: "1",
    margin: "0 5px",
    fontSize: "14px",
    maxWidth: "100%",
    minWidth: "100px",
    minHeight: "48px",
    textAlign: "center",
    transition: "all .3s",
    fontWeight: "500",
    lineHeight: "24px",
    borderRadius: "30px",
    textTransform: "none",
    letterSpacing: "initial",
  },
  pillsWithIcons: {
    borderRadius: "4px",
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0",
    },
  },
  labelContainer: {
    padding: "0!important",
    color: "inherit",
  },
  label: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    verticalAlign: "middle",
    alignContent: "flex-start",
  },
  tabName: {
    lineHeight: "24px",
    textTransform: "none",
    fontSize: "1.10rem",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit",
    marginLeft: "5px",
  },
  contentWrapper: {
    marginTop: "20px",
  },
  primary: {
    "&,&:hover": {
      color: primaryColor[0],
    },
  },
});

export default navPillsStyle;
