//Importaciones
import { navButtons } from "./buttonFunctions.js";
import { showSpentList } from "./controllers.js";
import { registerNewSpent } from "./formController.js";
import { allRedirections} from "./redirections.js";
import { registerUser } from "./register.js";

document.addEventListener('DOMContentLoaded', () => {
    //Redireccionamientos
    allRedirections();

    navButtons();
    showSpentList();
    registerNewSpent();

    //Registrar usuarios
    registerUser();
})