//Funcionalidad de leer e imprimir el historial de gastos

export function showSpentList(){
    //Span sobre si hay movimientos
    const spentSpan = document.getElementById('spentSpan')

    //Traemos del localstorage el array de gastos (spentHistory)
    const users = JSON.parse(localStorage.getItem('users'))

    //Traemos el sessionStorage y comprobamos si el usuario existe
    const getUserEmail = sessionStorage.getItem('activeEmail') 
    //const userExists = users.some(user => user.email === getUserEmail)

    //Encontramos el index
    const userIndex = users.findIndex(user => user.email === getUserEmail)

    if(userIndex !== -1){
        spentSpan.style.display = 'none'

        //Traemos el array con el historial
        const mySpentHistory = users[userIndex].spentHistory || [];

        //Traemos donde imprimiremos los gastos
        const ulList = document.getElementById('expensesList')
        //ulList.innerHTML = "";

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
        })  
    } else {
        spentSpan.style.display = 'block'
    }
}

//Llamamos a la función
showSpentList();