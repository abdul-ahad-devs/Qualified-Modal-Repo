import { whiteColor } from "assets/jss/material-dashboard-pro-react";
import { grayColor } from "assets/jss/material-dashboard-pro-react";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import { blackColor } from "assets/jss/material-dashboard-pro-react";

const surveyFormStyle = {
  tableStyle: {
    marginBottom: "35px",
  },
  tableTitle: {
    fontWeight: "600",
  },
  tableRowStyle: {
    border: `4px double ${grayColor[0]}`,
    backgroundColor: grayColor[13],
  },
  justified: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  answerInstructions: {
    fontWeight: "500",
    fontSize: "0.95rem",
    marginBottom: "20px",
  },
  primaryText: {
    color: primaryColor[0],
  },
  customCheckbox: {
    marginBottom: "0px",
  },
  mr5: {
    marginRight: "5px",
  },
  tableHeading: {
    fontWeight: "bold",
    textAlign: "center",
  },
  tableSubHeading: {
    fontWeight: "500",
    textAlign: "center",
  },
  questionStyle: {
    fontSize: "1rem",
    fontWeight: "400",
  },
  ratingOptions: {
    fontSize: "0.9rem",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "400",
  },
  ratingButton: {
    margin: "0px 10px",
  },
  surveyFormEnd: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
};

export default surveyFormStyle;
