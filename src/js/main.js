//Importaciones
import { navButton } from "./buttonFunctions.js";
import { showSpentList } from "./controllers.js";
import { registerNewSpent } from "./formController.js";

document.addEventListener('DOMContentLoaded', () => {
    navButton();
    showSpentList();
    registerNewSpent();
})