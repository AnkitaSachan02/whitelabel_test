import React, { Component} from "react";
import "./App.css";
import { Link } from "react-router";
import { connect } from "react-redux";
import store from "./redux/redux_store";
import { logout } from "./redux/action/actions";
import { browserHistory } from "react-router";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

class App extends Component {
  administration = () => {
    console.log("Menu Item is Administration");
  }
  logout = () => {
    console.log("User is Logout");
    store.dispatch(logout());
    browserHistory.push("/login");
  };

  onClick=(name)=>{
    console.log(name," button in menu")
  }
  render() {
    var currentLocation = this.props.location.pathname;
    const { loginUser } = store.getState();
    if(currentLocation === "/"){
     console.log("..user is visiting home page...");
    }
    return (
      <div className="App">
          <MenuList>
            <MenuItem>
                <Link to="/" onClick={()=>{this.onClick("Home")}} className={currentLocation === "/" ? "active" : ""}>
                  Home
                </Link>
            </MenuItem>
            {loginUser && loginUser.loginUser && (
                <div>
                  <MenuItem>
                      <Link onClick={this.administration} to="/administration"className={currentLocation === "/administration" ? "active" : ""}>
                        Administration
                      </Link>
                  </MenuItem>
                  <MenuItem>
                      <Link onClick={this.logout}>logout</Link>
                  </MenuItem>
                </div>
            )}
            {loginUser && !loginUser.loginUser && (
              <MenuItem>
                <Link to="/login" onClick={()=>{this.onClick("Sign in")}} className={currentLocation === "/login" ? "active" : ""}>Sign in</Link>
              </MenuItem>
            )}
          </MenuList>
        {this.props.children}
      </div>
    );
  }
}

export default (App = connect(state => {
  return {
    state
  };
})(App));
