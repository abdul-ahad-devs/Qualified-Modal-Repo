import React from "react";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { ClipLoader } from "react-spinners";

import styles from "assets/jss/material-dashboard-pro-react/components/loadingStyle";
import { makeStyles } from "@material-ui/core";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";

const useStyle = makeStyles(styles);

const Loading = ({ loading, height }) => {
  const classes = useStyle();

  const [classNames, setClassNames] = React.useState(classes.loading);

  React.useEffect(() => {
    if (height === "fixed") {
      setClassNames(classes.fixed);
    } else if (height === "none") {
      setClassNames(classes.none);
    } else {
      setClassNames(classes.loading);
    }
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12} className={classNames}>
        <ClipLoader
          color={primaryColor[0]}
          loading={loading}
          size={40}
          speedMultiplier={1}
        />
      </GridItem>
    </GridContainer>
  );
};

export default Loading;

Loading.propTypes = {
  size: PropTypes.string,
  loading: PropTypes.bool,
  height: PropTypes.string,
};
