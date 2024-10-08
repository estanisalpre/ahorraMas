//Importaciones
import { gastos } from "./APIsimulator.js"

//Capturar informacion de un formulario con JS
const descriptionInput = document.getElementById('description')
const dateInput = document.getElementById('date')
const valueInput = document.getElementById('value')
const categoryInput = document.getElementById('category')
const registerButton = document.getElementById('registerButton')

if(registerButton){
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();

        let gasto={
            id: 5,
            categoria: categoryInput.value,
            fecha: dateInput.value,
            descripcion: descriptionInput.value,
            valor: valueInput.value
        }

        
    })
}