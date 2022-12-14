// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhtoKcNYcbhLYKpAfsH5GgBwl5naVoQWg",
  authDomain: "sitioresguistro.firebaseapp.com",
  projectId: "sitioresguistro",
  storageBucket: "sitioresguistro.appspot.com",
  messagingSenderId: "194133005545",
  appId: "1:194133005545:web:c84fe60707286059b10c78"
};

// Initialize Firebase 
firebasse.initializeApp(firebaseConfig)


// obtener elementos del html
//

const txtemail=document.getElementById("txtcorreo");
const txtpass=document.getElementById("txtpass");
const btnregistro=document.getElementById("btnregistro");
const btnlogin=document.getElementById("btnlogin");
const btnlogout=document.getElementById("btnlogout");

//generar una funtion para reguistrar ; añadir evento reguistro
 btnregistro.addEventListener('click',e=>{

    const email=txtemail.Value;
    const pass=txtpass.Value;
    const  auth=firebasse.auth();

    const resgistro=auth.createUserWithEmailAndPassword(email,pass);
    console.log("registro exitoso");

    resgistro.cacht (e=>console.log(e.message));
});
 

//Añadir evento de ingreso
btnlogin.addEventListener('click',e=>{
    const email=txtemail.Value;
    const pass=txtpass.Value;
    const  auth=firebasse.auth();
    //ingreso
    const ingreso=auth.signInWithEmailAndPassword(email,pass);
    //console.log("ingreso adecuado");
    window.open("pajingreso.html","ingreso","widch=520", "height=400","scrollbars=NO");
    ingreso.cacht (e=>console.log(e.message));
});
 
//cerrar sesion
btnlogout.addEventListener('click',e=>{
    firebaseConfig.auth().signOut()
    console.log("grasias por su visita");
});
 

