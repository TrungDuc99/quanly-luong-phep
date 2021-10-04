import {Grid, Paper} from "@material-ui/core";
import BaseGridItem from "components/share/Base/BaseGridItem";
import BaseTextField from "components/share/Base/BaseTextField";
import StickyHeadTable from "components/share/Table";
import * as React from "react";
import styled from "styled-components";

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
  createData("02 ", "Dương Minh Khang", "2020", "Con ruột", "01/01/2021", "")
];
const columns = [
  {id: "stt", label: "STT", minWidth: 10, align: "left"},
  {id: "hoTen", label: "Họ và tên", minWidth: 100, align: "left"},
  {
    id: "namSinh",
    label: "Năm sinh",
    minWidth: 100,
    align: "left"
  },
  {
    id: "quanHe",
    label: "Quan hệ",
    minWidth: 100,
    align: "left"
  },
  {
    id: "tuNgay",
    label: "Từ ngày",
    minWidth: 100,
    align: "left"
  },
  {
    id: "denNgay",
    label: "Đên ngày",
    minWidth: 100,
    align: "left"
  }
];
const TrangChu = () => {
  return (
    <React.Fragment>
      <PaperStyled style={{margin: "20px"}}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="title">Thông tin cá nhân</h3>
          </Grid>
          <Grid container style={{padding: 10}}>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="maNV"
                label="Mã nhân viên"
                value="2021-00001"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="hoTen"
                label="Họ và tên"
                value="Đỗ Trung Đức"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="chucVu"
                label="Chức danh"
                value="Nhân viên phát triển ứng dụng"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="cmnd"
                label="Số CMND"
                value="385750351"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="ngayCap"
                label="Ngày cấp"
                value="20/04/2014"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="noiCap"
                label="Nơi cấp"
                value="Tp.Hồ Chinh Minhg"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="soBHXH"
                label="Số xổ BHXH"
                value="791345981"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
            <BaseGridItem item xs={4}>
              <BaseTextField
                name="soThue"
                label="Mã số thuế TNCN"
                value="98657215"
                // value={doc.tenKhv}
                // onChange={handleChangeValue}
                multiline
                fullWidth
              />
            </BaseGridItem>
          </Grid>
        </Grid>
      </PaperStyled>
      <PaperStyled style={{margin: "20px", marginTop: 0}}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="title">Thông tin người giảm trừ gia cảnh</h3>
          </Grid>

          <Grid container style={{padding: 20}}>
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
        </Grid>
      </PaperStyled>
    </React.Fragment>
  );
};
export default TrangChu;
