import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

import styles from "assets/jss/material-dashboard-pro-react/components/checkboxesStyle";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(styles);

const CustomCheckbox = (props) => {
  const classes = useStyle();
  const { checked, onChange, customClassName, disabled } = props;
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      classes={{
        root: customClassName && customClassName,
        checked: classes.checkbox,
      }}
    />
  );
};

export default CustomCheckbox;

CustomCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  customClassName: PropTypes.string,
  disabled: PropTypes.bool,
};
