import { grayColor } from "assets/jss/material-dashboard-pro-react";
import { blackColor } from "assets/jss/material-dashboard-pro-react";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";

const circularProgressbar = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxHeight: "200px",
    "& .CircularProgressbar-path": {
      stroke: `${primaryColor[0]} !important`,
    },
    "& .CircularProgressbar-trail": {
      stroke: `${grayColor[5]}`,
    },
    "& .CircularProgressbar-text": {
      fill: `${blackColor} !important`,
      fontSize: "1rem",
      fontWeight: "500 !imporant",
    },
  },
};

export default circularProgressbar;
