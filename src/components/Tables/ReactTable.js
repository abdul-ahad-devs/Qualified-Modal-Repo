/*eslint-disable*/
import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";
import Loading from "components/Loading/Loading";
import GridContainer from "components/Grid/GridContainer";
import DatatablePagination from "./DatatablePagination";
import CustomSwitchLabel from "components/Checkboxes/CustomSwitchLabel";

const newStyles = {
  ...styles,
  formControlMargins: {
    margin: "3px 0 !important"
  },
  gridContainer: {
    justifyContent: "center"
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  }
};

const useStyles = makeStyles(newStyles);

// Our table component
const ReactTable = (props) => {
  const {
    columns,
    data,
    loading,
    currentPage,
    defaultPageSize,
    setCurrentPage,
    totalPages
  } = props;

  const classes = useStyles();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page = data,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: defaultPageSize, pageIndex: 0 }
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="ReactTable -striped ">
        <table {...getTableProps()} className="rt-table">
          <thead
            className="rt-thead -header"
            style={{ backgroundColor: "#F0F3F6" }}
          >
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                {headerGroup.headers.map((column, key) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={classnames("rt-th rt-resizable-header", {
                      "-cursor-pointer": headerGroup.headers.length - 1 !== key,
                      "-sort-asc": column.isSorted && !column.isSortedDesc,
                      "-sort-desc": column.isSorted && column.isSortedDesc
                    })}
                  >
                    <div
                      className={
                        `rt-resizable-header-content` + " " + classes.center
                      }
                    >
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="rt-tbody">
            {loading ? (
              <Loading loading={loading} height="fixed" />
            ) : (
              page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className={classnames("rt-tr")}>
                    {row.cells.map((cell, key) => {
                      let columnValue = cell.value;
                      let colTextLength = columns[key].textLength
                        ? columns[key].textLength
                        : 45;
                      if (columnValue && columnValue.length > colTextLength) {
                        columnValue =
                          columnValue.substring(0, colTextLength) + "...";
                      }
                      // classes[columns[key].alignment is specifying css alignment for each column
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={
                            "rt-td" + " " + classes[columns[key].alignment]
                          }
                        >
                          {columnValue}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
            {/* IN CASE NO RECORD IS FOUND ON THAT PAGE */}
            {!loading && page && page.length === 0 ? (
              <td className="rt-td" colSpan="4">
                <h4>No Records to show here.</h4>
              </td>
            ) : null}
          </tbody>
        </table>
        <div className="-pagination">
          <GridContainer className={classes.gridContainer}>
            <DatatablePagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </GridContainer>
        </div>
      </div>
    </>
  );
};

export default ReactTable;
