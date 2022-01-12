import React from "react";
import { FormControl, makeStyles, TextField } from "@material-ui/core";
import styles from "assets/jss/material-dashboard-pro-react/components/formStyle (temp)";
import PropTypes from "prop-types";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const useStyles = makeStyles(styles);

const CustomDatePicker = ({
  customClassName,
  value,
  onChange,
  errorText,
  disabled,
  minDate,
  label,
  required,
}) => {
  const classes = useStyles();

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl + " " + customClassName}
    >
      {errorText && <div className="invalid-feedback">{errorText}</div>}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={value}
          onChange={onChange}
          inputFormat="yyyy-MM-dd"
          disabled={disabled}
          minDate={minDate}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              required={required}
              label={label}
              size="small"
              classes={{ root: classes.input }}
              className={disabled ? classes.disabled : classes.input}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default CustomDatePicker;

CustomDatePicker.propTypes = {
  customClassName: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  errorText: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  minDate: PropTypes.object,
};
