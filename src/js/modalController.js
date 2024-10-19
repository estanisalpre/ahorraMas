//Aquí escribimos la funcionalidad de los modales que aparezcan en pantalla

//Modal de éxito o error
const errorSuccessModal = document.getElementById('errorSuccessModals')
const modalMessage = document.getElementById('modalMessage')

//Success Modal
export function successModal(message){
    errorSuccessModal.style.display = 'flex'
    errorSuccessModal.style.animation = 'fadeInModal 1s ease forwards'
    errorSuccessModal.style.backgroundColor = '#09e668'
    modalMessage.textContent = message;
    closeModal();
}

//Error Modal
export function errorModal(message){
    errorSuccessModal.style.display = 'flex'
    errorSuccessModal.style.animation = 'fadeInModal 1s ease forwards'
    errorSuccessModal.style.backgroundColor = 'rgb(245, 106, 106)'
    modalMessage.textContent = message;
    closeModal();
}

//Cerrar modales
function closeModal(){
    const closeIcon = document.getElementById('closeModal')

    if(closeIcon){
        closeIcon.addEventListener('click', () => {
            errorSuccessModal.style.display = 'none'
        })
    }
}
