import {Grid, Paper} from "@material-ui/core";
import BaseGridItem from "components/share/Base/BaseGridItem";
import BaseTextField from "components/share/Base/BaseTextField";
import StickyHeadTable from "components/share/Table";
import * as React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
import {DatePicker} from "@material-ui/pickers";

const PaperStyled = styled(Paper)`
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
`;

function createData(stt, chungTu, ky, dienGiai, luongThuc){
  return {stt, chungTu, ky, dienGiai, luongThuc};
}
const rows = [
  createData(
    "01",
    "202103-008",
    "03-2021",
    "Bảng phụ cấp T03.2021, Bảng lương T03.2021",
    "10.000.000"
  ),
  createData(
    "02",
    "202104-009",
    "04-2021",
    "Bảng phụ cấp T04.2021, Bảng lương T03.2021",
    "20.000.000"
  ),
  createData(
    "03",
    "202105-010",
    "05-2021",
    "Bảng phụ cấp T05.2021, Bảng lương T03.2021",
    "30.000.000"
  )
];
const currencies = [
  {
    value: "1",
    label: "Tháng 1"
  },
  {
    value: "2",
    label: "Tháng 2"
  },
  {
    value: "3",
    label: "Tháng 3 "
  },
  {
    value: "4",
    label: "Tháng 4"
  },
  {
    value: "5",
    label: "Tháng 5"
  },
  {
    value: "6",
    label: "Tháng 6"
  },
  {
    value: "7",
    label: "Tháng 7"
  },
  {
    value: "8",
    label: "Tháng 8"
  },
  {
    value: "9",
    label: "Tháng 9"
  },
  {
    value: "10",
    label: "Tháng 10"
  },
  {
    value: "11",
    label: "Tháng 11"
  },
  {
    value: "12",
    label: "Tháng 12"
  }
];

const columns = [
  {id: "stt", label: "STT", minWidth: 10, align: "left"},
  {id: "chungTu", label: "Số chứng từ", minWidth: 100, align: "left"},
  {
    id: "ky",
    label: "Kỳ",
    minWidth: 100,
    align: "left"
  },
  {
    id: "dienGiai",
    label: "Diễn giải",
    minWidth: 100,
    align: "left"
  },
  {
    id: "luongThuc",
    label: "Lương thực nhận",
    minWidth: 100,
    align: "left"
  },
  {
    id: "",
    label: "",
    minWidth: 100,
    align: "left"
  }
];

const NhanVien = () => {
  const classes = useStyles();

  const [ viewDetail, setViewDetail ] = React.useState(true);
  const [ choseviewDetail, setChoseViewDetail ] = React.useState();
  const [ openviewDetail, setOpenViewDetail ] = React.useState(false);
  const [ dataviewDetail, setDataViewDetail ] = React.useState();
  const [ expanded, setExpanded ] = React.useState(false);
  const [ currency, setCurrency ] = React.useState("");
  const [ selectedDate, handleDateChange ] = React.useState(new Date());
  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleViewDetail = row => {
    if (openviewDetail === false) {
      setOpenViewDetail(true);
      setChoseViewDetail(row.stt);
      setDataViewDetail(row);
    }
    if (openviewDetail === true && row.stt !== choseviewDetail) {
      setOpenViewDetail(true);
      setChoseViewDetail(row.stt);
      setDataViewDetail(row);
    }
    if (openviewDetail === true && row.stt === choseviewDetail) {
      setOpenViewDetail(false);
    }
  };
  return (
    <React.Fragment>
      <PaperStyled style={{margin: "20px"}}>
        <Grid container>
          <BaseGridItem item xs={10}>
            <h3 className="title">Thông tin lương thưởng</h3>
          </BaseGridItem>
          <BaseGridItem
            item
            xs={2}
            style={{
              borderBottom: "1px solid #eeeeee",
              borderBottom: "1px solid rgb(238, 238, 238)",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              paddingRight: "20px"
            }}
          >
            <div className="date">
              <DatePicker
                variant="inline"
                openTo="year"
                views={[ "year", "month" ]}
                label="Chọn tháng năm"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          </BaseGridItem>

          <BaseGridItem item xs={12}>
            <StickyHeadTable
              rows={rows}
              columns={columns}
              viewDetail={viewDetail}
              handleViewDetail={handleViewDetail}
            />
          </BaseGridItem>

          {openviewDetail && (
            <Grid item xs={12}>
              <h3 style={{marginLeft: 10}}>
                Thông tin lương và thưởng tháng 04
              </h3>
              <BaseGridItem item>
                <Card className={classes.rootCard}>
                  <CardHeader
                    style={{backgroundColor: "#eeeef3", height: "40px"}}
                    action={
                      <IconButton
                        aria-label="settings"
                        style={{height: "25px"}}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={<h4 style={{color: "#1854a5"}}>Thông tin chung </h4>}
                    // subheader="September 14, 2016"
                  />

                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Grid container>
                        <Grid item xs={3}>
                          <BaseGridItem item>
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
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
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
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
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
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="cmnd"
                              label="Phòng ban"
                              value="Phát triển ứng dụng"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>

                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="luongCb"
                              label="Lương cơ bản"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="luongKd"
                              label="Lương kinh doanh"
                              value="10.000.000"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="luongVtCv"
                              label="Lương vị trí công việc"
                              value="10.000.000"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="luongTn"
                              label="Lương thực nhận"
                              value="9.800.000"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                      </Grid>
                    </Typography>
                  </CardContent>

                  <CardHeader
                    style={{backgroundColor: "#eeeef3", height: "40px"}}
                    title={
                      <h4 style={{color: "#1854a5"}}>
                        1. Thời gian làm việc và ngừng vắng{" "}
                      </h4>
                    }
                    // subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Grid container>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="ngayCong"
                              label="Ngày công làm việc"
                              value="22"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="ngayNghiCd"
                              label="Ngày nghỉ chế độ"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="nghiLe"
                              label="Ngày nghỉ lễ tết"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={12}>
                          <h5 style={{margin: "5px", marginTop: "10px"}}>
                            LÀM THÊM GIỜ
                          </h5>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="ngayCN"
                              label="Ngày chủ nhật"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>

                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="ngayThuong"
                              label="Ngày thường"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="ngayLe"
                              label="Ngày lễ/tết"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="luongLt"
                              label="Lương làm thêm"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3} />
                      </Grid>
                    </Typography>
                  </CardContent>

                  <CardHeader
                    style={{backgroundColor: "#eeeef3", height: "40px"}}
                    action={
                      <h4 style={{color: "#1854a5"}}>
                        {dataviewDetail.luongThuc}
                      </h4>
                    }
                    title={
                      <h4 style={{color: "#1854a5"}}>2. Tổng thu nhập </h4>
                    }
                    // subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <h5 style={{margin: "5px", marginTop: "10px"}}>
                            THÔNG TIN CHUNG
                          </h5>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="luongNc"
                              label="Lương ngày công"
                              value="10.000.000"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="luongPc"
                              label="Lương phụ cấp"
                              value="650.000"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>

                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="thuNK"
                              label="Thu nhập khác"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item />
                        </Grid>
                        <Grid item xs={12}>
                          <h5 style={{margin: "5px", marginTop: "10px"}}>
                            CHI TIẾT PHỤ CẤP
                          </h5>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="anCa"
                              label="Tiền ăn ca"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="guiXe"
                              label="Tiền gửi xe"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="docHai"
                              label="Tiền độc hại"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="ruiRo"
                              label="Tiền rủi ro"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="VCH"
                              label="Tiền VCH đặc biệt"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="dienThoai"
                              label="Tiền điện thoại"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="congTacPhi"
                              label="Công tác phí"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="trachNgiem"
                              label="Tiền trách nghiệm"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={12}>
                          <h4 style={{margin: "5px", marginTop: "10px"}}>
                            CHI TIẾT THU NHẬP KHÁC
                          </h4>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="truyLinh"
                              label="Lương truy lĩnh"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="htCV"
                              label="Lương hoàn thành công việc"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="chiPL"
                              label="Thu nhập chi từ phúc lợi"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="thuNk"
                              label="Thu nhập khác"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                      </Grid>
                    </Typography>
                  </CardContent>
                  <CardHeader
                    style={{backgroundColor: "#eeeef3", height: "40px"}}
                    title={
                      <h4 style={{color: "#1854a5"}}>3. Các khoản khấu trừ </h4>
                    }
                    // subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Grid container>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="BHXH"
                              label="BHXH"
                              value="650.000"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="BHYT"
                              label="BHYT"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="BHTN"
                              label="Bảo hiểm thất nghiệp"
                              value="100.000"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="cDphi"
                              label="Công đoàn phí"
                              value="100"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>

                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="thuTN"
                              label="Thuế thu nhập"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="truyThu"
                              label="Truy thu"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="truKhac"
                              label="Trừ khác"
                              value="0"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                        <Grid item xs={3}>
                          <BaseGridItem item>
                            <BaseTextField
                              name="ngPhuThuoc"
                              label="Số người phụ thuộc"
                              value="2"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                      </Grid>
                    </Typography>
                  </CardContent>
                </Card>
              </BaseGridItem>
            </Grid>
          )}

          <BaseGridItem item xs={12}>
            <p className="pr-title">
              Mọi thông tin thắc mắc về lương & phép vui lòng gửi về email:
              <a href="mailto:totienluong@vietbank.com.vn">
                {" "}
                totienluong@vietbank.com.vn
              </a>
            </p>
          </BaseGridItem>
        </Grid>
      </PaperStyled>
    </React.Fragment>
  );
};
export default NhanVien;
