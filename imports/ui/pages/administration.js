import React from "react";
import { connect } from "react-redux";
import { withTracker } from 'meteor/react-meteor-data';
import store from "../redux/redux_store";
import { Users } from '../../api/users';
class Administration extends React.Component {
  
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
              </tr>
              {users.map((user,key) => {
                return (
                  <tr key={key}>
                    <td>{user.payload.firstName}</td>
                    <td>{user.payload.lastName}</td>
                    <td>{user.payload.email}</td>
                    <td>{user.payload.phone}</td>
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
