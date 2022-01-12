/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import ActivateLogo from "assets/img/activateImages/activate-logo.png";
import styles from "assets/jss/material-dashboard-pro-react/views/Auth/authStyle.js";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Icon, Typography } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";;
import ButtonLoading from "components/Loading/ButtonLoading";
import CustomInput from "components/Inputs/CustomInput";
import infoCircle from "assets/img/svgs/info-circle.svg";

// @material-ui/icons
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(styles);
// eslint-disable-next-line react/prop-types
const LoginPage = () => {
  const classes = useStyles();
  // states
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <GridContainer noDefaultSetting className={classes.container}>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          noDefaultPadding
          className={classes.item1}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className={classes.login_form}
          >
            {/* image */}
            <Box mb={8} mt={8}>
              <img src={ActivateLogo} alt="activate_logo" height="140" />
            </Box>
            {/* Custom input form */}
            <Box className={classes.width_80}>
              <Box>
                <GridContainer alignItems="flex-end">
                  <GridItem xs={12} md={12} sm={12}>
                    {/* Email Address */}
                    <CustomInput
                      inputType="email"
                      required
                      label="Email Address"
                      leftIcon={<Icon>email</Icon>}
                    />
                  </GridItem>
                </GridContainer>
              </Box>
              <Box>
                <GridContainer alignItems="flex-end">
                  <GridItem xs={12} md={12} sm={12}>
                    <CustomInput
                      inputType="password"
                      required
                      label="Password"
                      leftIcon={<Icon>lock</Icon>}
                    />
                  </GridItem>
                </GridContainer>
              </Box>
            </Box>
            {/* litte content */}
            {/* Commented Forget Password Story */}
            <Box mt={1} mb={1}>
              <Box display="flex">
                <Typography variant="caption" display="block" gutterBottom>
                  <span
                    className={classNames(
                      classes.theme_color,
                      classes.cursor_pointer
                    )}
                    onClick={() => history.push("/auth/forget-password")}
                  >
                    {" "}
                    <span
                      style={{
                        marginRight: "5px",
                      }}
                    >
                      <img src={infoCircle} alt="Box Logo" height="17" />
                    </span>
                    Forgot Password?
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box mt={1} mb={3}>
              <Box
                display="flex"
                // eslint-disable-next-line react/prop-types
              >
                <Typography variant="caption" display="block" gutterBottom>
                  Don&apos;t have an account ?{" "}
                  <span
                    onClick={() => history.push("/auth/signup")}
                    className={classNames(
                      classes.theme_color,
                      classes.cursor_pointer
                    )}
                  >
                    Sign Up
                  </span>
                </Typography>
              </Box>
            </Box>

            <Box p={1} mb={7} display="flex">
              <Button
                round
                disabled={loading}
                className={classes.theme_color_background}
                onClick={loginUserHandler}
              >
                <ExitToAppIcon />
                {loading ? <ButtonLoading /> : "Log In"}
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          noDefaultPadding
          className={classes.item2}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className={classes.login_content}
            pb={4}
          >
            {/* Content One */}
            <Box p={1}>
              <h1 className={classes.login_form_content1}>
                Welcome to{" "}
                <b>
                  <span className={classes.theme_color}>ACT</span>ivate Advance
                </b>
              </h1>
            </Box>
            {/* Content Two */}
            <Box>
              <h3 className={classes.login_form_content2}>
                Activating Advance Strategies in Real Time
              </h3>
            </Box>
          </Box>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default LoginPage;
