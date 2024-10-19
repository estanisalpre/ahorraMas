//Importaciones
import { spents } from "./APIsimulator.js"
//import { showSpentList } from "./controllers.js"
//import { saveLocalstorage } from "./functions.js";

export function registerNewSpent(){
   //Boton de registrar gasto
    const registerButton = document.getElementById('registerButton') //Botón para la accion de registrar el gasto

    //Capturar informacion de un formulario con JS
    const descriptionInput = document.getElementById('description')
    const dateInput = document.getElementById('date')
    const valueInput = document.getElementById('value')
    const categoryInput = document.getElementById('category')

    //Evento al clickear registrar gasto
    if(registerButton){
        registerButton.addEventListener('click', (e) => {
            e.preventDefault(); //Evita que se actualice

            //Guardamos valores en un array
            let spent = {
                category: categoryInput.value,
                value: valueInput.value,
                date: dateInput.value,
                description: descriptionInput.value
            }

            //Traemos el localstorage
            const getSpentStorage = JSON.parse(localStorage.getItem('spents'))
            
           

        })
    }
}
