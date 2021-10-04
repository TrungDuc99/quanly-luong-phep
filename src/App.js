import React from "react";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import {Switch} from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import configureStore, {history} from "./redux/store";
import AppWrapper from "./@jumbo/components/AppWrapper";
import AppContextProvider from "./@jumbo/components/contextProvider/AppContextProvider";
import Routes from "./routes";

export const store = configureStore();

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppWrapper>
          <Switch>
            <Routes />
          </Switch>
        </AppWrapper>
      </ConnectedRouter>
    </Provider>
  </AppContextProvider>
);

export default App;
