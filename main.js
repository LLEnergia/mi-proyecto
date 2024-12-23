// Importar Firebase y Firestore
import { initializeApp } from "./node_modules/firebase/app/dist/index.esm.js";
import { getFirestore, collection, addDoc, getDocs } from "./node_modules/firebase/firestore/dist/index.esm.js";


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB8LhpDCAGl85NPAV94LTEpkFHwW9E35lc",
    authDomain: "pagina-base-datos.firebaseapp.com",
    projectId: "pagina-base-datos",
    storageBucket: "pagina-base-datos.firebasestorage.app",
    messagingSenderId: "874294350411",
    appId: "1:874294350411:web:0fdf960bd45c2141a333ce",
    measurementId: "G-T518KX7GQQ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencias HTML
const usuarioForm = document.getElementById("usuarioForm");
const listaUsuarios = document.getElementById("listaUsuarios");

// Función para agregar un usuario
usuarioForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;

    try {
        await addDoc(collection(db, "usuarios"), { nombre, edad: Number(edad), email });
        alert("Usuario agregado correctamente");
        usuarioForm.reset();
        mostrarUsuarios(); // Actualizar la lista de usuarios
    } catch (error) {
        console.error("Error al agregar usuario:", error);
    }
});

// Función para mostrar los usuarios
import { getDocs, collection } from "./node_modules/firebase/firestore/dist/index.esm.js";

async function mostrarUsuarios() {
  try {
    const listaUsuarios = document.getElementById("lista-usuarios"); // Asegúrate de que este ID exista en tu HTML
    listaUsuarios.innerHTML = ""; // Limpiar la lista antes de agregar los datos
    
    const querySnapshot = await getDocs(collection(db, "usuarios")); // Leer documentos
    querySnapshot.forEach((doc) => {
      // Crear un elemento <li> para cada usuario
      const li = document.createElement("li");
      li.textContent = `${doc.data().nombre} (Edad: ${doc.data().edad}, Email: ${doc.data().email})`;
      listaUsuarios.appendChild(li);
    });
    
    console.log("Datos cargados correctamente.");
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
}

// Llamar la función al cargar la página
mostrarUsuarios();

