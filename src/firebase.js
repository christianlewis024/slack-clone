import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCoTP9TrHwC4NMtjM5tyhc_6IqmCEpRyS0",
    authDomain: "slack-clone-2aeaf.firebaseapp.com",
    databaseURL: "https://slack-clone-2aeaf.firebaseio.com",
    projectId: "slack-clone-2aeaf",
    storageBucket: "slack-clone-2aeaf.appspot.com",
    messagingSenderId: "25064881328",
    appId: "1:25064881328:web:5a894e04fe08d51e070f75",
    measurementId: "G-VG2DDQ5ZNL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider 
  export {auth, provider}
  export default db;
