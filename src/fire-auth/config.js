
import firebase from 'firebase'
  import 'firebase/auth'

  // const config = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_DATABASE_URL,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // };
  const firebaseConfig = {
    apiKey: "AIzaSyBmCJW48clNbLACfN4Mirp02j7HHVzsPBY",
    authDomain: "reactfireapp-2019.firebaseapp.com",
    databaseURL: "https://reactfireapp-2019.firebaseio.com",
    projectId: "reactfireapp-2019",
    storageBucket: "reactfireapp-2019.appspot.com",
    messagingSenderId: "1078299059793",
    appId: "1:1078299059793:web:d1832bb52215f758"

  };

  // const config ={...}
  
  class Firebase {
    constructor() {
      firebase.initializeApp(firebaseConfig);
      this.auth = firebase.auth();
    }


  // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  } 
  
  export default Firebase;


