const dropdown = document.querySelector('.body-content .dropdown')
const buttonDropdown = document.querySelector('.button-dropdown');

buttonDropdown.addEventListener('click', () => {
    dropdown.classList.contains('is-active') ? dropdown.classList.remove('is-active') : dropdown.classList.add('is-active')
})