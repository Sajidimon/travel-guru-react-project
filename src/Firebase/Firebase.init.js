// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1PkP7y9ntfAtbnGb3ioUh_UOX8ZqkQsc",
    authDomain: "travel-guru-react-project.firebaseapp.com",
    projectId: "travel-guru-react-project",
    storageBucket: "travel-guru-react-project.appspot.com",
    messagingSenderId: "420296736324",
    appId: "1:420296736324:web:2b3b507d61e8e890694611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;