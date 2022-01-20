import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCj3o-KbTtU7JWc1IZ7Bhw8ac_pxgcTL2M",
  authDomain: "complaint-forum-35f62.firebaseapp.com",
  projectId: "complaint-forum-35f62",
  storageBucket: "complaint-forum-35f62.appspot.com",
  messagingSenderId: "310155519260",
  appId: "1:310155519260:web:8d7146a53156a7311106d9"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

