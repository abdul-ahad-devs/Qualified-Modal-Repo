import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

import styles from "assets/jss/material-dashboard-pro-react/components/checkboxesStyle";
import { FormControl, FormLabel, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(styles);

const CustomCheckboxLabel = (props) => {
  const classes = useStyle();
  const { checked, onChange, label, disabled, customClassname, value } = props;
  return (
    <FormControl className={classes.formControl + " " + customClassname}>
      <Checkbox
        classes={{
          root: classes.checkbox,
          checked: classes.checkbox,
        }}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
      <FormLabel htmlFor="bootstrap-input" className={classes.label}>
        {label}
      </FormLabel>
    </FormControl>
  );
};

export default CustomCheckboxLabel;

CustomCheckboxLabel.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  customClassname: PropTypes.string,
  value: PropTypes.string,
};
