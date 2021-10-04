import {Grid, Paper, TextField, MenuItem, Button} from "@material-ui/core";
import BaseGridItem from "components/share/Base/BaseGridItem";
import BaseTextField from "components/share/Base/BaseTextField";
import StickyHeadTable from "components/share/Table";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import {DatePicker} from "@material-ui/pickers";
import withReactContent from "sweetalert2-react-content";
import EnhancedTableToolbar from "components/share/Table/Toolbar";
import TaoNghiPhep from "components/ThongTinPhep/modal/TaoNghiPhep";
import useStyles from "./styles";
import sweetAlerts from "components/share/Alert/sweetAlerts";
import Swal from "sweetalert2";
import moment from "moment";
const PaperStyled = styled(Paper)`
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
`;
const dataCaNhan = {
  caNhan: [
    {
      stt: "01",
      id: "1",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: false
    },
    {
      stt: "02",
      id: "2",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: true
    },
    {
      stt: "03",
      id: "3",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: true
    },
    {
      stt: "04",
      id: "4",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: true
    },
    {
      stt: "05",
      id: "5",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: false
    },
    {
      stt: "06",
      id: "6",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: false
    },
    {
      stt: "07",
      id: "7",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: false
    },
    {
      stt: "08",
      id: "9",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: true
    },
    {
      stt: "10",
      id: "10",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: false
    },
    {
      stt: "11",
      id: "11",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: false
    },
    {
      stt: "12",
      id: "12",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: true
    },
    {
      stt: "13",
      id: "13",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: false
    },
    {
      stt: "14",
      id: "14",
      tuNgay: " 07/07/2021",
      denNgay: "08/08/2021",
      soNgayNghi: "01",
      loaiPhep: "Phep thuong nien",
      dinhKem: "Phép thường niên",
      lyDo: "Lý do 01",
      trangThai: true
    }
  ]
};
const dataLichSuDuyetPhep = {
  caNhan: [
    {
      stt: "01",
      id: "1",
      maNV: "2021-001",
      hoTen: "Vũ Vương Anh Phi",
      tuNgay: "08/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Phó giám đốc",
      donVi: "Phòng phát triển ứng dụng",

      loaiPhep: "Phép thường niên",
      trangThaiDuyet: "Không duyệt",
      tongNghi: "1"
    },
    {
      stt: "02",
      id: "2",
      maNV: "2021-001",
      hoTen: "Dương Tấn Long",
      tuNgay: "06/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Chuyên viên",
      donVi: "Phòng phát triển ứng dụng",
      tongNghi: "1",
      loaiPhep: "Nghỉ bù",
      trangThaiDuyet: "Đã duyệt"
    },
    {
      stt: "03",
      id: "3",
      maNV: "2021-001",
      hoTen: "Vũ Vương Anh Phi",
      tuNgay: "08/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Phó giám đốc",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Phép thường niên",
      trangThaiDuyet: "Đã duyệt",
      tongNghi: "1"
    },
    {
      stt: "04",
      id: "4",
      maNV: "2021-001",
      hoTen: "Dương Tấn Long",
      tuNgay: "06/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Chuyên viên",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Nghỉ bù",
      trangThaiDuyet: "Đã duyệt",
      tongNghi: "2"
    },
    {
      stt: "05",
      id: "5",
      maNV: "2021-001",
      hoTen: "Dương Tấn Long",
      tuNgay: "06/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Chuyên viên",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Nghỉ bù",
      trangThaiDuyet: "Không duyệt",
      tongNghi: "4"
    },
    {
      stt: "06",
      id: "6",
      maNV: "2021-001",
      hoTen: "Vũ Vương Anh Phi",
      tuNgay: "08/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Phó giám đốc",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Phép thường niên",
      trangThaiDuyet: "Không duyệt",
      tongNghi: "2"
    }
  ]
};
const dataDuyetPhep = {
  caNhan: [
    {
      stt: "01",
      id: "1",
      maNV: "2021-001",
      hoTen: "Vũ Vương Anh Phi",
      tuNgay: "08/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Phó giám đốc",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Phép thường niên",
      trangThai: false
    },
    {
      stt: "02",
      id: "2",
      maNV: "2021-001",
      hoTen: "Dương Tấn Long",
      tuNgay: "06/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Chuyên viên",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Nghỉ bù",
      trangThai: false
    },
    {
      stt: "03",
      id: "3",
      maNV: "2021-001",
      hoTen: "Vũ Vương Anh Phi",
      tuNgay: "08/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Phó giám đốc",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Phép thường niên",
      trangThai: false
    },
    {
      stt: "04",
      id: "4",
      maNV: "2021-001",
      hoTen: "Dương Tấn Long",
      tuNgay: "06/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Chuyên viên",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Nghỉ bù",
      trangThai: false
    },
    {
      stt: "05",
      id: "5",
      maNV: "2021-001",
      hoTen: "Dương Tấn Long",
      tuNgay: "06/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Chuyên viên",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Nghỉ bù",
      trangThai: false
    },
    {
      stt: "06",
      id: "6",
      maNV: "2021-001",
      hoTen: "Vũ Vương Anh Phi",
      tuNgay: "08/07/2021",
      denNgay: "09/07/2021",
      chucDanh: "Phó giám đốc",
      donVi: "Phòng phát triển ứng dụng",
      loaiPhep: "Phép thường niên",
      trangThai: false
    }
  ]
};
const columns = {
  caNhan: [
    {
      id: "stt",
      numeric: false,
      disablePadding: false,
      label: "STT",
      width: "50px",
      align: "center"
    },
    {
      id: "tuNgay",
      numeric: false,
      disablePadding: false,
      label: "Từ ngày",
      width: "150px",
      align: "center"
    },

    {
      id: "denNgay",
      numeric: false,
      disablePadding: false,
      label: "Đến ngày",
      width: "400px",
      align: "center"
    },
    {
      id: "soNgayNghi",
      numeric: false,
      disablePadding: false,
      label: "Số ngày nghỉ",
      width: "100px",
      align: "center"
    },
    {
      id: "loaiPhep",
      numeric: false,
      disablePadding: false,
      label: "Loại phép",
      width: "200px",
      align: "left"
    },
    {
      id: "dinhKem",
      numeric: false,
      disablePadding: false,
      label: "Tập tin đính kem",
      width: "200px",
      align: "left"
    },
    {
      id: "lyDo",
      numeric: false,
      disablePadding: false,
      label: "Lý do",
      width: "200px",
      align: "left"
    },
    {
      id: "trangThai",
      numeric: false,
      disablePadding: false,
      label: "Trạng thái",
      width: "150px",
      align: "center"
    }
  ],
  dsDuyetPhep: [
    {
      id: "stt",
      numeric: false,
      disablePadding: false,
      label: "STT",
      width: "70px",
      left: "237px"
    },
    {
      id: "maNV",
      numeric: false,
      disablePadding: false,
      label: "Số chứng từ",
      backgroundColor: "rgb(219, 234, 255)",
      width: "150px",
      left: "77px"
    },

    {
      id: "hoTen",
      numeric: false,
      disablePadding: false,
      label: "Họ tên",
      width: "150px",
      left: "237px"
    },

    {
      id: "tuNgay",
      numeric: false,
      disablePadding: false,
      label: "Từ ngày",
      width: "200px"
    },
    {
      id: "denNgay",
      numeric: false,
      disablePadding: false,
      label: "Đến ngày",
      width: "150px"
    },
    {
      id: "chucDanh",
      numeric: false,
      disablePadding: false,
      label: "Chức danh",
      width: "400px"
    },
    {
      id: "donVi",
      numeric: false,
      disablePadding: false,
      label: "Đơn vị",
      width: "400px"
    },
    {
      id: "loaiPhep",
      numeric: false,
      disablePadding: false,
      label: "Loại phép",
      width: "400px"
    }
  ],
  lichSuDuyetPhep: [
    {
      id: "stt",
      numeric: false,
      disablePadding: false,
      label: "STT",
      width: "70px",
      left: "237px"
    },
    {
      id: "maNV",
      numeric: false,
      disablePadding: false,
      label: "Số chứng từ",
      backgroundColor: "rgb(219, 234, 255)",
      width: "150px",
      left: "77px"
    },

    {
      id: "hoTen",
      numeric: false,
      disablePadding: false,
      label: "Họ tên",
      width: "150px",
      left: "237px"
    },

    {
      id: "tuNgay",
      numeric: false,
      disablePadding: false,
      label: "Từ ngày",
      width: "200px"
    },
    {
      id: "denNgay",
      numeric: false,
      disablePadding: false,
      label: "Đến ngày",
      width: "150px"
    },
    {
      id: "chucDanh",
      numeric: false,
      disablePadding: false,
      label: "Chức danh",
      width: "400px"
    },
    {
      id: "donVi",
      numeric: false,
      disablePadding: false,
      label: "Đơn vị",
      width: "400px"
    },
    {
      id: "tongNghi",
      numeric: false,
      disablePadding: false,
      label: "Tổng ngày nghỉ",
      width: "400px"
    },
    {
      id: "loaiPhep",
      numeric: false,
      disablePadding: false,
      label: "Loại phép",
      width: "400px"
    },
    {
      id: "trangThaiDuyet",
      numeric: false,
      disablePadding: false,
      label: "Trang thái",
      width: "400px"
    }
  ]
};
const tabs = [
  {
    id: "caNhan",
    color: "#007AFF",
    notifyId: "caNhan",
    label: "CÁ NHÂN",
    viewDetail: true
  },
  {
    id: "duyetPhep",
    color: "colorExpired",
    notifyId: "duyetPhep",
    label: "DUYỆT PHÉP",
    viewDetail: false
  },
  {
    id: "chinhSuaPhep",
    color: "colorRefuse",
    notifyId: "chinhSuaPhep",
    label: "CHỈNH SỬA PHÉP",
    viewDetail: true
  }
];
const notify = {
  tiepNhan: 2,
  boSung: 2,
  traVe: 3,
  ketQua: 3,
  theoDoi: 41
};
const NhanVien = () => {
  const classes = useStyles();
  const [ viewDetail, setViewDetail ] = useState(true);
  const [ data, setData ] = useState(dataCaNhan["caNhan"]);
  const [ column, setColumn ] = useState(columns["caNhan"]);
  const [ selectedDate, handleDateChange ] = useState(new Date());
  const [ expanded, setExpanded ] = useState(false);
  const [ tabDuyetPhep, setTabDuyetPhep ] = useState(false);
  const [ titleTable, setTitleTable ] = useState("Lịch sử nghỉ phép");
  const [ currency, setCurrency ] = useState("");
  const [ tab, setTab ] = useState("caNhan");
  const [ openTaoPhep, setOpenTaoPhep ] = useState(false);
  const [ renamebtn, setRenamebtn ] = useState("Lịch sử duyệt phép");
  const [ loaiPhep, setLoaiPhep ] = useState("");
  const LoaiPhep = [
    {
      value: "Phép thường niên",
      id: "01",
      label: "Phép thường niên"
    },
    {
      id: "02",
      value: "Phép không thường niên",
      label: "Phép không thường niên"
    }
  ];

  const [ date, setDate ] = useState(moment(new Date()).format("mm-dd-yyyy"));
  const handleChangeDate = e => {
    setDate({...date, [e.target.id]: e.target.value});
  };
  const MySwal = withReactContent(Swal);
  const handleDongY = row => {
    MySwal.fire({
      title: "Bạn muốn duyệt đơn này?",
      // text: "Bạn muốn duyệt hồ sơ này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Đồng ý, agree",
      cancelButtonText: "Không, cancel",
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        sweetAlerts("success", "Thành công", "Đơn đã được duyệt");
        // fetchData();
      }
    });
  };
  const handleKhongDuyet = row => {
    MySwal.fire({
      title: "Không duyệt đơn này?",
      // text: "Bạn muốn duyệt hồ sơ này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Đồng ý, agree",
      cancelButtonText: "Không, cancel",
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        sweetAlerts("warning", "Thành công", "Đơn đã không duyệt");
        // fetchData();
      }
    });
  };
  const handleChange = event => {
    setCurrency(event.target.value);
  };
  const handleChangeSelect = event => {
    setLoaiPhep(event.target.value);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const taoNghiePhep = () => {
    setOpenTaoPhep(true);
  };
  const handleDuyetPhep = row => {
    setTitleTable("Chi tiết phép cần duyệt");
  };
  const handleCloseTaoPhep = () => {
    setOpenTaoPhep(false);
  };
  const xemLichSuDuyetPhep = () => {
    if (renamebtn == "Lịch sử duyệt phép") {
      //-- Danh sách lịch sử duyệt phép trong tab Duyệt phép
      setRenamebtn("Danh sách cần duyệt");
      setData(dataLichSuDuyetPhep["caNhan"]);
      setColumn(columns["lichSuDuyetPhep"]);
      setViewDetail(true);
      setTitleTable("Danh sách lịch sử duyệt phép");
    }
    if (renamebtn == "Danh sách cần duyệt") {
      //-- Danh sách cần duyệt trong tab Duyệt phép
      setRenamebtn("Lịch sử duyệt phép");
      setData(dataDuyetPhep["caNhan"]);
      setColumn(columns["dsDuyetPhep"]);
      setViewDetail(false);
      setTitleTable("Danh sách cần duyệt");
    }
  };
  const handleTabChange = tab => {
    if (tab === "duyetPhep") {
      setData(dataDuyetPhep["caNhan"]);
      setColumn(columns["dsDuyetPhep"]);
      setTabDuyetPhep(true);
      setViewDetail(false);
      setTitleTable("Danh sách cần duyệt");
    }
    if (tab === "caNhan") {
      setData(dataCaNhan["caNhan"]);
      setColumn(columns["caNhan"]);
      setTabDuyetPhep(false);
      setViewDetail(true);
      setTitleTable("Lịch sử nghỉ phép");
    }
    if (tab === "chinhSuaPhep") {
      setTitleTable("Chỉnh sửa ngày nghỉ");
    }
    setTab(tab);
    setRenamebtn("Lịch sử duyệt phép");
  };
  const handleSearchChange = valueSearch => {};
  const handleViewDetail = row => {
    if (titleTable === "Danh sách lịch sử duyệt phép") {
      setTitleTable("Chi tiết phép đã duyệt");
    }
  };

  return (
    <React.Fragment>
      <PaperStyled style={{margin: "20px"}}>
        <Grid container>
          <Grid item xs={12}>
            <EnhancedTableToolbar
              tabs={tabs}
              onChangeTab={handleTabChange}
              tabCurrent={tab}
              notify={notify}
              tabDuyetPhep={tabDuyetPhep}
              titleTable={titleTable}
              onSearchChange={handleSearchChange}
              taoNghiePhep={taoNghiePhep}
              lichSuDuyetPhep={xemLichSuDuyetPhep}
              renamebtn={renamebtn}
            />
          </Grid>
          <Grid container>
            <Grid item xs={10} style={{padding: "0px"}}>
              <h3
                style={{
                  color: "#1854a5",
                  height: "60px",
                  lineHeight: "60px",
                  paddingLeft: "20px"
                }}
              >
                {titleTable}
              </h3>
            </Grid>
            {titleTable !== "Chỉnh sửa ngày nghỉ" &&
            titleTable !== "Chi tiết phép cần duyệt" &&
            titleTable !== "Chi tiết phép đã duyệt" && (
              <Grid
                item
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  paddingRight: 20
                }}
              >
                <div className="date">
                  <DatePicker
                    variant="inline"
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputformat="MM/yyyy"
                    views={[ "year", "month" ]}
                    label="Chọn tháng năm"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12}>
            <Divider style={{backgroundColor: "#eee"}} />
            <BaseGridItem
              item
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "15px",
                paddingBottom: "4px"
              }}
            >
              {titleTable === "Chi tiết phép cần duyệt" && (
                <Grid container>
                  <Grid item xs={12}>
                    <PaperStyled>
                      <Grid
                        container
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          paddingTop: "15px",
                          paddingBottom: "4px"
                        }}
                      >
                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem item xs={3}>
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

                        <BaseGridItem
                          item
                          xs={12}
                          style={{display: "flex", justifyContent: "end"}}
                        >
                          <Button
                            variant="contained"
                            onClick={() => setTitleTable("Danh sách cần duyệt")}
                            style={{marginRight: 10}}
                          >
                            Thoát
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#48FF2D",
                              color: "#fff",
                              marginRight: 10
                            }}
                            onClick={handleDongY}
                            color="primary"
                          >
                            Duyệt
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#FF2D55",
                              color: "#fff",
                              marginRight: 10
                            }}
                            onClick={handleKhongDuyet}
                          >
                            Không duyệt
                          </Button>
                          <Button variant="contained" color="primary">
                            Tìm kiếm
                          </Button>
                        </BaseGridItem>
                      </Grid>
                    </PaperStyled>
                  </Grid>
                </Grid>
              )}
              {titleTable === "Chi tiết phép đã duyệt" && (
                <Grid container>
                  <Grid item xs={12}>
                    <PaperStyled>
                      <Grid
                        container
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          paddingTop: "15px",
                          paddingBottom: "15px"
                        }}
                      >
                        <BaseGridItem item xs={3}>
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
                              name="phong"
                              label="Phòng"
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
                              name="nghiPhep"
                              label="Nghỉ phép"
                              value="Từ 07:30 ngày 07/07/2021 đến ngày 08/07/2021"
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
                              name="tongNgi"
                              label="Tổng ngày nghỉ"
                              value="1.5 ngày"
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
                              name="loaiPhep"
                              label="Loại phép"
                              value="Phép thường niên"
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
                              name="lyDo"
                              label="Lý do"
                              value="Bận việc gia đình"
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
                              name="email"
                              label="Email"
                              value="dotrungduc@vietbank.com.vn"
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
                              name="ngayTao"
                              label="Ngày tạo"
                              value="06/07/2021"
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
                              name="nhanSuTT"
                              label="Nhân sự thay thế"
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
                              name="ghiChu"
                              label="Ghi chú"
                              value="Hỗ trợ người dùng"
                              // value={doc.tenKhv}
                              // onChange={handleChangeValue}
                              multiline
                              fullWidth
                            />
                          </BaseGridItem>
                        </Grid>
                      </Grid>
                    </PaperStyled>
                  </Grid>
                </Grid>
              )}
              {titleTable === "Chỉnh sửa ngày nghỉ" && (
                <Grid container>
                  <PaperStyled style={{marginBottom: 20, width: "100%"}}>
                    <Grid container style={{padding: 10}}>
                      <Grid item xs={3}>
                        <BaseGridItem>
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
                        <BaseGridItem>
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
                        <BaseGridItem>
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
                        <BaseGridItem>
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
                      </Grid>
                      <Grid item xs={12}>
                        <BaseGridItem
                          style={{justifyContent: "flex-end", display: "flex"}}
                        >
                          <Button variant="contained" style={{marginRight: 10}}>
                            Thoát
                          </Button>
                          <Button variant="contained" color="primary">
                            Tìm
                          </Button>
                        </BaseGridItem>
                      </Grid>
                    </Grid>
                  </PaperStyled>

                  <PaperStyled style={{width: "100%"}}>
                    <Grid container style={{padding: 10}}>
                      <Grid item xs={4}>
                        <BaseGridItem>
                          <BaseTextField
                            name="loaiPhep"
                            select
                            label="Loại phép"
                            value="Phép thường niên"
                            value={loaiPhep}
                            onChange={handleChangeSelect}
                            fullWidth
                          >
                            <MenuItem value="">Chọn loại phép</MenuItem>
                            {LoaiPhep.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </BaseTextField>
                        </BaseGridItem>
                      </Grid>
                      <Grid item xs={4}>
                        <BaseGridItem>
                          <TextField
                            fullWidth
                            id="tuGioNgay"
                            label="Từ giờ ngày"
                            type="datetime-local"
                            InputLabelProps={{shrink: true}}
                            value={date.tuGioNgay}
                            onChange={handleChangeDate}
                            fullWidth
                            required
                            className={classes.textField}
                          />
                        </BaseGridItem>
                      </Grid>
                      <Grid item xs={4}>
                        <BaseGridItem>
                          <TextField
                            fullWidth
                            id="denGioNgay"
                            label="Đến giờ ngày"
                            type="datetime-local"
                            InputLabelProps={{shrink: true}}
                            value={date.denGioNgay}
                            onChange={handleChangeDate}
                            fullWidth
                            required
                            className={classes.textField}
                          />
                        </BaseGridItem>
                      </Grid>
                      <Grid item xs={12}>
                        <BaseGridItem
                          style={{justifyContent: "flex-end", display: "flex"}}
                        >
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#FF2D55",
                              color: "#fff",
                              marginRight: 10
                            }}
                          >
                            Xóa
                          </Button>
                          <Button variant="contained" color="primary">
                            Cập nhật
                          </Button>
                        </BaseGridItem>
                      </Grid>
                    </Grid>
                  </PaperStyled>
                </Grid>
              )}

              {titleTable === "Lịch sử nghỉ phép" && (
                <StickyHeadTable
                  rows={data}
                  columns={column}
                  viewDetail={viewDetail}
                  titleTable={titleTable}
                  handleViewDetail={handleViewDetail}
                />
              )}
              {titleTable === "Danh sách cần duyệt" && (
                <StickyHeadTable
                  rows={data}
                  columns={column}
                  viewDetail={viewDetail}
                  titleTable={titleTable}
                  handleDuyetPhep={handleDuyetPhep}
                  handleViewDetail={handleViewDetail}
                  handleKhongDuyet={handleKhongDuyet}
                  handleDongY={handleDongY}
                />
              )}
              {titleTable === "Danh sách lịch sử duyệt phép" && (
                <StickyHeadTable
                  rows={data}
                  columns={column}
                  viewDetail={viewDetail}
                  titleTable={titleTable}
                  handleViewDetail={handleViewDetail}
                />
              )}
            </BaseGridItem>
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
        </Grid>
        <TaoNghiPhep
          openTaoPhep={openTaoPhep}
          handleCloseTaoPhep={handleCloseTaoPhep}
        />
      </PaperStyled>
    </React.Fragment>
  );
};
export default NhanVien;
