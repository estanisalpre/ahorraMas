//Importaciones
import { navButtons } from "./buttonFunctions.js";
import { registerNewSpent } from "./formController.js";

document.addEventListener('DOMContentLoaded', () => {
    //Funcionalidad botones navegación del home.html
    navButtons();

    //Registrar un nuevo gasto
    registerNewSpent();
})