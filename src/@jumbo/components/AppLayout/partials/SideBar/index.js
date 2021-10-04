import React from "react";
import CmtVertical from "../../../../../@coremat/CmtNavigation/Vertical";
import PerfectScrollbar from "react-perfect-scrollbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IntlMessages from "../../../../utils/IntlMessages";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PepeleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import {useSelector} from "react-redux";
const useStyles = makeStyles(theme => ({
  perfectScrollbarSidebar: {
    height: "100%",
    transition: "all 0.3s ease",
    ".Cmt-sidebar-fixed &, .Cmt-Drawer-container &": {
      height: "calc(100% - 167px)"
    },
    ".Cmt-modernLayout &": {
      height: "calc(100% - 72px)"
    },
    ".Cmt-miniLayout &": {
      height: "calc(100% - 91px)"
    },
    ".Cmt-miniLayout .Cmt-sidebar-content:hover &": {
      height: "calc(100% - 167px)"
    }
  }
}));

const SideBar = () => {
  const {authUser} = useSelector(({auth}) => auth);
  const email = authUser && authUser.email;
  const name = authUser && authUser.name;
  const branchCode = "0500";
  const branchName = "VIETBANK - CN HOCHIMINH";
  const classes = useStyles();
  const navigationMenus = [
    {
      // name: "Thẩm định",
      type: "section",
      children: [
        {
          name: "Trang chủ",
          icon: <HomeIcon />,
          type: "item",
          link: "/home"
        },

        {
          name: "Nhân viên",
          icon: <PersonIcon />,
          type: "item",
          link: `/nhan-vien`
        },
        {
          name: "Phòng ban",
          icon: <PepeleIcon />,
          type: "item",
          link: `/phong-ban`
        },
        {
          name: "Báo cáo",
          icon: <EqualizerIcon />,
          type: "item",
          link: `/bao-cao`
        },
        {
          name: "Thông tin phép",
          icon: <FileCopyIcon />,
          type: "item",
          link: `/thong-tin-phep`
        },
        {
          name: "Thông tin lương",
          icon: <AccountBalanceWalletIcon />,
          type: "item",
          link: `/thong-tin-luong`
        }
      ]
    }
  ];

  return (
    <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
      <CmtVertical menuItems={navigationMenus} />
    </PerfectScrollbar>
  );
};

export default SideBar;
