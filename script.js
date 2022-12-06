const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    navMenu.classList.toggle('ativo')
})

// BOTÕES E EVENTOS DE CLICK

    const button = document.querySelector('.read-more-button')
    const hiddenText = document.querySelector('.read-more-text')

    button.addEventListener('click', event => {
        hiddenText.classList.toggle('read-more-text--show')

        button.textContent = button.textContent.includes('Mostrar mais...')
        ? 'Mostrar menos...' 
        : 'Mostrar mais...'
    })