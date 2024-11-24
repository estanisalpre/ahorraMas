//Funcionalidad de leer e imprimir el historial de gastos
import { allFilters } from "./filters.js";
import { registerNewSpent } from "./formController.js";

document.addEventListener('DOMContentLoaded', () => {
    showSpentList(); //Imprimimos en historial
    registerNewSpent(); //Para registrar un nuevo gasto
    allFilters(); //Todos los filtros
})

//Funcion de mostrar en lista en historial
export function showSpentList(){
    //Span sobre si hay movimientos
    const spentSpan = document.getElementById('spentSpan')

    //Traemos del localstorage el array de gastos (spentHistory)
    const users = JSON.parse(localStorage.getItem('users'))

    //Traemos el sessionStorage y comprobamos si el usuario existe
    const getUserEmail = sessionStorage.getItem('activeEmail') 

    //Encontramos el index
    const userIndex = users.findIndex(user => user.email === getUserEmail)

    if(userIndex !== -1){
        //Traemos el array con el historial
        const mySpentHistory = users[userIndex].spentHistory || [];

        if(mySpentHistory.length > 1){
            spentSpan.style.display = 'none'

            mySpentHistory.shift();

            //Traemos donde imprimiremos los gastos
            const ulList = document.getElementById('expensesList')

            mySpentHistory.forEach(function(spent){
                //Creamos los elementos que aplicaremos
                let newLi = document.createElement('li')
                let divImg = document.createElement('div')
                let images = document.createElement('img')
                let spanDate = document.createElement('span')
                let spanDescription = document.createElement('span')
                let spanValue = document.createElement('span')
                
                //Agregamos clase para CSS
                newLi.classList.add('list')

                const screenMode = sessionStorage.getItem('screenMode')

                if(screenMode === "1"){
                    spanDate.classList.add('span')
                    spanDescription.classList.add('span')
                    spanValue.classList.add('span')

                    //Agregamos valores a los span
                    spanDate.textContent = spent.date;
                    spanDescription.textContent = spent.description;
                    spanValue.textContent = "$ " + spent.value;

                    //Agregamos segun sea el ícono
                    if(spent.category=="transporte"){
                        images.src="/src/assets/img/icons/transport.png"
                    }else if(spent.category=="alimentos"){
                        images.src="/src/assets/img/icons/fastFood.png"
                    }else if(spent.category=="entretenimiento"){
                        images.src="/src/assets/img/icons/entertainment.png"
                    }

                    //Agregamos el contenido
                    ulList.appendChild(newLi)
                    newLi.appendChild(divImg)
                    divImg.appendChild(images)
                    newLi.appendChild(spanDate)
                    newLi.appendChild(spanDescription)
                    newLi.appendChild(spanValue)
                } else {
                    spanDate.classList.remove('span')
                    spanDescription.classList.remove('span')
                    spanValue.classList.remove('span')

                    //Agregamos valores a los span
                    spanDate.textContent = spent.date;
                    spanDescription.textContent = spent.description;
                    spanValue.textContent = "$ " + spent.value;

                    //Agregamos segun sea el ícono
                    if(spent.category=="transporte"){
                        images.src="/src/assets/img/icons/transport.png"
                    }else if(spent.category=="alimentos"){
                        images.src="/src/assets/img/icons/fastFood.png"
                    }else if(spent.category=="entretenimiento"){
                        images.src="/src/assets/img/icons/entertainment.png"
                    }

                    //Agregamos el contenido
                    ulList.appendChild(newLi)
                    newLi.appendChild(divImg)
                    divImg.appendChild(images)
                    newLi.appendChild(spanDate)
                    newLi.appendChild(spanDescription)
                    newLi.appendChild(spanValue)
                }
            })  
        } else {
            spentSpan.style.display = 'block'
        }
    }
}