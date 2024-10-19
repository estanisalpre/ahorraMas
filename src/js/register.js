//Funcionalidad al formulario de Registro. Debemos registrar usuario en localstorage
//Importamos
import { Users } from "./Users.js";
import { successModal, errorModal } from "./modalController.js";

export function registerUser(){
    //Traemos el boton de formulario
    const registerButton = document.getElementById('registerUser')

    if(registerButton){
        registerButton.addEventListener('click', (e) => {
            e.preventDefault();

            //Capturamos valores
            const userName = document.getElementById('username').value
            const userEmail = document.getElementById('email').value
            const userPassword = document.getElementById('password').value

            //Verificamos que no exista un localstorage con el mismo correo
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const findUser = users.some(user => user.email === userEmail)

            if(findUser){
                const errorMessage = 'Email ya existe'
                errorModal(errorMessage);
            } else {
                console.log('no existe')

                //Instanciamos objeto
                const newUser = new Users(userName,userEmail,userPassword)

                //Pusheamos el nuevo usuario
                users.push(newUser)

                //Guardamos en localstorage
                localStorage.setItem('users', JSON.stringify(users))

                //Mostramos span de éxito
                const successMessage = 'Registro exitoso'
                successModal(successMessage);
            }
        })
    }
}