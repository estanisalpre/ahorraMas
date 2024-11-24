//Importaciones
import { navButtons } from "./buttonFunctions.js";
import { registerNewSpent } from "./formController.js";
import { logOut } from "./logOut.js";
import { showUsername } from "./home.js";
import { dashboard, dashboardNav, dashboardPages } from "./dashboard.js";
import { allFilters } from "./filters.js";
import { homeRedirections } from "./redirections.js";

document.addEventListener('DOMContentLoaded', () => {
    //Redirecciones del home
    homeRedirections();

    //Funcionalidad paginas del dashboard
    dashboardPages();
    dashboardNav();

    //Funcionalidad botones navegación del home.html
    navButtons();

    //Dashboard
    dashboard();
    
    //Filtros
    allFilters();

    //Imprimimos nombre del usuario en el nav
    showUsername();

    //Registrar un nuevo gasto
    registerNewSpent();

    //Cerrar sesión
    logOut();
})