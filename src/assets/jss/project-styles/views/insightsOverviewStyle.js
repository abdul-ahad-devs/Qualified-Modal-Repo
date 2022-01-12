import { grayColor } from "assets/jss/material-dashboard-pro-react";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import { whiteColor } from "assets/jss/material-dashboard-pro-react";

const insightsOverviewStyle = {
  container: {
    marginTop: "20px",
    marginBottom: "100px",
  },
  overView: {
    backgroundColor: grayColor[13],
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mar_A: {
    margin: "0px 8%",
  },
  overviewText: {
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: "500",
    color: grayColor[1],
    textAlign: "center",
  },
  overviewCount: {
    color: primaryColor[0],
    fontSize: "1rem",
    marginLeft: "5px",
    fontWeight: "500",
    textAlign: "center",
  },
  areaShapes: {
    margin: "10px 0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  roundedSquare: {
    padding: "20%",
    backgroundColor: "black",
    borderRadius: "10px",
    textTransform: "uppercase",
    fontSize: "1rem",
    color: whiteColor,
    fontWeight: "600",
  },
  pointer: {
    cursor: "pointer !important",
  },
};

export default insightsOverviewStyle;
