import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import "./index.css";
import { applyMiddleware } from "redux";
import { blueviolet, grey } from "color-name";
import { logOutUser, loginUser, signUpUser } from "../actions";

class Base extends React.Component {
  state = {
    creds: {
      email: "",
      password: ""
    }
  };
  onChange = e => {
    const creds = { ...this.state.creds };
    creds[e.target.name] = e.target.value;
    this.setState({ creds });
  };

  processLoginForm = e => {
    e.preventDefault();
    this.props.loginUser(this.state.creds);
  };
  processSignUpForm = e => {
    e.preventDefault();
    this.props.signUpUser(this.state.creds);
  };
  render() {
    console.log(this.state.creds);
    return (
      <div
        class="ui three column doubling stackable grid container"
        style={{ minHeight: "88vh", backgroundColor: "#F8F8F8" }}
      >
        <div class="column"></div>
        <div class="column center aligned">
          <form class="ui form" onSubmit={this.processForm}>
            <div class="field">
              <label>Email</label>
              <input
                type="mail"
                onChange={this.onChange}
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="field">
              <label>Password</label>
              <input
                type="password"
                onChange={this.onChange}
                name="password"
                placeholder="Password"
              />
            </div>
            <button
              class="ui button"
              type="submit"
              onClick={this.processLoginForm}
            >
              Login
            </button>
            <button
              class="ui button"
              type="submit"
              onClick={this.processSignUpForm}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div class="column"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, {
  loginUser,
  logOutUser,
  signUpUser
})(Base);
