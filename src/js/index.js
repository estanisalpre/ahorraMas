//Funcionalidades generales
//Importamos
import { indexRedirections } from "./redirections.js";
import { registerUser } from "./register.js";
import { login } from "./login.js";
import { logOut } from "./logOut.js";


document.addEventListener('DOMContentLoaded', () => {
    //Redirecciones del index
    indexRedirections();

    //Registrar usuarios
    registerUser();

    //Loguearse
    login();

    //Cerrar sesión
    logOut();
})