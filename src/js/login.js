//Aqui toda la funcionalidad para loguearse
//Importamos
import { errorModal } from "./modalController.js";

export function login(){
    //Boton de logueo
    const loginButton = document.getElementById('loginUser')

    if(loginButton){
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();

            //Capturamos valores
            const emailValue = document.getElementById('email').value
            const passwordValue = document.getElementById('password').value

            //Traemos el localstorage
            const getUserStorage = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = getUserStorage.find(user => user.email === emailValue && user.password === passwordValue)

            if(userExists){
                sessionStorage.setItem('activeUser', userExists.username)
                sessionStorage.setItem('activeEmail', userExists.email)
                location.href = '/src/views/home.html'
            } else {
                const errorMessage = 'Credenciales incorrectas'
                errorModal(errorMessage);
            }
        })
    }
}