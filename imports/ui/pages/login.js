import React from "react";
import { login } from "../redux/action/actions";
import store from "../redux/redux_store";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class Login extends React.Component {
  componentWillUpdate() {
    const { loginUser } = store.getState();
    loginUser && browserHistory.push("/administration");
  }
  onSubmit = event => {
    event.preventDefault();
    if (!(this.userName.value === 'admin' && this.password.value === 'test')) {
      alert ("Permission Denied!");
      return false;
    } 

    let payload = {
      name: this.userName.value,
      password: this.password.value
    };
    store.dispatch(login(payload));
    console.log("..user is sign in..");
    console.log("user's email address is",this.password.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <fieldset>
                <label htmlFor="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  name="uname"
                  required
                  ref={ref => (this.userName = ref)}
                />

                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  name="psw"
                  ref={ref => (this.password = ref)}
                  required
                />
            </fieldset>
            <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default (Login = connect(state => {
  return {
    state
  };
})(Login));
