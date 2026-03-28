import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA2ix-FcA_sGWHo0F696Otg5Ptz-UFZCxc",
    authDomain: "ventas-app-pro-b8cb7.firebaseapp.com",
    projectId: "ventas-app-pro-b8cb7",
    storageBucket: "ventas-app-pro-b8cb7.firebasestorage.app",
    messagingSenderId: "396394419894",
    appId: "1:396394419894:web:d7d4cc5b9be64cb938b817"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "index.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "ventas.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};