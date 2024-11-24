//Funcionalidad de filtros de gastos
//Importamos
import { errorModal, successModal } from "./modalController.js"

export function allFilters(){
     //Traemos del sessionStorage el email
     const getEmail = sessionStorage.getItem('activeEmail')

     //Traemos el localstorage y buscamos el index que tenga el correo
     const users = JSON.parse(localStorage.getItem('users'))
     const userIndex = users.findIndex(user => user.email === getEmail)
 
     //Llamamos al array dentro de usuarios (spentHistory)
     const spentHistory = users[userIndex].spentHistory

     //Filtro de fechas
     dateFilter(spentHistory);

     //Entre fechas filtro
     dateBetween(spentHistory);
}

//Filtro por fechas
function dateFilter(array){
    //Traemos los elementos del html
    const dateInput = document.getElementById('dateHome')
    const dateSpan = document.getElementById('dateSpan')
    const dateFilterButton = document.getElementById('dateFilterButton')

    if(dateFilterButton){
        dateFilterButton.addEventListener('click', () => {
            const dateValue = dateInput.value
            const dateToGet = array.filter(date => date.date === dateValue);

            //Verificamos que la fecha en el filtro exista
            if(dateToGet.length > 0){
                //Acumulador
                let dateAcum = 0;

                //Funcion cilo for para suma de fecha y filtro
                for (let i = 0; i < dateToGet.length; i++){
                    //Capturamos el valor de cada index
                    const eachDateValue = parseInt(dateToGet[i].value)

                    //Lo acumula
                    dateAcum = dateAcum + eachDateValue;
                }

                //Imprimimos en el DOM
                dateSpan.style.display = 'flex'
                dateSpan.textContent = `Ese día gastaste $ ${dateAcum}`
            } else {
                const message = 'Fecha sin datos'
                errorModal(message)
            }            
        })
    }
}

//Entre fechas filtro
function dateBetween(array){
    //Traemos los elementos del html
    const initialInput = document.getElementById('initialDate')
    const finalInput = document.getElementById('finalDate')
    const betweenDateSpan = document.getElementById('betweenDateSpan')
    const betweenDateFilterButton = document.getElementById('betweenDateFilterButton')

    if(betweenDateFilterButton){
        betweenDateFilterButton.addEventListener('click', () => {
            const initialDateValue = initialInput.value //Valor fecha inicial
            const finalDateValue = finalInput.value //Valor fecha final
            const dateToGet = array.filter(date => date.date >= initialDateValue && date.date <= finalDateValue);

            //Verificamos que la fecha en el filtro exista
            if(dateToGet.length > 0){
                //Acumulador
                let dateAcum = 0;

                //Funcion cilo for para suma de fecha y filtro
                for (let i = 0; i < dateToGet.length; i++){
                    //Capturamos el valor de cada index
                    const eachDateValue = parseInt(dateToGet[i].value)

                    //Lo acumula
                    dateAcum = dateAcum + eachDateValue;
                }

                //Imprimimos en el DOM
                betweenDateSpan.style.display = 'flex'
                betweenDateSpan.textContent = `Entre esas fechas, gastaste $ ${dateAcum}`
            } else {
                const message = 'Fecha sin datos'
                errorModal(message)
            }            
        })
    }
}