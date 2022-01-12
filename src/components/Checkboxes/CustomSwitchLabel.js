import { FormControl, FormLabel, makeStyles, Switch } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import styles from "assets/jss/material-dashboard-pro-react/components/customSwitchLabel";

const useStyles = makeStyles(styles);
const CustomSwitchLabel = (props) => {
  const classes = useStyles();
  const {
    checked,
    onChange,
    label,
    noMarginPadding,
    insideForm,
    themeColorLabel,
  } = props;

  const [classNames, setClassNames] = React.useState("");

  React.useEffect(() => {
    if (noMarginPadding) {
      setClassNames(classes.noMarginPadding);
    } else if (insideForm) {
      setClassNames(classes.insideForm);
    } else {
      setClassNames(classes.formControl);
    }
  }, []);
  return (
    <FormControl className={classNames}>
      <Switch
        checked={checked}
        onChange={onChange}
        classes={{
          switchBase: classes.switchBase,
          checked: classes.switchChecked,
          thumb: classes.switchIcon,
          track: classes.switchBar,
          colorSecondary: classes.switchPrimary,
        }}
      />
      <FormLabel
        className={themeColorLabel ? classes.themeColor : classes.inputLabel}
      >
        {label}
      </FormLabel>
    </FormControl>
  );
};

export default CustomSwitchLabel;

CustomSwitchLabel.propTypes = {
  checked: PropTypes.bool,
  noMarginPadding: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  insideForm: PropTypes.bool,
  themeColorLabel: PropTypes.bool,
};
