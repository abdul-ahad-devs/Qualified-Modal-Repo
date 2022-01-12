import { primaryColor } from "assets/jss/material-dashboard-pro-react";

const progressmeterStyle = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    border: `5px solid ${primaryColor[0]}`,
    borderRadius: "15px",
  },
  leftCardContent: {
    borderRadius: "15px",
    textAlign: "center",
    fontWeight: "300",
    padding: "20px",
  },
  rightCardTitle: {
    fontWeight: "600",
    textAlign: "center",
  },
  rightCardMsg: {
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "25px",
  },
  rightCardButton: {
    marginTop: "340px",
    textTransform: "none",
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    flex: "1",
  },
  noTextTransform: {
    textTransform: "none",
  },
};

export default progressmeterStyle;
