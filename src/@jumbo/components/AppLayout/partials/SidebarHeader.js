import React, {useEffect, useState} from "react";
import {
  Box,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import {useDispatch} from "react-redux";
import CmtAvatar from "../../../../@coremat/CmtAvatar";
import {AuhMethods} from "services/auth";
import {CurrentAuthMethod} from "../../../constants/AppConstants";
import {useSelector} from "react-redux";
import {colors} from "../../../../theme/themeColors";
const useStyles = makeStyles(theme => ({
  root: {
    padding: "16px",
    borderBottom: `solid 1px ${theme.palette.sidebar.borderColor}`,
    display: "flex",
    alignItems: "center"
  },
  userInfo: {
    paddingTop: 0,
    transition: "all 0.1s ease",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    ".Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &": {
      height: 0,
      paddingTop: 0,
      opacity: 0,
      transition: "all 0.3s ease"
    }
  },
  userTitle: {
    color: theme.palette.sidebar.textDarkColor
  },
  userSubTitle: {
    fontSize: 13,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 0.25
  },
  imgAvatar: {}
}));

const SidebarHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [ userInfo, setUserInfo ] = useState({
    name: "",
    email: ""
  });
  const {authUser} = useSelector(({auth}) => auth);
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  // useEffect(() =>
  // {
  //   if (authUser !== null)
  //   {
  //     setUserInfo(...userInfo, { name: authUser.name, email: authUser.email });
  //   }
  // }, []);
  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onLogoutClick = () => {
    handlePopoverClose();
    dispatch(AuhMethods[CurrentAuthMethod].onLogout());
  };

  const generateAvatar = name => {
    let n = name.split(" ");
    name = `${n[0]} ${n[n.length - 1]}`;
    var initials = name
      .split(" ")
      .map(function(str){
        return str ? str[0].toUpperCase() : "";
      })
      .join("");
    var canvas = document.createElement("canvas");
    var radius = 30;
    var margin = 5;
    canvas.width = radius * 2 + margin * 2;
    canvas.height = radius * 2 + margin * 2;

    // Get the drawing context
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(radius + margin, radius + margin, radius, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    ctx.fillText(initials, radius + 5, radius * 4 / 3 + margin);
    return canvas.toDataURL();
  };

  return (
    <Box className={classes.root}>
      <CmtAvatar
        // src={generateAvatar(userInfo.name)}
        src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
        alt="User Avatar"
        className={classes.imgAvatar}
      />
      <Box className={classes.userInfo} onClick={handlePopoverOpen}>
        <Box
          className="pointer"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box ml={2} mr={2}>
            <Typography
              className={classes.userTitle}
              component="h3"
              variant="h6"
            >
              {/* {userInfo.name} */}
              DeMo
            </Typography>
            <Typography className={classes.userSubTitle}>
              {/* {userInfo.email} */}
              demo@example.com
            </Typography>
          </Box>
          <ArrowDropDownIcon />
        </Box>
      </Box>

      {open && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          container={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right"
          }}
        >
          <Paper elevation={8}>
            <MenuList>
              <MenuItem onClick={handlePopoverClose}>
                <PersonIcon />
                <Box ml={2}>Thông tin</Box>
              </MenuItem>
              {/* <MenuItem onClick={handlePopoverClose}>
                <SettingsIcon />
                <Box ml={2}>Settings</Box>
              </MenuItem> */}
              <MenuItem onClick={onLogoutClick}>
                <ExitToAppIcon />
                <Box ml={2}>Đăng xuất</Box>
              </MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      )}
    </Box>
  );
};

export default SidebarHeader;
