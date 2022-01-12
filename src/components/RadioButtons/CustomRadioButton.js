import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {
  primaryColor,
  blackColor,
} from "assets/jss/material-dashboard-pro-react";
import PropTypes from "prop-types";

const styles = {
  controlLabelRoot: {
    color: `${blackColor} !important`,
  },
  radioRoot: {
    color: `${primaryColor[0]} !important`,
  },
  radioChecked: {
    color: `${primaryColor[0]} !important`,
  },
  radioDisabled: {},
};

const useStyles = makeStyles(styles);

const CustomRadioButton = ({
  value,
  onChange,
  label,
  labelPlacement,
  checked,
  size,
  disabled,
  customControlClassname,
  customRadioClassname,
}) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      classes={{
        root: classes.controlLabelRoot + " " + customControlClassname,
      }}
      labelPlacement={labelPlacement ? labelPlacement : "end"}
      value={value && value}
      onChange={onChange}
      checked={checked}
      control={
        <Radio
          disabled={disabled}
          size={size ? size : "medium"}
          classes={{
            root: classes.radioRoot + " " + customRadioClassname,
            checked: classes.radioChecked,
            disabled: classes.radioDisabled,
          }}
        />
      }
      label={label}
    />
  );
};

export default CustomRadioButton;

CustomRadioButton.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  size: PropTypes.string,
  labelPlacement: PropTypes.string,
  customControlClassname: PropTypes.string,
  customRadioClassname: PropTypes.string,
  disabled: PropTypes.bool,
};
