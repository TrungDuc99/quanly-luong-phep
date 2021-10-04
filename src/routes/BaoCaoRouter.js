import React, {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import PageLoader from "../@jumbo/components/PageComponents/PageLoader";
const BaoCaoRouter = ({match}) => {
  const requestedUrl = match.url.replace(/\/$/, "");
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          exact
          path={`${requestedUrl}`}
          component={lazy(() => import("components/BaoCao"))}
        />
      </Switch>
    </Suspense>
  );
};

export default BaoCaoRouter;