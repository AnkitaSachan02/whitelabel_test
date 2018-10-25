import React, { Component} from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContactUsForm from "../ui/pages/ContactUsForm";
import Login from "../ui/pages/login";
import Administration from "../ui/pages/administration";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/redux_store";

export default class Index extends Component {

  render() {
    return(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={ContactUsForm} />
            <Route path="/login" component={Login} />
            <Route path="/administration" component={Administration} />
          </Route>
        </Router>
      </Provider>
    );
  }
}