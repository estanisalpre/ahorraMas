//Funcionalidad para la sección de ayuda

export function helpSection(){
    document.querySelectorAll('.faqQuestion').forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling
            const icon = question.querySelector('.icon')
    
            // Alterna la visibilidad de la respuesta
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                icon.textContent = '−';  
            } else {
                answer.style.display = 'none'
                icon.textContent = '+'  
            }
        })
    })
}