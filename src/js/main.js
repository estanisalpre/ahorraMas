//Importaciones
import { navButtons } from "./buttonFunctions.js";
import { showSpentList } from "./controllers.js";
import { registerNewSpent } from "./formController.js";
import { allRedirections} from "./redirections.js";

document.addEventListener('DOMContentLoaded', () => {
    //Redireccionamientos
    allRedirections();

    navButtons();
    showSpentList();
    registerNewSpent();
    
})