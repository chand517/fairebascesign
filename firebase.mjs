
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD682bP1pr7GVIsYzyaLMfhyAf66VA0f4w",
    authDomain: "rizwan-af8cb.firebaseapp.com",
    projectId: "rizwan-af8cb",
    storageBucket: "rizwan-af8cb.appspot.com",
    messagingSenderId: "891068650937",
    appId: "1:891068650937:web:91ce2b53bf330efbb6d268"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);