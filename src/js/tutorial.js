//Toda la funcionalidad de los tutoriales aquí
export function tutorialFunctionality(){
    //Traemos del DOM todos los modales
    const firstStep = document.getElementById('firstStep')
    const secondStep = document.getElementById('secondStep')
    const thirdStep = document.getElementById('thirdStep')
    const fourthStep = document.getElementById('fourthStep')
    const fifthStep = document.getElementById('fifthStep')
    const sixthStep = document.getElementById('sixthStep')
    const seventhStep = document.getElementById('seventhStep')
    const eigthStep = document.getElementById('eigthStep')
    const ninethStep = document.getElementById('ninethStep')
    const tenStep = document.getElementById('tenStep')
    const elevenStep = document.getElementById('elevenStep')
    const twelveStep = document.getElementById('twelveStep')
    const thirdteenStep = document.getElementById('thirdteenStep')
    const fourtheenStep = document.getElementById('fourtheenStep')
    const fiftheenStep = document.getElementById('fiftheenStep')
    //Botones
    const tutorialButton = document.getElementById('tutorial')
    const toStep2 = document.getElementById('toStep2')
    const toStep3 = document.getElementById('toStep3')
    const toStep4 = document.getElementById('toStep4')
    const toStep5 = document.getElementById('toStep5')
    const toStep6 = document.getElementById('toStep6')
    const toStep7 = document.getElementById('toStep7')
    const toStep8 = document.getElementById('toStep8')
    const toStep9 = document.getElementById('toStep9')
    const toStep10 = document.getElementById('toStep10')
    const toStep11 = document.getElementById('toStep11')
    const toStep12 = document.getElementById('toStep12')
    const toStep13 = document.getElementById('toStep13')
    const toStep14 = document.getElementById('toStep14')
    const toStep15 = document.getElementById('toStep15')
    const finalStep = document.getElementById('finalStep')

    //Iniciamos contador de pasos
    let stepCount = 0;

    if(tutorialButton){
        tutorialButton.addEventListener('click', () => {
            stepCount = 0;
            if(stepCount === 0){
                resetSteps(secondStep,thirdStep,fourthStep,fifthStep,sixthStep,seventhStep, eigthStep, ninethStep, tenStep, elevenStep, twelveStep, thirdteenStep, fourtheenStep, fiftheenStep);
                firstStep.style.display = 'flex'
                stepCount++;
                console.log(stepCount)
            }
        })
    }
    if(toStep2){
        toStep2.addEventListener('click', () => {
            if(stepCount === 1){
                stepCount++;
                console.log(stepCount)
                openCloseModals(secondStep,firstStep)
            }
        })
    }
    if(toStep3){
        toStep3.addEventListener('click', () => {
            if(stepCount === 2){
                stepCount++;
                console.log(stepCount)
                openCloseModals(thirdStep,secondStep)
            }
        })
    }
    if(toStep4){
        toStep4.addEventListener('click', () => {
            if(stepCount === 3){
                stepCount++;
                console.log(stepCount)
                openCloseModals(fourthStep,thirdStep)
            }
        })
    }
    if(toStep5){
        toStep5.addEventListener('click', () => {
            if(stepCount === 4){
                stepCount++;
                console.log(stepCount)
                openCloseModals(fifthStep,fourthStep)
            }
        })
    }
    if(toStep6){
        toStep6.addEventListener('click', () => {
            if(stepCount === 5){
                stepCount++;
                console.log(stepCount)
                openCloseModals(sixthStep,fifthStep)
            }
        })
    }
    if(toStep7){
        toStep7.addEventListener('click', () => {
            if(stepCount === 6){
                stepCount++;
                console.log(stepCount)
                openCloseModals(seventhStep,sixthStep)
            }
        })
    }
    if(toStep8){
        toStep8.addEventListener('click', () => {
            if(stepCount === 7){
                stepCount++;
                console.log(stepCount)
                openCloseModals(eigthStep,seventhStep)
            }
        })
    }
    if(toStep9){
        toStep9.addEventListener('click', () => {
            if(stepCount === 8){
                stepCount++;
                console.log(stepCount)
                openCloseModals(ninethStep,eigthStep)
            }
        })
    }
    if(toStep10){
        toStep10.addEventListener('click', () => {
            if(stepCount === 9){
                stepCount++;
                console.log(stepCount)
                openCloseModals(tenStep,ninethStep)
            }
        })
    }
    if(toStep11){
        toStep11.addEventListener('click', () => {
            if(stepCount === 10){
                stepCount++;
                console.log(stepCount)
                openCloseModals(elevenStep,tenStep)
            }
        })
    }
    if(toStep12){
        toStep12.addEventListener('click', () => {
            if(stepCount === 11){
                stepCount++;
                console.log(stepCount)
                openCloseModals(twelveStep,elevenStep)
            }
        })
    }
    if(toStep13){
        toStep13.addEventListener('click', () => {
            if(stepCount === 12){
                stepCount++;
                console.log(stepCount)
                openCloseModals(thirdteenStep,twelveStep)
            }
        })
    }
    if(toStep14){
        toStep14.addEventListener('click', () => {
            if(stepCount === 13){
                stepCount++;
                console.log(stepCount)
                openCloseModals(fourtheenStep,thirdteenStep)
            }
        })
    }
    if(toStep15){
        toStep15.addEventListener('click', () => {
            if(stepCount === 14){
                stepCount++;
                console.log(stepCount)
                openCloseModals(fiftheenStep,fourtheenStep)
            }
        })
    }
    //Cerramos tutorial
    closeTutorial(stepCount,firstStep,secondStep,thirdStep,fourthStep,fifthStep,sixthStep, seventhStep, eigthStep, ninethStep, tenStep, elevenStep, twelveStep, thirdteenStep, fourtheenStep, fiftheenStep)
}

//Función para cerrar modal y abrir uno nuevo
function openCloseModals(toOpen, toClose){
    toOpen.style.display = 'flex'
    toClose.style.display = 'none'
}

//Funcion para cerrar por si se aprieta en tutorial de nuevo
function resetSteps(modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal10,modal11,modal12,modal13,modal14,modal15){
    modal2.style.display = 'none'
    modal3.style.display = 'none'
    modal4.style.display = 'none'
    modal5.style.display = 'none'
    modal6.style.display = 'none'
    modal7.style.display = 'none'
    modal8.style.display = 'none'
    modal9.style.display = 'none'
    modal10.style.display = 'none'
    modal11.style.display = 'none'
    modal12.style.display = 'none'
    modal13.style.display = 'none'
    modal14.style.display = 'none'
    modal15.style.display = 'none'
}

//Función cerrar tutorial completo
function closeTutorial(count,modal1,modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal10,modal11,modal12,modal13,modal14,modal15){
   const endTutorial = document.querySelectorAll('.endTutorial')

   if(endTutorial){
    endTutorial.forEach(function(end){
        end.addEventListener('click', () => {
                count = 0;
                if(count === 0){
                    modal1.style.display = 'none'
                    modal2.style.display = 'none'
                    modal3.style.display = 'none'
                    modal4.style.display = 'none'
                    modal5.style.display = 'none'
                    modal6.style.display = 'none'
                    modal7.style.display = 'none'
                    modal8.style.display = 'none'
                    modal9.style.display = 'none'
                    modal10.style.display = 'none'
                    modal11.style.display = 'none'
                    modal12.style.display = 'none'
                    modal13.style.display = 'none'
                    modal14.style.display = 'none'
                    modal15.style.display = 'none'
                }
        })
    })
   }
}