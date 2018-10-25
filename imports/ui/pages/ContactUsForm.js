import React, { Component } from "react";
import store from "../redux/redux_store";
import { saveContactUsInfo } from "../redux/action/actions";
import { toastrModal } from "../toastrModal";
import validator from 'validator';
import { Users } from '../../api/users';


class ContactUsForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    error: ""
  };
  onSubmit = event => {
    event.preventDefault();
    const { toastr } = this.props;
    if (!this.state.firstName) {
      toastr.error("Please enter first name.", "Error");
      return false;
    } else if (!this.state.lastName) {
      toastr.error("Please enter your last name.", "Error");
      return false;
    } else if (!validator.isEmail(this.state.email)) {
      toastr.error("Please enter valid email address.", "Error");
      return false;
    } else if (!validator.isMobilePhone(this.state.phone)) {
      toastr.error("Please enter your Phone.", "Error");
      return false;
    } 

    let payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    };

    Users.insert({
      payload,
      createdAt: new Date(), // current time
    });
    toastr.success(
      "Your information has been added successfully!!!",
      "Success"
    );
  };

  handleInputChange = inputName => e => {
    this.setState({
      [inputName]: e.target.value
    });
  };
  render() {
    return (
      <div className="">
        <form>
          <h1>Contact Us</h1>
          <fieldset>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange("firstName")}
              name="firstName"
              required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              onChange={this.handleInputChange("lastName")}
              id="lastName"
              value={this.state.lastName}
              name="lastName"
            />
            <label htmlFor="annualSalary">Email Address</label>
            <input
              type="email"
              onChange={this.handleInputChange("email")}
              id="email"
              name="email"
            />
            <label htmlFor="superRate">Telephone:</label>
            <input
              type="number"
              onChange={this.handleInputChange("phone")}
              id="telephone"
              name="telephone"
              value={this.state.phone}
            />
          </fieldset>
          <button type="button" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default toastrModal(ContactUsForm);
