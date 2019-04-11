import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAtzt6jFo-N6EgpcmL-vjA79udUTXsmRAw",
    authDomain: "vue-chat-2a92b.firebaseapp.com",
    databaseURL: "https://vue-chat-2a92b.firebaseio.com",
    projectId: "vue-chat-2a92b",
    storageBucket: "",
    messagingSenderId: "545597211151"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
    timestampsInSnapshots: true
});
export default firebaseApp.firestore();