import { FormControl, Icon, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import styles from "assets/jss/material-dashboard-pro-react/components/formStyle (temp)";
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

const CustomInput = ({
  required,
  isError,
  label,
  errorText,
  labelWidth,
  value,
  leftIcon,
  rightIcon,
  inputType,
  onChange,
  multiline,
  disabled,
  rows,
  customClassName,
  customInput,
}) => {
  const classes = useStyles();
  const defaultLabelWidth = 170;

  const [cursorPosition, setCursorPosition] = React.useState(0);
  const [showText, setShowText] = React.useState("password");

  const handleShowText = () => {
    if (showText === "text") {
      setShowText("password");
    } else if (showText === "password") {
      setShowText("text");
    }
  };
  return (
    <FormControl
      variant="outlined"
      className={classes.formControl + " " + customClassName}
    >
      {errorText && (
        <div
          className="invalid-feedback"
          style={{ left: `${cursorPosition}%` }}
        >
          {errorText}
        </div>
      )}
      <TextField
        type={inputType === "password" ? showText : inputType}
        variant="outlined"
        fullWidth
        disabled={disabled}
        multiline={multiline}
        rows={rows ? rows : 5}
        error={isError}
        value={value}
        size="small"
        onChange={(event) => {
          setCursorPosition(event.currentTarget.selectionStart);
          onChange(event);
        }}
        InputLabelProps={{
          FormLabelClasses: {
            asterisk: classes.required,
          },
        }}
        InputProps={{
          endAdornment:
            inputType === "password" && value && showText === "text" ? (
              <Icon
                className={classes.icon + " " + classes.clickAble}
                onClick={() => handleShowText()}
              >
                visibility
              </Icon>
            ) : inputType === "password" && value && showText === "password" ? (
              <Icon
                className={classes.icon + " " + classes.clickAble}
                onClick={() => handleShowText()}
              >
                visibility_off
              </Icon>
            ) : (
              rightIcon
            ),
          startAdornment: leftIcon,
        }}
        classes={{ root: classes.input + " " + customInput }}
        className={
          disabled
            ? classes.disabled + " " + customInput
            : classes.input + " " + customInput
        }
        autoComplete="Off"
        // helperText={helperText}
        label={label}
        required={required}
        labelWidth={labelWidth ? labelWidth : defaultLabelWidth}
      />
    </FormControl>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  required: PropTypes.bool,
  isError: PropTypes.bool,
  label: PropTypes.string,
  errorText: PropTypes.string,
  labelWidth: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  leftIcon: PropTypes.func,
  rightIcon: PropTypes.func,
  inputType: PropTypes.string,
  customClassName: PropTypes.string,
  customInput: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
};
