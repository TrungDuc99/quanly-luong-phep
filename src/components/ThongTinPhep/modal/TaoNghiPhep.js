import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import React, {useState} from "react";
import CloseIcon from "@material-ui/icons/Close";
import {Box} from "@mui/system";
import BaseGridItem from "components/share/Base/BaseGridItem";
import BaseTextField from "components/share/Base/BaseTextField";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import LinearProgress from "@material-ui/core/LinearProgress";
import {KeyboardDatePicker} from "@material-ui/pickers";
import {TimePicker} from "@material-ui/pickers";

import ModalThongTinTS from "./tableLoaiPhep";
const useStyles = makeStyles(theme => ({
  rootModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    width: "850px",
    boxShadow: 24,
    p: 4
  },
  rootModalDetail: {
    position: "absolute",
    bottom: "30px",
    left: "30px",
    width: 800,
    backgroundColor: "white",
    borderRadius: "7px"
  },
  header: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F1ECEC",
    borderRadius: "4px 4px 0px 0px",
    paddingLeft: "20px",
    textTransform: "uppercase"
  },
  contentDetail: {
    padding: "10px 10px 10px 10px",
    width: "100%",
    height: 800
  },
  content: {
    padding: "10px 10px 10px 10px",
    width: "100%",
    backgroundColor: "#f5F5F5",
    maxHeight: "calc(100vh - 108px)",
    overflow: "auto"
  },
  footer: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#F1ECEC",
    borderRadius: "0px 0px 4px 4px",
    padding: "10px 20px"
  },
  closeButton: {
    position: "absolute",
    right: "0px",
    top: "0px",
    color: theme.palette.grey[500],
    padding: "8px"
  }
}));

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 15,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE"
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff"
  }
}))(LinearProgress);

const TaoNghiPhep = ({openTaoPhep, handleCloseTaoPhep}) => {
  const LoaiPhep = [
    {
      value: "Ph??p th?????ng ni??n",
      id: "01",
      label: "Ph??p th?????ng ni??n"
    },
    {
      id: "02",
      value: "Ph??p kh??ng th?????ng ni??n",
      label: "Ph??p kh??ng th?????ng ni??n"
    }
  ];
  const [ loaiPhep, setLoaiPhep ] = useState("");
  const classes = useStyles();
  const [ selectedFiles, setSelectedFiles ] = useState(undefined);
  const [ progress, setProgress ] = useState(0);
  const [ currentFile, setCurrentFile ] = useState(undefined);

  const handleChangeSelect = event => {
    setLoaiPhep(event.target.value);
  };
  const selectFile = event => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];
    setProgress(0);
    setCurrentFile(currentFile);
    // UploadService.upload(currentFile, (event) =>
    // {
    //     setProgress(Math.round((100 * event.loaded) / event.total));
    // })
    //   .then((response) => {
    //     const { files } = response.data;
    //     createDocAttachFilesAsync({
    //       DocId: id,
    //       Name: files[0].name,
    //       Type: typeFileSelected,
    //       CreateBy: authUser.email,
    //       LinkLocation: files[0].url,
    //       LinkRemove: files[0].deleteUrl,
    //     })
    //       .then(() => {
    //         console.log("Success");
    //         loadFile();
    //       })
    //       .catch(() => console.log("Fail"));
    //   })
    //   // .then((files) => {
    //   //   console.log(files.data);
    //   // })
    //   .catch(() => {
    //     setProgress(0);
    //     setMessage("Kh??ng th??? t???i t???p tin!");
    //     setCurrentFile(undefined);
    //   });

    setSelectedFiles(undefined);
  };
  const [ selectedDate, handleDateChange ] = useState(new Date());
  return (
    <Modal
      open={openTaoPhep}
      onClose={handleCloseTaoPhep}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.rootModal}>
        <Box className={classes.header}>
          <Typography variant="h5" style={{fontWeight: "700"}}>
            ????N XIN NGH??? PH??P
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleCloseTaoPhep}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
        </Box>
        <Box className={classes.content}>
          <Grid container>
            <Grid item xs={4}>
              <BaseGridItem item>
                <BaseTextField
                  name="maNV"
                  label="M?? nh??n vi??n"
                  value="2021-00001"
                  // value={doc.tenKhv}
                  // onChange={handleChangeValue}
                  multiline
                  fullWidth
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={4}>
              <BaseGridItem item>
                <BaseTextField
                  name="hoTen"
                  label="H??? v?? t??n"
                  value="????? Trung ?????c"
                  // value={doc.tenKhv}
                  // onChange={handleChangeValue}
                  multiline
                  fullWidth
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={4}>
              <BaseGridItem item>
                <BaseTextField
                  name="chucVu"
                  label="Ch???c danh"
                  value="Nh??n vi??n ph??t tri???n ???ng d???ng"
                  // value={doc.tenKhv}
                  // onChange={handleChangeValue}
                  multiline
                  fullWidth
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={4}>
              <BaseGridItem item>
                <BaseTextField
                  name="phepConLai"
                  label="S??? ph??p th?????ng ni??n c??n l???i"
                  value="04 ng??y"
                  // value={doc.tenKhv}
                  // onChange={handleChangeValue}
                  multiline
                  fullWidth
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={4}>
              <BaseGridItem item>
                <BaseTextField
                  name="loaiPhep"
                  select
                  label="Lo???i ph??p"
                  value="Ph??p th?????ng ni??n"
                  value={loaiPhep}
                  onChange={handleChangeSelect}
                  multiline
                  fullWidth
                >
                  <MenuItem value="">Ch???n lo???i ph??p</MenuItem>
                  {LoaiPhep.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </BaseTextField>
              </BaseGridItem>
            </Grid>
            <Grid item xs={3}>
              <BaseGridItem item>
                <h5>T???p tin ????nh k??m</h5>
                <Box display="flex" alignItems="center">
                  <Box width="100%" mr={2}>
                    <div className="file-name">
                      {selectedFiles && selectedFiles.length > 0 ? (
                        selectedFiles[0].name
                      ) : null}
                    </div>
                    <BorderLinearProgress
                      variant="determinate"
                      value={progress}
                    />
                  </Box>
                  <Box minWidth={35}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{fontWeight: "bold"}}
                    >{`${progress}%`}</Typography>
                  </Box>
                </Box>
              </BaseGridItem>
            </Grid>
            <Grid item xs={1}>
              <BaseGridItem item>
                <label htmlFor="btn-upload">
                  <input
                    id="btn-upload"
                    name="btn-upload"
                    style={{display: "none"}}
                    type="file"
                    onChange={selectFile}
                  />
                  <Button
                    className="btn-choose"
                    component="span"
                    color="primary"
                  >
                    <PhotoCameraIcon />
                  </Button>
                </label>
              </BaseGridItem>
            </Grid>
            <Grid item xs={6}>
              <BaseGridItem>
                <TextField
                  fullWidth
                  id="datetime-local"
                  label="T??? gi??? ng??y"
                  type="datetime-local"
                  defaultValue="2021-09-29T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={6}>
              <BaseGridItem>
                <TextField
                  fullWidth
                  id="datetime-local"
                  label="?????n gi??? ng??y"
                  type="datetime-local"
                  defaultValue="2021-09-29T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </BaseGridItem>
            </Grid>

            <Grid item xs={3}>
              <BaseGridItem item>
                <BaseTextField
                  name="tongNgay"
                  label="T???ng s??? ng??y ngh???"
                  value="1 ng??y"
                  // value={doc.tenKhv}
                  // onChange={handleChangeValue}
                  multiline
                  fullWidth
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={4}>
              <BaseGridItem item>
                <BaseTextField
                  name="mailNhanBc"
                  label="Mail nh???n b??o c??o k???t qu???"
                  value="dotrungduc@vietbank.com.vn"
                  // value={doc.tenKhv}
                  // onChange={handleChangeValue}
                  multiline
                  fullWidth
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={5}>
              <BaseGridItem item>
                <BaseTextField
                  name="lyDo"
                  label="L?? do"
                  value="Vui l??ng nh???p l?? do"
                  // value={doc.tenKhv}
                  // onChange={handleChangeValue}
                  multiline
                  fullWidth
                />
              </BaseGridItem>
            </Grid>
            <Grid item xs={12}>
              <BaseGridItem item>
                <h3>Di???n gi???i chi ti???t lo???i ph??p</h3>
              </BaseGridItem>
            </Grid>

            <Grid item xs={12}>
              <BaseGridItem item>
                <ModalThongTinTS />
              </BaseGridItem>
            </Grid>

            <Grid item xs={12}>
              <BaseGridItem item>
                <h3>L??u ??:</h3>
                <h5 style={{color: "#f03838"}}>
                  - (*) B???t bu???c nh???p t??i li???u ????nh k??m cho l?? do ngh??? ph??p
                </h5>
                <h5 style={{color: "#f03838"}}>
                  - * T??i li???u ????nh k??m kh??ng ???????c v?????t qu?? 10mb
                </h5>
              </BaseGridItem>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.footer}>
          <Button
            style={{
              width: "100px",
              marginRight: "15px",
              backgroundColor: "#DEDCDC",
              color: "#555555"
            }}
            onClick={handleCloseTaoPhep}
          >
            Tr??? v???
          </Button>
          <Button
            style={{
              width: "100px",
              backgroundColor: "#1854a5",
              color: "#fff"
            }}
          >
            X??c nh???n
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default TaoNghiPhep;
