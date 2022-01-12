/* eslint-disable react/prop-types */
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React from "react";
import Button from "components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

import styles from "assets/jss/material-dashboard-pro-react/components/reactTableStyle.js";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

const useStyle = makeStyles(styles);

const TableHeader = (props) => {
  const classes = useStyle();
  const {
    title,
    showBackButton,
    btnText,
    subTitle,
    onClick,
    onClick2,
    goBackRoute,
    btnText2,
    btn1Disabled,
  } = props;

  const history = useHistory();

  return (
    <GridContainer>
      <GridItem xs={12} className={classes.phZero}>
        <h3 className={classes.tableHeader} mb={0}>
          {showBackButton ? (
            <Button
              color="white"
              aria-label="Back"
              round
              size="sm"
              className={classes.backButton}
              onClick={() => history.push(goBackRoute)}
              justIcon
            >
              <ArrowBackOutlinedIcon className={classes.buttonLink} />
            </Button>
          ) : null}
          {title}

          <Box className={classes.floatRight}>
            {btnText ? (
              <Button
                color="primary"
                round
                size="lg"
                // className={classes.floatRight}
                muiClasses={{
                  label: "",
                }}
                disabled={btn1Disabled}
                onClick={onClick}
              >
                {btnText}
              </Button>
            ) : null}

            {btnText2 ? (
              <Box display="inline" ml={2}>
                <Button
                  color="primary"
                  round
                  size="lg"
                  // className={classes.floatRight}
                  muiClasses={{
                    label: "",
                  }}
                  onClick={onClick2}
                >
                  {btnText2}
                </Button>
              </Box>
            ) : null}
          </Box>
        </h3>
      </GridItem>
      {/* Edited New Subtitle Line */}
      {subTitle ? (
        <GridItem xs={12}>
          <Box ml={3.3}>
            <h5 className={classes.subTitle}>{subTitle}</h5>
          </Box>
        </GridItem>
      ) : null}
    </GridContainer>
  );
};

export default TableHeader;
