import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);    
}