//Todas las redirecciones las realizamos aquí. Ej: Botones, links, redes, entre otros.

export function indexRedirections(){
    //Nav
    const toLogin = document.getElementById('toLogin')
    const toRegister = document.getElementById('toRegister')
    const toIndex = document.getElementById('toIndex')
    //Seccion de sobre Ahorra+
    const toAboutUsSection = document.getElementById('aboutUsLink')
    const saberMasButton = document.getElementById('saberMasButton')
    const aboutUsButton = document.getElementById('aboutUsButton')
    //Seccion de contacto
    const contactLink = document.getElementById('contactLink')
    //Seccion de ayuda
    const helpButton = document.getElementById('helpLink')
    const toContactButton = document.getElementById('toContactButton')

    //Index
    if(toIndex){
        toIndex.addEventListener('click', () => {
            location.href = '/index.html'
        })
    }
    //Login
    if(toLogin){
        toLogin.addEventListener('click', () => {
            location.href = '/src/views/login.html'
        })
    }

    //Register
    if(toRegister){
        toRegister.addEventListener('click', () => {
            location.href = '/src/views/register.html'
        })
    }

    //AboutUs Section
    if(toAboutUsSection){
        toAboutUsSection.addEventListener('click', () => {
            location.href = '/index.html#aboutUs'
        })
    }
    if(saberMasButton){
        saberMasButton.addEventListener('click', () => {
            location.href = '/index.html#aboutUs'
        })
    }
    if(aboutUsButton){
        aboutUsButton.addEventListener('click', () => {
            location.href = '/src/views/register.html'
        })
    }

    //Contact Section
    if(contactLink){
        contactLink.addEventListener('click', () => {
            location.href = '/index.html#contactSection'
        })
    }

    //Help Section
    if(helpButton){
        helpButton.addEventListener('click', () => {
            location.href = '/index.html#helpSection'
        })
    }
    if(toContactButton){
        toContactButton.addEventListener('click', () => {
            location.href = '/index.html#contactSection'
        })
    }
}

export function homeRedirections(){
    const detailsButton = document.getElementById('detailsButton')
    const foodDetailButton = document.getElementById('foodDetailButton')
    const entertainmentDetailButton = document.getElementById('entertainmentDetailButton')
    //Ir a detalles desde el inicio
    if(detailsButton || foodDetailButton || entertainmentDetailButton){
        detailsButton.addEventListener('click', () => {
            goToExpenses();
        })
        foodDetailButton.addEventListener('click', () => {
            goToExpenses();
        })
        entertainmentDetailButton.addEventListener('click', () => {
            goToExpenses();
        }) 
    }
}
//Función para cerrar las otras secciones
function goToExpenses(){
    const homeSection = document.getElementById('homeSection')
    const addSection = document.getElementById('addSection')

    homeSection.style.display = 'none'
    addSection.style.display = 'none'

    //Abrimos el contenedor de historial
    const expensesSection = document.getElementById('expensesContainer')
    expensesSection.style.display = 'flex'
}
