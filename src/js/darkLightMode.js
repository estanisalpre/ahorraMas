//Funcionalidad del Dark & Light Mode
export function screenMode(){
    watchingMode(); //Lee el modo guardado de pantalla (oscura o clara)
    chooseMode(); //Elije el modo
}

//Dark mode
function chooseMode(){
    //Botones y diseño en general
    const darkButton = document.getElementById('darkMode')
    const lightButton = document.getElementById('lightMode')
    
    //Modo dark
    if(darkButton){
        darkButton.addEventListener('click', () => {
            sessionStorage.setItem('screenMode', "1");
            sectionSpanInputDark();
        })
    }

    //Modo light
    if(lightButton){
        lightButton.addEventListener('click', () => {
            sessionStorage.setItem('screenMode', "0");
            sectionSpanInputLight();
        })
    }
}

//Funcion de lectura del modo de pantalla
function watchingMode(){
    const modeValue = sessionStorage.getItem('screenMode')

    if (modeValue === "1"){
        sectionSpanInputDark();
    } else {
        sectionSpanInputLight();
    }
}

//Traemos elementos del DOM
const html = document.getElementById('html')
const body = document.getElementById('body')
const usernameColor = document.getElementById('username')
const sections = document.querySelectorAll('.section')
const cards = document.querySelectorAll('.card')
const spans = document.querySelectorAll('.span')
const inputs = document.querySelectorAll('.input')

//Dark
function sectionSpanInputDark(){
    const darkBackground = "linear-gradient(60deg, #29323c 0%, #485563 100%)" 
    html.style.backgroundImage = 'url(/src/assets/img/dollarBackgroundDark.png)'
    body.style.boxShadow = '0px 0px 50px 1px black'
    usernameColor.style.color = '#e37dd2'
    sections.forEach(function(section){
        section.style.backgroundImage = darkBackground;
    })
    cards.forEach(function(card){
        card.style.backgroundImage = darkBackground;
        card.style.boxShadow = '0px 0px 10px 1px black'
    })
    spans.forEach(function(span){
        span.style.color = '#e3e3e3'
    })
    inputs.forEach(function(input){
        input.style.border = '1px solid white'
        input.style.color = '#e3e3e3'
    })
}

//Light
function sectionSpanInputLight(){
    const lightBackground = "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" 
    html.style.backgroundImage = 'url(/src/assets/img/dollarBackground.png)'
    body.style.boxShadow = '0px 0px 50px 1px #9d9c9c'
    usernameColor.style.color = '#7b336f'
    sections.forEach(function(section){
        section.style.backgroundImage = lightBackground;
    })
    cards.forEach(function(card){
        card.style.backgroundImage = lightBackground;
        card.style.boxShadow = '0px 0px 10px 1px #9d9c9c'
    })
    spans.forEach(function(span){
        span.style.color = '#272727'
    })
    inputs.forEach(function(input){
        input.style.border = '1px solid black'
        input.style.color = '#272727'
    })
}
