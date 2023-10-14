import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFJ6Rdy_PDcoKeVT_VKqNjErQbM2tX0s",
  authDomain: "be-bus.firebaseapp.com",
  projectId: "be-bus",
  storageBucket: "be-bus.appspot.com",
  messagingSenderId: "876225459801",
  appId: "1:876225459801:web:36764c5aff799f16b8e348"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };