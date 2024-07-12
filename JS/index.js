

// init html el
const logoYoutub = document.querySelector('#toggler');
const sidebar = document.querySelector('.sidebar');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');



// toggle seitpar
logoYoutub.addEventListener('click', ()=> {
  sidebar.classList.toggle('show')
})

// toggle input bar
searchIcon.addEventListener('click', ()=> {
  searchInput.classList.toggle('hidden--input--top')
})



