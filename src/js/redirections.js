//Todas las redirecciones las realizamos aquí. Ej: Botones, links, redes, entre otros.

export function indexRedirections(){
    const toLogin = document.getElementById('toLogin')
    const toRegister = document.getElementById('toRegister')
    const toIndex = document.getElementById('toIndex')

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
}