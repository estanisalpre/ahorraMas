//Funcionalidad del dashboard
export function dashboard(){
    //Traemos del sessionStorage el email
    const getEmail = sessionStorage.getItem('activeEmail')

    //Traemos el localstorage y buscamos el index que tenga el correo
    const users = JSON.parse(localStorage.getItem('users')) || []
    const userIndex = users.findIndex(user => user.email === getEmail)

    //Llamamos al array dentro de usuarios (spentHistory)
    const spentHistory = users[userIndex].spentHistory

    //Llamamos a función de suma de gastos
    totalExpenses(spentHistory);

    //Ciclo for para identificar y sumar cada categoria
    totalCategory(spentHistory);
}

//Sumar total de gastos
function totalExpenses(array){
    //Creamos un acumulador
    let totalAcum = 0;

    //Ciclo para que recorra el array y acumule los valores
    for (let i = 0; i < array.length; i++){
        //Captura el "value" de cada index
        const indexValue = parseInt(array[i].value);

        //Lo acumula
        totalAcum = totalAcum + indexValue;
    }

    //Llamamos del dom la tarjeta a imprimir
    const totalExpenses = document.getElementById('totalExpenses')
    const addTotal = document.getElementById('addTotal')

    if(totalAcum > 0){
        totalExpenses.textContent = `$ ${totalAcum}`;
        addTotal.style.display = 'none'
    } else {
        totalExpenses.textContent = `Sin gastos aún`;
        addTotal.style.display = 'flex'
    }
    
}

//Suma total de categorias
function totalCategory(array){
    //Llamamos elementos de HTML
    const transportSpan = document.getElementById('transport')
    const foodSpan = document.getElementById('food')
    const entertainmentSpan = document.getElementById('entertainment')

    //Filtramos
    const transportFilter = array.filter(category => category.category === "transporte")
    const foodFilter = array.filter(category => category.category === "alimentos")
    const entertainmentFilter = array.filter(category => category.category === "entretenimiento")

    //Llamamos a la funcion del ciclo
    const totalTransport = categoryCicle(transportFilter);
    const totalFood = categoryCicle(foodFilter);
    const totalEntertainment = categoryCicle(entertainmentFilter);

    //Llamamos botones de ir a nuevo gasto por categoria
    const addTransport = document.getElementById('addTransport')
    const addFood = document.getElementById('addFood')
    const addEntertainment = document.getElementById('addEntertainment')
    //Imprimimos en el dom
    if(totalTransport > 0){
        transportSpan.textContent = `$ ${totalTransport}`
        addTransport.style.display = 'none'
    } else {
        transportSpan.textContent = `Sin gastos aún`
        addTransport.style.display = 'flex'
    }
    if(totalFood > 0){
        foodSpan.textContent = `$ ${totalFood}`
        addFood.style.display = 'none'
    } else {
        foodSpan.textContent = `Sin gastos aún`
        addFood.style.display = 'flex'
    }
    if(totalEntertainment > 0){
        entertainmentSpan.textContent = `$ ${totalEntertainment}`
        addEntertainment.style.display = 'none'
    } else {
        entertainmentSpan.textContent = `Sin gastos aún`
        addEntertainment.style.display = 'flex'
    }
}

//Funcion ciclo for para suma de categorias
function categoryCicle(categoryName){
    //Iniciamos acumulador
    let categoryAcum = 0;

    //Ciclo para leer los valores de cada categoria
    for (let i = 0; i < categoryName.length; i++){
        //Captura el "value" de cada index
        const transportValue = parseInt(categoryName[i].value);

        //Lo acumula
        categoryAcum = categoryAcum + transportValue;
    }

    return categoryAcum;
}