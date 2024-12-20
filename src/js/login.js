//Aqui toda la funcionalidad para loguearse
//Importamos
import { errorModalLogReg, successModalLogReg } from "./modalController.js";

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
                sessionStorage.setItem('profImg', userExists.profileImg)
                sessionStorage.setItem('screenMode', "0")
                location.href = '/src/views/dashboard.html'
            } else {
                const errorMessage = 'Credenciales incorrectas'
                errorModalLogReg(errorMessage);
            }
        })
    }
}