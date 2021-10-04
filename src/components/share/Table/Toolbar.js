import {
  Badge,
  Button,
  Grid,
  InputBase,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import defaultTheme from "theme/defaultTheme";

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
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  search: {
    display: "flex",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    height: "100%"
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

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -6,
    top: -8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "4px",
    borderRadius: 6,
    color: "#fff"
  }
}))(Badge);

function EnhancedTableToolbar({
  tabs,
  tabCurrent,
  onChangeTab,
  onSearchChange,
  notify,
  taoNghiePhep,
  tabDuyetPhep,
  lichSuDuyetPhep,
  renamebtn,
  titleTable
}){
  const classes = useToolbarStyles();

  const checkTab = tabLocal => {
    return tabCurrent === tabLocal ? "primary" : "initial";
  };

  const handleSearch = e => {
    const valueSearch = e.target.value;
    onSearchChange(valueSearch);
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
          {tabs &&
            tabs.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  style={{minWidth: "130px", textAlign: "center"}}
                >
                  <div
                    className={clsx(classes.tab, {
                      [classes.tabActive]: tabCurrent === item.id
                    })}
                    onClick={() => handleTabChange(item.id)}
                  >
                    <StyledBadge
                      showZero
                      classes={{
                        badge: classes[item.color]
                      }}
                      badgeContent={notify[item.notifyId]}
                      max={999}
                      color="primary"
                    >
                      <Typography
                        variant="h6"
                        id="tableTitle"
                        component="div"
                        color={checkTab(item.id)}
                      >
                        {item.label}
                      </Typography>
                    </StyledBadge>
                  </div>
                </Grid>
              );
            })}
        </Grid>

        {titleTable !== "Chỉnh sửa ngày nghỉ" &&
        titleTable !== "Chi tiết phép đã duyệt" &&
        titleTable !== "Chi tiết phép cần duyệt" ? (
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
                marginLeft: 10
              }}
            >
              {!tabDuyetPhep ? (
                <Button className="btnThem" onClick={taoNghiePhep}>
                  Tạo đơn nghỉ phép
                </Button>
              ) : (
                <Button className="btnThem" onClick={lichSuDuyetPhep}>
                  {renamebtn}
                </Button>
              )}

              <div className="btnSearch">
                <InputBase
                  placeholder="Nhập thông tin cần tìm…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  onChange={handleSearch}
                  inputProps={{"aria-label": "search"}}
                />
                <div className="searchIcon">
                  <Search />
                </div>
              </div>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Toolbar>
    </React.Fragment>
  );
}
export default EnhancedTableToolbar;
