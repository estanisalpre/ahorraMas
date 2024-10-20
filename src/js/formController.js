//Funcionalidad al formulario de registrar gastos
//Importamos
import { errorModal, successModal } from "./modalController.js"

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

            //Traemos datos del sessionStorage & localstorage
            const getUserEmail = sessionStorage.getItem('activeEmail') 

            //Los usuarios
            const users = JSON.parse(localStorage.getItem('users'))
            const userExists = users.find(user => user.email === getUserEmail) //Verificamos que se encuentre el usuario
            const userIndex = users.findIndex(user => user.email === getUserEmail) //Buscamos el index para tener el control de la lista
            const newSpent = users[userIndex].spentHistory; //Traemos el spentHistory array

            if(userExists){
                //Al array spentHistory le pusheamos los datos obtenidos en "spent"
                newSpent.push(spent)

                //Guardamos en localstorage
                localStorage.setItem('users', JSON.stringify(users))

                //Mensaje de éxito
                const successMessage = "¡Gasto registrado!"
                successModal(successMessage);
            } else {
                const errorMessage = 'Error'
                errorModal(errorMessage);
            }
        })
    }
}
