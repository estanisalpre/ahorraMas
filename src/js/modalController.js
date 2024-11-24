//Aquí escribimos la funcionalidad de los modales que aparezcan en pantalla

//Modal de éxito o error
const errorSuccessModal = document.getElementById('errorSuccessModals')
const fullscreenContainer = document.getElementById('fullscreenContainer')
const modalMessage = document.getElementById('modalMessage')

//Llamamos del login y register los elementos
const errorSuccessModalLogReg = document.getElementById('errorSuccessModalLogReg')
const modalMessageLogReg = document.getElementById('modalMessageLogReg')

//Success Modal
export function successModal(message){
    if(message){
        errorSuccessModal.style.display = 'flex'
        errorSuccessModal.style.animation = 'fadeInModal 1s ease forwards'
        fullscreenContainer.style.backgroundColor = '#09e668'
        modalMessage.textContent = message;
        closeModal();
    }
}

//Error Modal
export function errorModal(message){
    if(message){
        errorSuccessModal.style.display = 'flex'
        errorSuccessModal.style.animation = 'fadeInModal 1s ease forwards'
        fullscreenContainer.style.backgroundColor = 'rgb(245, 106, 106)'
        modalMessage.textContent = message;
        closeModal();
    }
}

//Success Modal
export function successModalLogReg(message){
    if(message){
        errorSuccessModalLogReg.style.display = 'flex'
        errorSuccessModalLogReg.style.animation = 'fadeInModal 1s ease forwards'
        errorSuccessModalLogReg.style.backgroundColor = '#09e668'
        modalMessageLogReg.textContent = message;
        closeModalLogReg();
    }
}

//Error Modal en Registro y Login
export function errorModalLogReg(message){
    if(message){
        errorSuccessModalLogReg.style.display = 'flex'
        errorSuccessModalLogReg.style.animation = 'fadeInModal 1s ease forwards'
        errorSuccessModalLogReg.style.backgroundColor = 'rgb(245, 106, 106)'
        modalMessageLogReg.textContent = message;
        closeModalLogReg();
    }
}

//Cerrar modales
function closeModal(){
    const closeIcon = document.getElementById('closeModal')

    if(closeIcon){
        closeIcon.addEventListener('click', () => {
            errorSuccessModal.style.display = 'none'
            location.href = '/src/views/dashboard.html'
        })
    }
}

function closeModalLogReg(){
    const closeLogRegIcon = document.getElementById('closeModalLogReg')

    if(closeLogRegIcon){
        closeLogRegIcon.addEventListener('click', () => {
            errorSuccessModalLogReg.style.display = 'none'
        })
    }
}
