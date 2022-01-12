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

const DocumentsStyle = {
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
};

export default DocumentsStyle;
