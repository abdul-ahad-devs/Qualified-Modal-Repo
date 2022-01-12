import React, { useEffect } from "react";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button.js";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import styles from "assets/jss/material-dashboard-pro-react/components/paginationStyle";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(styles);

const DatatablePagination = (props) => {
  const classes = useStyle();
  const { currentPage, totalPages, setCurrentPage } = props;

  const [selectedPage, setSelectedPage] = React.useState(null);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  return (
    <GridContainer className={classes.justified}>
      <div className={classes.pagination}>
        <Button
          color="primary"
          justIcon
          round
          size="sm"
          aria-label="FullScreen"
          className={classes.paginationButton}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <ArrowBackIosOutlinedIcon />
        </Button>

        {currentPage - 1 > 0 && currentPage - 1 <= totalPages ? (
          <Button
            color={
              selectedPage === currentPage - 1
                ? "secondaryOutlined"
                : "secondary"
            }
            justIcon
            round
            size="sm"
            aria-label="FullScreen"
            onClick={() => setCurrentPage(currentPage - 1)}
            className={classes.paginationButton}
          >
            {currentPage - 1}
          </Button>
        ) : null}

        {currentPage > 0 && currentPage <= totalPages ? (
          <Button
            color={
              selectedPage === currentPage ? "secondaryOutlined" : "secondary"
            }
            justIcon
            round
            size="sm"
            aria-label="FullScreen"
            onClick={() => setCurrentPage(currentPage)}
            className={classes.paginationButton}
          >
            {currentPage}
          </Button>
        ) : null}

        {currentPage + 1 <= totalPages ? (
          <Button
            color={
              selectedPage === currentPage + 1
                ? "secondaryOutlined"
                : "secondary"
            }
            justIcon
            round
            size="sm"
            aria-label="FullScreen"
            onClick={() => setCurrentPage(currentPage + 1)}
            className={classes.paginationButton}
          >
            {currentPage + 1}
          </Button>
        ) : null}

        <Button
          color="primary"
          justIcon
          round
          size="sm"
          aria-label="FullScreen"
          disabled={currentPage === totalPages || totalPages === 0}
          className={classes.paginationButton}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </div>
    </GridContainer>
  );
};

export default DatatablePagination;

DatatablePagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
