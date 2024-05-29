
import { auth } from "./firebase.mjs";
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


var signup= document.getElementById('btn')
signup.addEventListener('click',()=>
{
    console.log('chal gya');
    var userEmail = document.getElementById('email').value
    var userPass = document.getElementById('pass').value
    console.log(userEmail);
    console.log(userPass);
    createUserWithEmailAndPassword(auth, 'userEmail', 'userPass')
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    window.location.href ='index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error:', errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
    // ..
  });
})