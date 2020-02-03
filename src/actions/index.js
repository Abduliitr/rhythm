import {
  FETCH_USER_FROM_API,
  SET_USER_LOGGED_IN,
  SET_USER_LOGGED_OUT,
  SET_USER_UID
} from "./actionTypes";
import * as firebase from "firebase";

export const fetchUserFromAPI = user => ({
  type: FETCH_USER_FROM_API,
  user
});

export const setUserLoggedOut = () => ({
  type: SET_USER_LOGGED_OUT
});

export const setUser = data => ({
  type: SET_USER_UID,
  data: { uid: data }
});

export const setUserLoggedIn = () => ({
  type: SET_USER_LOGGED_IN
});

export const loginUser = creds => dispatch => {
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(creds.email, creds.password);
  promise.then(data => {
    console.log(data);
    dispatch(setUserLoggedIn());
    setTimeout(() => (window.location.href = `/user/games`), 1000);
  });
  promise.catch(e => console.log(e.message));

  // fetchAPI(
  //   `${API_DOMAIN}api/session/users/login`,
  //   "POST",
  //   JSON.stringify(creds),
  //   (json, status) => {
  //     if (status === 200) {
  //       authenticateUser(json.token);
  //       dispatch(setUserLoggedIn());
  //       cb(true, "");
  //       dispatch(displayNotification("Successfully Logged In :)"));
  //       dispatch(
  //         updateModal({
  //           showLoginModal: false
  //         })
  //       );
  //       if (noRedirect) return;
  //       setTimeout(() => {
  //         window.location.href = `/users/dashboard/cogni_user/${
  //           json.role === "spp" || json.role === "expanse" ? json.role : ""
  //         }`;
  //       }, 200);
  //       return;
  //     } else {
  //       cb(false, json.message);
  //       return;
  //     }
  //   }
  // );
};

export const signUpUser = creds => dispatch => {
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(
    creds.email,
    creds.password
  );
  promise.then(data => {
    dispatch(setUserLoggedIn());
    firebase
      .firestore()
      .collection("rythm-528ea")
      .doc(data.user.uid)
      .set({
        find_me: [],
        match_halves: [],
        match_words: []
      });
    window.location.href = `/user/games`;
    // console.log(data);
    // console.log("hey");
  });
  promise.catch(e => console.log(e.messge));
};

export const fetchUserDetails = uid => dispatch => {
  //   firebase
  //     .auth()
  //     .getUser(uid)
  //     .then(function(userRecord) {
  //       // See the UserRecord reference doc for the contents of userRecord.
  //       console.log("Successfully fetched user data:", userRecord.toJSON());
  //     })
  //     .catch(function(error) {
  //       console.log("Error fetching user data:", error);
  //     });
  //   const firebaseUser = firebase.auth.getCurrentUser();
  //   let uid = firebaseUser.getUid();
  //   uid = firebaseUser.getDisplayName(); //display the entire name
  //   const DataRef = firebase.database
  //     .getInstance()
  //     .getReference()
  //     .child("UserNode")
  //     .child(uid);
  //   console.log(DataRef);
  //   dispatchfetchUserFromAPI(DataRef);
};

export const logOutUser = () => dispatch => {
  firebase.auth().signOut();
  window.location.href = "/";
};
