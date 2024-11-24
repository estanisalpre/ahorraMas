//Funciones de botones

export function navButtons(){
    const expensesButton = document.getElementById('expensesButton')
    const homeButton = document.getElementById('homeButton')
    const expensesContainer = document.getElementById('expensesContainer')
    const homeSection = document.getElementById('homeSection')
    const addSection = document.getElementById('addSection')
    const addButton = document.getElementById('addButton')

    if(expensesButton){
        expensesButton.addEventListener('click', () => {
            closeAllSections();
            expensesContainer.style.display = 'flex'
        })
    }

    if(homeButton){
        homeButton.addEventListener('click', () => {
            closeAllSections();
            homeSection.style.display = 'flex'
        })
    }

    if(addButton){
        addButton.addEventListener('click', () => {
            closeAllSections();
            addSection.style.display = 'flex'
        })
    }
}

//Funcion para cerrar todos los sections
function closeAllSections(){
    homeSection.style.display = 'none'
    expensesContainer.style.display = 'none'
    addSection.style.display = 'none'
}