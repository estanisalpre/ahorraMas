//Funcionalidad para cerrar sesión
const logOutButton = document.getElementById('logOutButton')

export function logOut(){
    if(logOutButton){
        logOutButton.addEventListener('click', () => {
            sessionStorage.removeItem('activeUser')

            if(!sessionStorage.getItem('activeUser')){
                location.href = '/index.html'
            } else {
                console.log('no se puede salir')
            }
        })
    }
}