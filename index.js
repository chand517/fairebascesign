import { auth } from "./firebase.mjs";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


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
    console.log('Error:', errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
    // ..
  });
  var signin= document.getElementById('btn')
signin.addEventListener('click',()=>
{
    console.log('chal gya');
    var userEmail = document.getElementById('email').value
    var userPass = document.getElementById('pass').value
    console.log(userEmail);
    console.log(userPass);
    signInWithEmailAndPassword(auth, userEmail, userPass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert('login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
})
})


var signin= document.getElementById('btn')
signin.addEventListener('click',()=>
{
    console.log('chal gya');
    var userEmail = document.getElementById('email').value
    var userPass = document.getElementById('pass').value
    console.log(userEmail);
    console.log(userPass);
    signInWithEmailAndPassword(auth, userEmail, userPass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert('login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
})