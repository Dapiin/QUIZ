let firebaseConfig = {
    apiKey: "AIzaSyCO2a8ddpkdnNToyetjblPQtM6_gyzw104",
    authDomain: "film-blogging.firebaseapp.com",
    projectId: "film-blogging",
    storageBucket: "film-blogging.appspot.com",
    messagingSenderId: "650126788053",
    appId: "1:650126788053:web:30eebd93ad54dd998c695c"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();