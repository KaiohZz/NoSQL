import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDyr4UHKiBSg_zPhV1Gqts7NEntCfB1QJg",
    authDomain: "nosql-1c2cd.firebaseapp.com",
     projectId: "nosql-1c2cd",
    storageBucket: "nosql-1c2cd.appspot.com",
     messagingSenderId: "180075886396",
     appId: "1:180075886396:web:902cc1cdaf76bd0f2e9039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txt.password.value;

    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
}

const createAccount = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txt.password.value;

    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
}

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if(user) {
            console.log(user);
            showApp();
            showLoginState();

            hideLoginError();
        } else {
            showLoginForm();
            lblAuthState.innerHTML = "Você não está logado";
        }
    })
}

const logout = async () => {
    await signOut(auth);
}