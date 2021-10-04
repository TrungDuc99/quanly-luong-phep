import {Grid, InputBase, Paper} from "@material-ui/core";
import StickyHeadTable from "components/share/Table";
import * as React from "react";
import styled from "styled-components";
import useStyles from "./styles";
import {Search} from "@material-ui/icons";
const PaperStyled = styled(Paper)`
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
`;

function createData(stt, hoTen, namSinh, quanHe, tuNgay, denNgay){
  return {stt, hoTen, namSinh, quanHe, tuNgay, denNgay};
}

const rows = [
  createData("01", "Nguyên Thị Bé", "1960", "Mẹ ruột", "01/01/2021", ""),
  createData("02", "Dương Minh Khang", "2020", "Con ruột", "01/01/2021", "")
];
const columns = [
  {id: "stt", label: "STT", minWidth: 10, align: "left"},
  {id: "hoTen", label: "Họ và tên", minWidth: 100, align: "left"},
  {
    id: "namSinh",
    label: "Năm sinh",
    minWidth: 100,
    align: "left"
    // format: value => value.toLocaleString('en-US'),
  },
  {
    id: "quanHe",
    label: "Quan hệ",
    minWidth: 100,
    align: "left"
    // format: value => value.toLocaleString('en-US'),
  },
  {
    id: "tuNgay",
    label: "Từ ngày",
    minWidth: 100,
    align: "left"
    // format: value => value.toFixed(2),
  },
  {
    id: "denNgay",
    label: "Đên ngày",
    minWidth: 100,
    align: "left"
    // format: value => value.toFixed(2),
  }
];

const NhanVien = () => {
  const classes = useStyles();

  const handleSearch = e => {
    // onSearchChange(e.target.value); <Grid container>
  };
  return (
    <React.Fragment>
      <PaperStyled style={{margin: "20px"}}>
        <Grid item xs={12} style={{position: "relative"}}>
          <h3 className="title">
            Danh sách nhân viên phòng phát triển ứng dụng
          </h3>
          <div style={{position: "absolute", right: 20, top: 12}}>
            <InputBase
              placeholder="Nhập thông tin cần tìm…"
              className="btnSearch"
              onChange={handleSearch}
              inputProps={{"aria-label": "search"}}
            />
            <div className="searchIcon">
              <Search />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} style={{padding: 20}}>
          <StickyHeadTable rows={rows} columns={columns} />
        </Grid>
        <Grid item xs={12}>
          <p className="pr-title">
            Mọi thông tin thắc mắc về lương & phép vui lòng gửi về email:
            <a href="mailto:totienluong@vietbank.com.vn">
              {" "}
              totienluong@vietbank.com.vn
            </a>
          </p>
        </Grid>
      </PaperStyled>
    </React.Fragment>
  );
};
export default NhanVien;
