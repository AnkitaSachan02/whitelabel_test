import React from "react";
import { withTracker } from 'meteor/react-meteor-data';
import store from "../redux/redux_store";
import { Users } from '../../api/users';
import { browserHistory } from "react-router";
class Administration extends React.Component {
  componentWillUpdate() {
    const { loginUser } = store.getState();
    console.log("loginUser>>>",loginUser)
    if(!loginUser || Object.keys(loginUser).length===0){
      browserHistory.push("/login");
    }
  }
  render() {
    console.log("Administartion store", store);
    const { users } = this.props;
    console.log("users>>>>",users);
    return (
      <div className="App">
        { users && users.length > 0 ? (
          <table>
            <tbody>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>address</th>
                <th>city</th>
                <th>state</th>
                <th>zip</th>
                <th>country</th>
                <th>comments</th>
              </tr>
              {users.map((user,key) => {
                let {payload:{firstName,lastName,email,phone,address,city,state,zip,country,comments}} = user;
                return (
                  <tr key={key}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{address}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{zip}</td>
                    <td>{country}</td>
                    <td>{comments}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table><tbody><tr><td>There are no users.</td></tr></tbody></table>
        )}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    users: Users.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(Administration);
