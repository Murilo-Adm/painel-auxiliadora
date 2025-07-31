import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIbntaWOBU6gQ9klg3kQ8rHP1YHb8bbj0",
  authDomain: "auxiliadoragdc-32d82.firebaseapp.com",
  projectId: "auxiliadoragdc-32d82",
  storageBucket: "auxiliadoragdc-32d82.appspot.com",
  messagingSenderId: "903525694044",
  appId: "1:903525694044:web:e21efa30e5b4be5fe0c499"
  // resto da sua configuração
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("mensagem").innerText = "Login realizado!";
    })
    .catch((err) => {
      document.getElementById("mensagem").innerText = "Erro: " + err.message;
    });
});