// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
//we copied this from firebase sdk snippet (config) to connect our database to firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAFusHEBP3i8o2YsviS-d-YMTXmlLbdq8Y",
  authDomain: "whatsapp-clone-gkrosx.firebaseapp.com",
  projectId: "whatsapp-clone-gkrosx",
  storageBucket: "whatsapp-clone-gkrosx.appspot.com",
  messagingSenderId: "296800268250",
  appId: "1:296800268250:web:5f349e0fc4f35c01691ae3",
  measurementId: "G-K4QG9Q7XWQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;