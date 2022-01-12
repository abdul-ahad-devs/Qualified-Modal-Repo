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

const ParticipantsStyle = {
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
  mar_A: {
    margin: "0px 8%",
  },
};

export default ParticipantsStyle;
