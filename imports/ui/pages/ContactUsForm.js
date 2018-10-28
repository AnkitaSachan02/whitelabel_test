import React, { Component } from "react";
import { toastrModal } from "../toastrModal";
import validator from 'validator';
import { Users } from '../../api/users';


class ContactUsForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address:"",
    city:"",
    state:"",
    zip:"",
    country:"",
    comments:"",
    error: ""
  };

  onSubmit = event => {
    console.log("User pressed the submit button");
    event.preventDefault();
    const { toastr } = this.props;
    let {firstName,lastName,email,phone,address,city,state,zip,country,comments } = this.state;
    if (!firstName) {
      toastr.error("Please enter first name.", "Error");
      return false;
    } else if (!lastName) {
      toastr.error("Please enter your last name.", "Error");
      return false;
    } else if (!validator.isEmail(email)) {
      toastr.error("Please enter valid email address.", "Error");
      return false;
    } else if (!(/^\((\d{3})\)(\s{1})(\d{3})[-](\d{4})$/).test(phone)) {
      toastr.error("Please enter your Phone.", "Error");
      return false;
    } else if(!address){
      toastr.error("Please enter your Address.", "Error");
      return false;
    } else if(!city){
      toastr.error("Please enter your City.", "Error");
      return false;
    } else if(!state){
      toastr.error("Please enter your State.", "Error");
      return false;
    } else if(!(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/).test(zip)){
      toastr.error("Please enter your Zip.", "Error");
      return false;
    } else if(!country){
      toastr.error("Please enter your Country.", "Error");
      return false;
    } else if(!comments){
      toastr.error("Please enter your Comments.", "Error");
      return false;
    }

    let payload = {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      comments
    };

    Users.insert({
      payload,
      createdAt: new Date(), // current time
    },(error, result)=>{
      if(error) return;
      console.log("user information id is >>>>", result);
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
    let {firstName,lastName,email,phone,address,city,state,zip,country,comments } = this.state;
    return (
      <div className="">
        <form>
          <h1>Contact Us</h1>
          <fieldset>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={this.handleInputChange("firstName")}
              name="firstName"
              placeholder="John"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              onChange={this.handleInputChange("lastName")}
              id="lastName"
              value={lastName}
              name="lastName"
              placeholder="Doe"
            />
            <label htmlFor="annualSalary">Email Address</label>
            <input
              type="email"
              onChange={this.handleInputChange("email")}
              id="email"
              value={email}
              name="email"
              placeholder="info@example.com"
            />
            <label htmlFor="superRate">Telephone:</label>
            <input
              type="text"
              onChange={this.handleInputChange("phone")}
              id="telephone"
              name="telephone"
              value={phone}
              placeholder="(000) 000-0000"
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              onChange={this.handleInputChange("address")}
              id="address"
              name="address"
              value={address}
              placeholder="Appartment, Building, Floor, Street"
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              onChange={this.handleInputChange("city")}
              id="city"
              name="city"
              value={city}
              placeholder="Ottawa"
            />
            <label htmlFor="state">State:</label>
            <input
              type="text"
              onChange={this.handleInputChange("state")}
              id="state"
              name="state"
              value={state}
              placeholder="Ontario"
            />
            <label htmlFor="zip">Zip:</label>
            <input
              type="text"
              onChange={this.handleInputChange("zip")}
              id="zip"
              name="zip"
              value={zip}
              placeholder="X1X Y1Y"
            />
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              onChange={this.handleInputChange("country")}
              id="country"
              name="country"
              value={country}
              placeholder="Canada"
            />
            <label htmlFor="comments">Comments:</label>
            <textarea 
              rows="6"
              onChange={this.handleInputChange("comments")}
              id="comments"
              name="comments"
              value={comments}
              placeholder="Write here"
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
