import React from "react";
import {lighten, makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {withStyles} from "@material-ui/styles";
import {useHistory} from "react-router-dom";
import {TablePagination} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: lighten(theme.palette.background.paper, 0.1)
  },
  container: {
    maxHeight: 440,
    border: "10px"
  },
  linkUnderLine: {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  tbContainer: {
    overflow: "auto",
    maxHeight: "calc(100vh - 191px)",
    fontSize: "14px"
  }
}));
const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fafafa"
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff"
    }
  }
}))(TableRow);

function descendingComparator(a, b, orderBy){
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
export default function StickyHeadTable({
  rows,
  columns,
  viewDetail,
  handleViewDetail,
  titleTable,
  handleDuyetPhep,
  handleDongY,
  handleKhongDuyet
}){
  const classes = useStyles();
  const [ page, setPage ] = React.useState(0);
  const [ rowsPerPage, setRowsPerPage ] = React.useState(10);
  const [ order, setOrder ] = React.useState("asc");
  const [ orderBy, setOrderBy ] = React.useState("calories");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const renderTableCellsBody = row =>
    columns &&
    columns.map((item, index) => {
      switch (item.id) {
        case "trangThai":
          return (
            <TableCell key={index} align="center">
              {row.trangThai ? (
                <p style={{color: "rgb(52, 199, 89)"}}>
                  {row.trangThai ? "Đồng ý" : "Từ chối"}
                </p>
              ) : (
                <p style={{color: "rgb(255, 193, 14)"}}>
                  {row.trangThai ? "Đồng ý" : "Từ chối"}
                </p>
              )}
            </TableCell>
          );
        default:
          return (
            <TableCell key={index} align={item.align}>
              {row[item.id]}
            </TableCell>
          );
      }
    });
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tbcontainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{height: "20px"}}>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
              {viewDetail && <TableCell />}
              {titleTable === "Danh sách cần duyệt" && <TableCell />}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <StyledTableRow hover tabIndex={-1} key={index}>
                    {renderTableCellsBody(row)}

                    {viewDetail && (
                      <TableCell key={index} className={classes.linkUnderLine}>
                        <p
                          onClick={() => {
                            handleViewDetail(row);
                            // history.push(`xem-chi-tiet-${ row.stt }`)
                          }}
                          style={{color: "rgb(0, 122, 255)"}}
                          className={classes.linkUnderLine}
                        >
                          Xem thêm
                        </p>
                      </TableCell>
                    )}

                    {titleTable === "Danh sách cần duyệt" && (
                      <TableCell key={index} style={{display: "flex"}}>
                        <p
                          onClick={() => {
                            handleDuyetPhep(row);
                          }}
                          style={{color: "rgb(0, 122, 255)", padding: "5px"}}
                          className={classes.linkUnderLine}
                        >
                          Xem
                        </p>
                        <p
                          onClick={() => {
                            handleDongY(row);
                          }}
                          style={{color: "rgb(0, 255, 15)", padding: "5px"}}
                          className={classes.linkUnderLine}
                        >
                          Duyệt
                        </p>
                        <p
                          onClick={() => {
                            handleKhongDuyet(row);
                          }}
                          style={{color: "rgb(255, 23, 0)", padding: "5px"}}
                          className={classes.linkUnderLine}
                        >
                          Không duyệt
                        </p>
                      </TableCell>
                    )}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        labelRowsPerPage="Số dòng của mỗi trang:"
        labelDisplayedRows={({from, to, count}) =>
          `${from}-${to} | Tổng: ${count}`}
        rowsPerPageOptions={[ 10, 25, 100 ]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
