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

const ViewInquiryResultsStyle = {
  container: {
    padding: "50px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    color: "white",
    backgroundColor: primaryColor[0],
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

export default ViewInquiryResultsStyle;
