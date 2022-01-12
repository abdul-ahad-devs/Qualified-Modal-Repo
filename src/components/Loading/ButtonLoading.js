import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { ClipLoader } from "react-spinners";

import { whiteColor } from "assets/jss/material-dashboard-pro-react";
import { makeStyles } from "@material-ui/core";

const styles = {
  noPadding: {
    padding: "0px !important",
  },
};

const useStyles = makeStyles(styles);

const ButtonLoading = () => {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} md={12} sm={12} className={classes.noPadding}>
        <ClipLoader color={whiteColor} size={15} speedMultiplier={0.5} />
      </GridItem>
    </GridContainer>
  );
};

export default ButtonLoading;
