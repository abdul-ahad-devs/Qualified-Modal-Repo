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

const findingStyle = {
  Maincontainer: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
  },
  mar_neg: {
    marginTop: "-50px",
  },
  li: { margin: "5px", fontWeight: "500" },
  mr_0_pd_0: {
    padding: "0px",
    margin: "0px",
  },
  Title: { fontSize: "1.25rem", fontWeight: "600" },
  cont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mar_L: {
    marginLeft: "30px",
  },
  mar_A: {
    margin: "0px",
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
  list: {
    margin: "0px",
    fontWeight: "500",
    fontSize: "1rem",
  },
  listItem: { margin: "0px", fontWeight: "500" },
  card: {
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "500",
    textTransform: "uppercase",
    padding: "20%",
    margin: "5% 20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  shadow: {
    boxShadow: "none",
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

export default findingStyle;
