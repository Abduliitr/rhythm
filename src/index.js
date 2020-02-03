// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import base from "./containers/index";
import GameStats from "./components/UserGameStats";
import UserGameHistory from "./components/UserGameHistory";
import page404 from "./components/page404.js";
import Assessment from "./components/Assessment.js";

import Header from "./containers/Header";
import Footer from "./containers/Footer";
import { Router, Route, Switch } from "react-router-dom";
import store from "./store";
import history from "./utils/history";

const rootEl = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div style={{ minHeight: "100vh" }}>
        <Header />

        <Switch>
          <Route path="/" exact component={base} />
          <Route path="/user/games" exact component={UserGameHistory} />
          <Route path="/user/assessment" exact component={Assessment} />
          <Route path="/user/games/:id" exact component={GameStats} />
          <Route path="*" exact component={page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  rootEl
);
