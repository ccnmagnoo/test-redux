import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC0cW1jAuEasnDveg-SSeeN7jsrL58lOv0',
  authDomain: 'mykotlint03messenger.firebaseapp.com',
  databaseURL: 'https://mykotlint03messenger.firebaseio.com',
  projectId: 'mykotlint03messenger',
  storageBucket: 'mykotlint03messenger.appspot.com',
  messagingSenderId: '1052890848674',
  appId: '1:1052890848674:web:1635020c16a59c19eee6fb',
  measurementId: 'G-EVLF92N547',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebase };
