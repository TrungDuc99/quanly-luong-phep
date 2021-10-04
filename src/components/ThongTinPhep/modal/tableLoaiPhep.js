/** @format */
import * as React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
const style = makeStyles({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    backgroundColor: "white",
    borderRadius: "4px"
  },
  header: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5F5F5",
    borderRadius: "4px 4px 0px 0px",
    paddingLeft: "20px",
    fontWeight: "700"
  },
  content: {padding: "10px"},
  footer: {
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#f5F5F5",
    borderRadius: "0px 0px 4px 4px",
    padding: "10px 20px"
  },
  table: {
    //minWidth: 1060,
  },
  tableHeader: {backgroundColor: "rgb(219, 234, 255)"},
  tableBody: {
    "&:nth-child(even)": {
      backgroundColor: "#fafafa"
    }
  },
  container: {
    maxHeight: "500px"
  },
  linkUnderLine: {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

export default function ModalThongTinTS({docId, open, onClose, viewDetail}){
  const classes = style();
  const headCells = {
    caNhan: [
      {
        id: "stt",
        numeric: false,
        disablePadding: false,
        label: "STT",
        width: "70px",
        left: "237px"
      },
      {
        id: "soChungTu",
        numeric: false,
        disablePadding: false,
        label: "Số chứng từ",
        backgroundColor: "rgb(219, 234, 255)",
        width: "150px",
        left: "77px"
      },

      {
        id: "ky",
        numeric: false,
        disablePadding: false,
        label: "Kỳ",
        width: "150px",
        left: "237px"
      },

      {
        id: "dienGiai",
        numeric: false,
        disablePadding: false,
        label: "Diễn giải",
        width: "400px"
      },
      {
        id: "luongThucNhan",
        numeric: false,
        disablePadding: false,
        label: "Lương thực nhận",
        width: "200px"
      },
      {
        id: "trangThai",
        numeric: false,
        disablePadding: false,
        label: "Trạng thái",
        width: "150px"
      }
    ]
  };
  const data = [
    {
      id: "1",
      stt: "01",
      loaiPhep: "Phép lường niên",
      ghiChu: "Theo thâm niên của nhân sự",
      tapTin: false
    },
    {
      id: "2",
      stt: "02",
      loaiPhep: "Nghỉ việc hiếu hỷ",
      ghiChu: "Tối đa 3 ngày/lần",
      tapTin: false
    },
    {
      id: "3",
      stt: "03",
      loaiPhep: "Nghỉ việc hiếu hỷ(vợ sinh, con cưới, anh em ruột mất )",
      ghiChu: "Tối đa 1 ngày/lần",
      tapTin: false
    },
    {
      id: "4",
      stt: "04",
      loaiPhep: "Bản thân ốm ngắn ngày",
      ghiChu: "Tối đa 10 ngày/quý",
      tapTin: true
    },
    {
      id: "5",
      stt: "05",
      loaiPhep: "Bản thân ốm dài ngày",
      ghiChu: "Tối đa 30 ngày/năm",
      tapTin: true
    },
    {
      id: "6",
      stt: "06",
      loaiPhep: "Con ốm(dưới 3 tuổi)",
      ghiChu: "Tối đa 20 ngày/năm",
      tapTin: true
    },
    {
      id: "7",
      stt: "07",
      loaiPhep: "Con ốm(dưới 3 tuổi)",
      ghiChu: "Tối đa 15 ngày/năm",
      tapTin: true
    },
    {
      id: "8",
      stt: "08",
      loaiPhep: "Nghỉ thai sản",
      ghiChu: "Không quy định",
      tapTin: false
    },
    {
      id: "9",
      stt: "09",
      loaiPhep: "Nghỉ khám thai",
      ghiChu: "Tối đa 5 ngày/năm",
      tapTin: true
    },
    {
      id: "10",
      stt: "10",
      loaiPhep: "Nghỉ không lương",
      ghiChu: "Không lương",
      tapTin: true
    },
    {
      id: "11",
      stt: "11",
      loaiPhep: "nghỉ bù",
      ghiChu: "Không lương",
      tapTin: false
    }
  ];
  // const { id } = useParams();

  // useEffect(() =>
  // {
  //     // open && getActions(id || 30106).then((res) => setData(res.data));
  // }, [open]);

  const handleClose = () => {
    onClose(false);
  };
  const formatDate = date => {
    const dateTime = new Date(date);
    return `${dateTime.toLocaleDateString()} - ${dateTime.toLocaleTimeString()} `;
  };
  return (
    <Grid container>
      {data === "" ? (
        <Box style={{padding: "10px 20px"}}>
          Hiện tại không có lịch sử thao tác
        </Box>
      ) : (
        <TableContainer className={classes.container}>
          <Table size="small" aria-label="sticky table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell
                  style={{width: "5%", fontWeight: "700"}}
                  align="center"
                >
                  STT
                </TableCell>
                <TableCell
                  align="center"
                  style={{width: "20%", fontWeight: "700"}}
                >
                  Loại phép
                </TableCell>
                <TableCell
                  align="center"
                  style={{width: "20%", fontWeight: "700"}}
                >
                  Ghi chú
                </TableCell>
                <TableCell
                  align="center"
                  style={{width: "10%", fontWeight: "700"}}
                >
                  Tập tin đính kèm
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className={classes.tableBody}>
                  <TableCell align="center">{item.stt}</TableCell>
                  <TableCell align="center">{item.loaiPhep}</TableCell>

                  <TableCell>{item.ghiChu}</TableCell>
                  <TableCell align="center">
                    {item.tapTin == true ? (
                      <p style={{color: "rgb(255, 17, 0)"}}>Bắt buộc</p>
                    ) : (
                      <p style={{color: "rgb(214, 214, 214)"}}>
                        Không bắt buộc
                      </p>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
}
