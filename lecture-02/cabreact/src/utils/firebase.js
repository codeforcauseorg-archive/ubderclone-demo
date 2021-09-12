import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC0lYipSAtKVnfakVm_vytJ4bmM9GKAJZo",
  authDomain: "unac-uber.firebaseapp.com",
  projectId: "unac-uber",
  storageBucket: "unac-uber.appspot.com",
  messagingSenderId: "724587103317",
  appId: "1:724587103317:web:f03e4efa115549b13280dc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
