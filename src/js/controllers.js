//Importaciones
//import {gastos} from "./APIsimulator.js"
//import { registerNewSpent } from "./formController.js";

export function showSpentList(){
    //Llamamos al ul
    const ulList = document.getElementById('expensesList')
    ulList.innerHTML = ""; //Limpiamos el contenido

    //Creamos un key en localstorage, si es que no hay
    /* if (!localStorage.getItem('spents')) {
        localStorage.setItem('spents', JSON.stringify(Spents));
    } */

    //forEach lo que hace es recorrer los datos uno por uno
    /* gastos.forEach(function(gasto){
        //Creamos elementos
        let newLi = document.createElement('li')
        newLi.classList.add('list') //Agregamos clase para CSS
        let divImg = document.createElement('div')
        let images = document.createElement('img')
        let spanDescription = document.createElement('span')
        let spanValue = document.createElement('span')

        //Agregamos valores a los span
        spanDescription.textContent = gasto.descripcion
        spanValue.textContent = "$ " + gasto.valor

        //Agregamos el contenido
        ulList.appendChild(newLi)
        newLi.appendChild(divImg)
        divImg.appendChild(images)
        newLi.appendChild(spanDescription)
        newLi.appendChild(spanValue)

        if(gasto.categoria=="transporte"){
            images.src="/src/assets/img/icons/transport.png"
        }else if(gasto.categoria=="alimentos"){
            images.src="/src/assets/img/icons/fastFood.png"
        }else if(gasto.categoria=="entretenimiento"){
            images.src="/src/assets/img/icons/entertainment.png"
        }
    }) */
}