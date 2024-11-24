//Toda funcionalidad del home.html 

export function showUsername(){
    //Llamamos del sessionStorage
    const getUsername = sessionStorage.getItem('activeUser')

    //Traemos del html el span
    const usernameSpan = document.getElementById('welcomeSpan')

    //Agregamos el username del sessionStorage
    usernameSpan.textContent = getUsername;
}