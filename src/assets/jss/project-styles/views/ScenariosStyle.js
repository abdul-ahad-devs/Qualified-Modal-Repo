import {
  primaryColor,
  whiteColor,
  blackColor,
  successColor,
  fontFamily,
  tooltip,
  cardTitle,
  grayColor,
  defaultFont,
} from "assets/jss/material-dashboard-pro-react";
import { useFlexLayout } from "react-table";

const ScenariosStyle = {
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    textTransform: "none",
    textAlign: "center",
  },
  Maincontainer: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
  },
  mar_neg: {
    marginTop: "-50px",
  },
  li: { margin: "10px 20px", fontWeight: "500" },
  mr_0_pd_0: {
    padding: "0px",
    margin: "0px",
  },
  mar_L: {
    marginLeft: "100px",
  },
  mar_A: {
    margin: "0px",
  },
  cont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
    marginTop: "10px",
  },
  description: {
    marginTop: "10px",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  shadow: {
    boxShadow: "none",
  },
  list: {
    margin: "30px 0px",
    fontWeight: "500",
    fontSize: "24px",
  },
  card: {
    color: "white",
    fontSize: "20px",
    fontWeight: "400",
    width: "20vh",
    height: "25vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    /* "&:hover": {
          textDecoration: "underline",
        },*/
  },
  header: {
    backgroundColor: "#F0F3F6",
    margin: "20px 5px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: grayColor[1],
    fontSize: "20px",
  },
  heading: {
    fontWeight: "600",

    "&:hover": {
      cursor: "pointer",
    },
  },
  values: {
    color: primaryColor[0],
  },
};

export default ScenariosStyle;
