// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB8LhpDCAGl85NPAV94LTEpkFHwW9E35lc",

  authDomain: "pagina-base-datos.firebaseapp.com",

  projectId: "pagina-base-datos",

  storageBucket: "pagina-base-datos.firebasestorage.app",

  messagingSenderId: "874294350411",

  appId: "1:874294350411:web:0fdf960bd45c2141a333ce",

  measurementId: "G-T518KX7GQQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

console.log("Firebase configurado correctamente");

const db = getFirestore(app);






async function agregarDatos() {
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: "Avilio",
        edad: 25,
        email: "avilio@example.com"
      });
      console.log("Documento escrito con ID:", docRef.id);
    } catch (e) {
      console.error("Error al agregar el documento:", e);
    }
  }
  
  agregarDatos();
  


  async function leerDatos() {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
      console.log(`ID: ${doc.id} => Datos:`, doc.data());
    });
  }
  
  leerDatos();
  