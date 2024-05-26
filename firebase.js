import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhGcJbuuaGx1VSLABt2UV_EeJt5B12KpY",
  authDomain: "netflix-clone-43010.firebaseapp.com",
  projectId: "netflix-clone-43010",
  storageBucket: "netflix-clone-43010.appspot.com",
  messagingSenderId: "253425518374",
  appId: "1:253425518374:web:3c9485ac0dec5d139563e7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };