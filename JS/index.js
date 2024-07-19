

// init html el
const searchInput = document.querySelector('.search-input');
const hamurgerMenu = document.querySelector('.hamurger-menu');
const navbarUl = document.querySelector('.navbar--ul');

hamurgerMenu.addEventListener('click', () => {
  hamurgerMenu.classList.toggle('change');
  navbarUl.classList.toggle('change');
})

