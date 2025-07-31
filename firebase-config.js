import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <- Importa a autenticação

const firebaseConfig = {
  apiKey: "AIzaSyDIbntaWOBU6gQ9klg3kQ8rHP1YHb8bbj0",
  authDomain: "auxiliadoragdc-32d82.firebaseapp.com",
  projectId: "auxiliadoragdc-32d82",
  storageBucket: "auxiliadoragdc-32d82.firebasestorage.app",
  messagingSenderId: "903525694044",
  appId: "1:903525694044:web:e21efa30e5b4be5fe0c499"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // <- Isso prepara a autenticação

export { auth };