import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js";

const useStyles = makeStyles(styles);

const RegularButton = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    action,
    justIcon,
    className,
    tooltipClassName,
    muiClasses,
    tooltipText,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });

  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <>
      {action
        ? showTooltip && (
            <div
              className={`invalid-feedback-button-left d-block ${
                tooltipClassName && tooltipClassName
              }`}
            >
              {tooltipText}
            </div>
          )
        : null}
      <Button
        {...rest}
        ref={ref}
        classes={muiClasses}
        className={btnClasses}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </Button>
    </>
  );
});

RegularButton.displayName = Button;

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "twitter",
    "facebook",
    "google",
    "linkedin",
    "pinterest",
    "youtube",
    "tumblr",
    "github",
    "behance",
    "dribbble",
    "reddit",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  muiClasses: PropTypes.object,
  children: PropTypes.node,
  action: PropTypes.bool,
  tooltipClassName: PropTypes.string,
  tooltipText: PropTypes.string,
};
RegularButton.displayName = "RegularButton";

export default RegularButton;
