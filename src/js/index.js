//Funcionalidades generales
//Importamos
import { indexRedirections } from "./redirections.js";
import { registerUser } from "./register.js";
import { login } from "./login.js";
import { errorModalLogReg, successModalLogReg } from "./modalController.js";
import { helpSection } from "./helpSection.js";


document.addEventListener('DOMContentLoaded', () => {
    //Modales de error y éxito
    errorModalLogReg();
    successModalLogReg();

    //Redirecciones del index
    indexRedirections();

    //Registrar usuarios
    registerUser();

    //Loguearse
    login();

    //Sección de ayuda
    helpSection();
})