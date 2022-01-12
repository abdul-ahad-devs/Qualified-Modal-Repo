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

const AdvancedInsightsStyle = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  mtZero: {
    marginTop: "0px",
  },
  ptZero: {
    paddingTop: "0px !important",
  },
  tabledata: {
    marginBottom: "5px",
    backgroundColor: primaryColor[0],
  },
  header: {
    backgroundColor: "#F0F3F6",
    margin: "20px 5px",
    display: "flex",
    justifyContent: "starting",
    alignItems: "center",
    fontSize: "12px",
    borderRadius: "8px !important",
  },
  heading: {
    fontWeight: "500",
  },
};

export default AdvancedInsightsStyle;
