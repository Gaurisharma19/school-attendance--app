import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBPHXJdIpwfcgxt8-ffqtZl6I42071F8GM",
  authDomain: "attendance-app-8ed15.firebaseapp.com",
  projectId: "attendance-app-8ed15",
  storageBucket: "attendance-app-8ed15.appspot.com",
  messagingSenderId: "525406678141",
  appId: "1:525406678141:web:e7f41b4a7681331fe61514"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  