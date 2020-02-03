import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./header.css";
import {
  setUserLoggedIn,
  setUserLoggedOut,
  logOutUser,
  loginUser,
  setUser
} from "../actions";
import * as firebase from "firebase";

class Header extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDxrpxSJyIWVCbwDyg54wnngfKK2r3C_TQ",
      authDomain: "rythm-528ea.firebaseapp.com",
      databaseURL: "https://rythm-528ea.firebaseio.com",
      storageBucket: "rythm-528ea.appspot.com",
      projectId: "rythm-528ea"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
        this.props.setUserLoggedIn();
        this.props.setUser(firebaseUser.uid);
      } else {
        this.props.setUserLoggedOut();
      }
    });
  }

  handleLogout = () => {
    this.props.logOutUser();
  };

  render() {
    console.log(this.props.loggedIn);
    return (
      <div className={"ui secondary  menu {styles.navi}"}>
        <a class="active item">Rhythm - an step towards care for Autism</a>
        {this.props.loggedIn && (
          <React.Fragment>
            <Link to="/user/games" class="item">
              Games
            </Link>
            <Link to="/user/assessment" class="item">
              Assessment
            </Link>
          </React.Fragment>
        )}
        <div class="ui right menu">
          {/* <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div> */}
          {this.props.loggedIn && (
            <a class="ui primary button item" onClick={this.handleLogout}>
              Logout
            </a>
          )}
          {/* <a class="ui item">
            Logout
          </a> */}
        </div>
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
  setUserLoggedIn,
  setUserLoggedOut,
  setUser
})(Header);
