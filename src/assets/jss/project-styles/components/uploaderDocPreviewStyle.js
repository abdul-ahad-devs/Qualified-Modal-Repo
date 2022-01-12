import {
  grayColor,
  primaryColor,
  blackColor,
} from "assets/jss/material-dashboard-pro-react";

const uploaderDocPreviewStyle = {
  root: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    border: `1px solid ${grayColor[4]}`,
    borderRadius: "5px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  filePreviewContainer: {
    border: `1px solid ${grayColor[4]}`,
    borderRadius: "5px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  fileStyles: {
    height: "30px",
    width: "30px",
  },
  fileName: {
    fontSize: "0.7rem",
    fontWeight: "bold",
    color: blackColor,
    textAlign: "center",
    alignSelf: "center",
  },
  deleteIcon: {
    color: primaryColor[0],
  },
  filePreview: {
    width: "40px",
    height: "40px",
  },
};

export default uploaderDocPreviewStyle;
