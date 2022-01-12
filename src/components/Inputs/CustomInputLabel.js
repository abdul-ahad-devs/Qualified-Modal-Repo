import { InputLabel, makeStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import styles from "assets/jss/material-dashboard-pro-react/components/formStyle (temp)";

const useStyles = makeStyles(styles);

const CustomInputLabel = (props) => {
  const { label, customClassName, bold } = props;
  const classes = useStyles();
  return (
    <InputLabel
      {...props}
      classes={{
        root: bold
          ? classes.bold +
            " " +
            classes.customFormInputLabel +
            " " +
            customClassName
          : classes.customFormInputLabel + " " + customClassName,
      }}
    >
      {label}
    </InputLabel>
  );
};

export default CustomInputLabel;

CustomInputLabel.propTypes = {
  label: PropTypes.string,
  customClassName: PropTypes.string,
  bold: PropTypes.bool,
};
