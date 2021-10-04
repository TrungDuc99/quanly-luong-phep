import {
  Badge,
  Grid,
  InputBase,
  makeStyles,
  MenuItem,
  Toolbar,
  Typography,
  TextField
} from "@material-ui/core";

import {Search} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import defaultTheme from "theme/defaultTheme";
import {DatePicker} from "@material-ui/pickers";
const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex"
  },

  highlight:
    theme.palette.type === "light"
      ? {
          color: "#555",
          backgroundColor: "#DBEAFF"
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: "#1854a5"
        },
  title: {width: 200},
  tabs: {
    flex: "1 1 100%"
  },
  tab: {
    padding: "12px 5px",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: `2px solid ${defaultTheme.palette.primary.main}`,
      cursor: "pointer"
    }
  },
  tabActive: {
    borderBottom: `2px solid ${defaultTheme.palette.primary.main}`,
    backgroundColor: "#fafafa"
  },
  pickMoth: {
    display: "flex",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #DEDEDE",
    borderRadius: "6px",
    height: "100%",
    width: "200px",
    marginRight: 15
  },
  TextTitle: {
    display: "flex",
    color: "#1854a5",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "200px"
  },
  TextTitle2: {
    display: "flex",
    color: "#777777",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "200px"
  },
  pickYear: {
    display: "flex",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "6px",
    height: "100%",
    width: "200px"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    color: "#999999"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(0, 1, 0, 0),
    // vertical padding + font size from searchIcon
    width: "auto",
    height: "32px"
  },
  btnDefault: {
    borderRadius: "6px",
    fontSize: 12,
    paddingLeft: "15px",
    paddingRight: "15px",
    height: "36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      opacity: 0.8
    }
  },
  customizeToolbar: {
    minHeight: 48
  },
  colorDefault: {
    backgroundColor: "#ddd"
  },

  colorIncome: {
    backgroundColor: defaultTheme.palette.icomeColor //#007AFF
  },
  colorTest: {
    backgroundColor: defaultTheme.palette.testColor //#5AC8FA
  },
  colorEvolution: {
    backgroundColor: defaultTheme.palette.evolutionColor //#5856D6
  },
  colorCheck: {
    backgroundColor: defaultTheme.palette.checkColor //#FFCC00
  },
  colorRefuse: {
    backgroundColor: defaultTheme.palette.refuseColor //#FF9500
  },
  colorExpired: {
    backgroundColor: defaultTheme.palette.expiredColor //#FF3B30
  },
  colorDone: {
    backgroundColor: defaultTheme.palette.doneColor //#34C759
  },
  colorPaused: {
    backgroundColor: defaultTheme.palette.pausedColor //#F26419
  }
}));

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

function EnhancedTableToolbarDate({
  tabs,
  tabCurrent,
  onChangeTab,
  onSearchChange,
  notify
}){
  const classes = useToolbarStyles();
  const [ currency, setCurrency ] = React.useState("");

  const [ selectedDate, handleDateChange ] = React.useState(new Date());
  const checkTab = tabLocal => {
    return tabCurrent === tabLocal ? "primary" : "initial";
  };

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleSearch = e => {
    onSearchChange(e.target.value);
  };
  const handleTabChange = tab => {
    onChangeTab(tab);
  };

  return (
    <React.Fragment>
      <Toolbar
        className={clsx(classes.root, classes.customizeToolbar)}
        style={{borderBottom: "1px solid #eee"}}
      >
        <Grid container justify="flex-start" className={classes.tabs}>
          <Grid
            item
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: 10,
              marginLeft: 10,
              marginTop: 5,
              marginBottom: 5
            }}
          >
            <div className={classes.TextTitle}>
              <Grid
                style={{
                  minWidth: "130px",
                  textAlign: "center"
                }}
              >
                <Typography variant="h6" id="tableTitle" component="div">
                  LỊCH SỬ NGHỈ PHÉP
                </Typography>
              </Grid>
            </div>

            <div className={classes.TextTitle2}>
              <Grid
                style={{
                  textAlign: "center"
                }}
              >
                <Typography variant="h6" id="tableTitle" component="div">
                  Số phép còn lại: 4 ngày nhỉ
                </Typography>
              </Grid>
            </div>
          </Grid>

          {/* <Grid
            style={{
              minWidth: "130px",
              textAlign: "center",
              paddingLeft: "10px",
            }}
          >
            <Typography variant="h6" id="tableTitle" component="div">
              LỊCH SỬ NGHỈ PHÉP
            </Typography>
          </Grid> */}
        </Grid>
        <Grid
          container
          style={{width: "fit-content"}}
          spacing={0}
          justify="flex-end"
        >
          <Grid
            item
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: 10,
              marginLeft: 10,
              marginTop: 5,
              marginBottom: 5
            }}
          >
            <div className={classes.pickMoth}>
              {/* <DatePicker
                style={{width: "100%", paddingRight: "5px"}}
                views={[ "month" ]}
                label="Chọn năm"
                value={selectedDate}
                onChange={handleDateChange}
              /> */}
              <TextField
                id="outlined-select-currency"
                select
                label="Chọn tháng"
                value={currency}
                onChange={handleChange}
                style={{width: "100%", paddingRight: "5px"}}
              >
                <MenuItem value="">Chọn Tháng</MenuItem>
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className={classes.pickYear}>
              <DatePicker
                style={{width: "100%", paddingRight: "5px"}}
                views={[ "year" ]}
                label="Chọn năm"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
}
export default EnhancedTableToolbarDate;
