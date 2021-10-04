import React, {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import PageLoader from "../@jumbo/components/PageComponents/PageLoader";
const TrangChuRouter = ({match}) => {
  const requestedUrl = match.url.replace(/\/$/, "");
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* Danh sách khởi tạo */}
        <Route
          exact
          path={`${requestedUrl}`}
          component={lazy(() => import("components/TrangChu"))}
        />
        {/* Tao Phiếu yêu cầu */}
        {/* <Route
                    exact
                    path={`${ requestedUrl }/tao-phieu-yeu-cau`}
                    component={lazy(() => import("components/KhoiTao/components/TaoPhieuYeuCau"))}
                /> */}
        {/* Xem chi tiet */}
        {/* <Route
                    exact
                    path={`${ requestedUrl }/:id`}
                    component={lazy(() => import("components/KhoiTao/components/ChiTiet/index"))}
                /> */}
      </Switch>
    </Suspense>
  );
};

export default TrangChuRouter;
