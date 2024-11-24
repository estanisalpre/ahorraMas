import { screenMode } from "./darkLightMode.js";
import { dashboard } from "./dashboard.js";

document.addEventListener('DOMContentLoaded', () => {
    printUsername(); //Imprime nombre de usuario en dashboard y nav
    printProfileImg(); //Imprime imagen de perfil
    burguerIcon(); //Funcionalidad del ícono del menu hamburguesa
    screenMode(); //Modo oscuro o claro
    dashboardNav(); //Funcionalidad del NAV
    logout(); //Destruir la sesión
    dashboard(); //Lee toda la funcionalidad del dashboard.js
})

//Imprime nombre de usuario
function printUsername(){
    const username = document.getElementById('username')
    const navUsername = document.getElementById('navUsername')
    const sessionName = sessionStorage.getItem('activeUser')
    username.textContent = `Hola, ${sessionName} 👋`
    navUsername.textContent = `${sessionName}`
}
//Imprime foto de perfil
function printProfileImg(){
    const profImg = document.getElementById('profImg')
    const imgValue = sessionStorage.getItem('profImg')

    if(imgValue != "0"){
        profImg.src = `/src/assets/img/profiles/profile-${imgValue}.png`
    } else {
        profImg.src = `/src/assets/img/profiles/profile-unknown.png`
    }
}
//Función para el navigation dashboard
function dashboardNav(){
    const toDashboard = document.getElementById('toDashboard')
    const toNewExpense = document.getElementById('toNewExpense')
    const toHistory = document.getElementById('toHistory')
    const toFilter = document.getElementById('toFilter')

    //Botones hacia "agregar gasto"
    const toAddExpensesButton = document.querySelectorAll('.toAddExpenses')

    //Contenedores
    const dashboard = document.getElementById('dashboard')
    const newExpenses = document.getElementById('newExpenses')
    const history = document.getElementById('history')
    const filters = document.getElementById('filters')

    //Traemos el html
    //const body = document.getElementById('body')

    //Contador en 0
    let count = 0;
    liDesign(toDashboard, toNewExpense, toHistory)

    const body = document.body;

    // Detectar si estás en mobile
    const checkResponsive = () => {
        if (window.innerWidth <= 1100) {
            body.classList.add('is-mobile');
        } else {
            body.classList.remove('is-mobile');
        }
    };

    // Ejecutar al cargar la página y al redimensionar
    checkResponsive();
    window.addEventListener('resize', checkResponsive);

    if (toDashboard || toNewExpense || toHistory || toFilter) {
        toDashboard.addEventListener('click', () => {
            if (body.classList.contains('is-mobile')) {
                if(count === 1){
                    body.style.animation = 'none';
                    modalFunctionality(dashboard, newExpenses, history, filters);
                    liDesign(toDashboard, toNewExpense, toHistory);
                    count = count - 1;
                } else if (count === 0) {
                    modalFunctionality(dashboard, newExpenses, history, filters);
                    liDesign(toDashboard, toNewExpense, toHistory);
                }
            } else {
                if (count === 1) {
                    body.style.animation = 'bodyLongWidth 1s ease forwards';
                    modalFunctionality(dashboard, newExpenses, history, filters);
                    liDesign(toDashboard, toNewExpense, toHistory);
                    count = count - 1;
                } else if (count === 0) {
                    modalFunctionality(dashboard, newExpenses, history, filters);
                    liDesign(toDashboard, toNewExpense, toHistory);
                }
            }
        });
    
        toNewExpense.addEventListener('click', () => {
            if (body.classList.contains('is-mobile')) {
                if (count === 0) {
                    body.style.animation = 'none';
                    modalFunctionality(newExpenses, history, dashboard, filters);
                    liDesign(toNewExpense, toHistory, toDashboard);
                    count = count + 1;
                }
            } else {
                if (count === 0) {
                    body.style.animation = 'bodyShortWidth 1s ease forwards';
                    modalFunctionality(newExpenses, history, dashboard, filters);
                    liDesign(toNewExpense, toHistory, toDashboard);
                    count = count + 1;
                }
            }
        });
    
        toHistory.addEventListener('click', () => {
            if (body.classList.contains('is-mobile')) {
                if (count === 1) {
                    body.style.animation = 'none';
                    modalFunctionality(history, newExpenses, dashboard, filters);
                    liDesign(toHistory, toNewExpense, toDashboard);
                    count = count - 1;
                } else if (count === 0) {
                    modalFunctionality(history, newExpenses, dashboard, filters);
                    liDesign(toHistory, toNewExpense, toDashboard);
                }
            } else {
                if (count === 1) {
                    body.style.animation = 'bodyLongWidth 1s ease forwards';
                    modalFunctionality(history, newExpenses, dashboard, filters);
                    liDesign(toHistory, toNewExpense, toDashboard);
                    count = count - 1;
                } else if (count === 0) {
                    modalFunctionality(history, newExpenses, dashboard, filters);
                    liDesign(toHistory, toNewExpense, toDashboard);
                }
            }
        });

        //Boton ir a filtros
        toFilter.addEventListener('click', () => {
            dashboard.style.display = 'none'
            filters.style.display = 'flex'
        })

        //Ir a registrar nuevo gasto
        toAddExpensesButton.forEach(function(button) {
            button.addEventListener('click', () => {
                if(body.classList.contains('is-mobile')){
                    if(count === 0){
                        body.style.animation = 'none'
                        modalFunctionality(newExpenses,history,dashboard,filters);
                        liDesign(toNewExpense, toHistory, toDashboard)
                        count = count + 1;
                    }
                } else {
                    body.style.animation = 'bodyShortWidth 1s ease forwards'
                    modalFunctionality(newExpenses,history,dashboard,filters);
                    liDesign(toNewExpense, toHistory, toDashboard)
                    count = count + 1;
                }
            })
        })
    }   
}

    //Funcionalidad de los modales
    function modalFunctionality(toOpen, toClose1, toClose2, toClose3){
        toOpen.style.display = 'flex'
        toClose1.style.display = 'none'
        toClose2.style.display = 'none'
        toClose3.style.display = 'none'
    }
    //Al presionar en un boton del NAV
    function liDesign(turnOn,turnOff1,turnOff2){
        //Prendemos
        turnOn.style.backgroundImage = 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
        turnOn.style.borderTopLeftRadius = '50px'
        turnOn.style.borderBottomLeftRadius = '50px'
        turnOn.style.color = '#272727'

        //Apagamos
        liTurnOff(turnOff1)
        liTurnOff(turnOff2)
    }
    function liTurnOff(li){
        li.style.backgroundImage = 'none'
        li.style.borderTopLeftRadius = '0px'
        li.style.borderBottomLeftRadius = '0px'
        li.style.color = '#e3e3e3'
    }


//Burguer menu
function burguerIcon(){
    const burguerIcon = document.getElementById('burguerIcon')
    const closeBurguer = document.getElementById('closeBurguer')
    const nav = document.getElementById('nav')

    if(burguerIcon){
        burguerIcon.addEventListener('click', () => {
            burguerIcon.style.display = 'none'
            closeBurguer.style.display = 'block'
            nav.classList.add('burguerMenu')
        })
    }
    if(closeBurguer){
        closeBurguer.addEventListener('click', () => {
            burguerIcon.style.display = 'block'
            closeBurguer.style.display = 'none'
            nav.classList.remove('burguerMenu')
        })
    }
  
}

//Logout
function logout(){
    const logoutButton = document.getElementById('logoutButton')

    if(logoutButton){
        logoutButton.addEventListener('click', () => {
            sessionStorage.removeItem('activeUser')

            if(!sessionStorage.getItem('activeUser')){
                location.href = '/index.html'
            } else {
                console.log('No es posible salir')
            }
        })
    }
}