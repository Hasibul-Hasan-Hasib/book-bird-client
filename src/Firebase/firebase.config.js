const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

    // apiKey: "AIzaSyA9AfaJkrSIep5CCG6r57pvkTxWkH43tfY",
    // authDomain: "book-birds.firebaseapp.com",
    // projectId: "book-birds",
    // storageBucket: "book-birds.appspot.com",
    // messagingSenderId: "466172711979",
    // appId: "1:466172711979:web:b873787b95b6dd73d6866e",
    // measurementId: "G-2DS6ZJGQ4W"
}
export default firebaseConfig;