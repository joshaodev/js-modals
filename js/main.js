const openInformModalButton = document.querySelector('#open-inform-modal')
const openConfirmModalButton = document.querySelector('#open-confirm-modal')
const openSubmitModalButton = document.querySelector('#open-submit-modal')

const closeInformModalElement = document.querySelectorAll('.close-inform-modal')
const closeConfirmModalElement = document.querySelectorAll('.close-confirm-modal')
const closeSubmitModalElement = document.querySelectorAll('.close-submit-modal')

const modalFade = document.querySelector('#modal-fade')
const informModal = document.querySelector('#inform-modal')
const confirmModal = document.querySelector('#confirm-modal')
const SubmitModal = document.querySelector('#submit-modal')


/** METHODS */
const toggleInformModal = () => {
    modalFade.classList.toggle('active')
    informModal.classList.toggle('active')    
}

const toggleConfirmModal = () => {
    modalFade.classList.toggle('active')
    confirmModal.classList.toggle('active')    
}

const toggleSubmitModal = () => {
    modalFade.classList.toggle('active')
    SubmitModal.classList.toggle('active')    
}

/** EVENTS */
openInformModalButton.addEventListener('click', toggleInformModal)
openConfirmModalButton.addEventListener('click', toggleConfirmModal)
openSubmitModalButton.addEventListener('click', toggleSubmitModal)

closeInformModalElement.forEach(element => {
    element.addEventListener('click', toggleInformModal)
});

closeConfirmModalElement.forEach(element => {
    element.addEventListener('click', toggleConfirmModal)
});

closeSubmitModalElement.forEach(element => {
    element.addEventListener('click', toggleSubmitModal)
});