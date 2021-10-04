import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import TrangChuRouter from "./TrangChuRouter.js";
import NhanVienRouter from "./NhanVienRouter.js";
import PhongBanRouter from "./PhongBanRouter.js";
import BaoCaoRouter from "./BaoCaoRouter.js";
import ThongTinLuongRouter from "./ThongTinLuongRouter.js";
import ThongTinPhepRouter from "./ThongTinPhepRouter.js";
import Login from "./Auth/Login.js";
import Signup from "./Auth/Register";
import ForgotPassword from "./Auth/ForgotPassword";
const RestrictedRoute = ({component: Component, ...rest}) => {
  const {authUser} = useSelector(({auth}) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: {from: props.location}
            }}
          />
        )}
    />
  );
};

const Routes = () => {
  const {authUser} = useSelector(({auth}) => auth);
  const location = useLocation();

  if (location.pathname === "" || location.pathname === "/") {
    return <Redirect to={"/home"} />;
  } else if (authUser && location.pathname === "/signin") {
    return <Redirect to={"/home"} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <RestrictedRoute path="/home" component={TrangChuRouter} />
        <RestrictedRoute path="/nhan-vien" component={NhanVienRouter} />
        <RestrictedRoute path="/phong-ban" component={PhongBanRouter} />
        <RestrictedRoute path="/bao-cao" component={BaoCaoRouter} />
        <RestrictedRoute
          path="/thong-tin-luong"
          component={ThongTinLuongRouter}
        />
        <RestrictedRoute
          path="/thong-tin-phep"
          component={ThongTinPhepRouter}
        />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
      {location.pathname !== "/signin" &&
        location.pathname !== "/forgot-password"}
    </React.Fragment>
  );
};

export default Routes;
