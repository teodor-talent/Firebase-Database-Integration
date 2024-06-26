import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAs8R3gyKI9pnUyls5jwruEPGlUoTC1RJE",
  authDomain: "fir-bookshelf-8d68a.firebaseapp.com",
  databaseURL: "https://fir-bookshelf-8d68a.firebaseio.com",
  projectId: "fir-bookshelf-8d68a",
  storageBucket: "fir-bookshelf-8d68a.appspot.com",
  messagingSenderId: "548100999451"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;
