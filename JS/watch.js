
const cardInner = document.querySelector('.card-inner')
const addAndHidden = document.querySelector('.addAndHidden')
const moreTest = document.getElementById('more')
const dotted = document.querySelector('.dotted')
const showMore = document.getElementById('showMore')
const reply = document.querySelectorAll('.reply')

function showAllText() {
  dotted.classList.toggle('dottedToggle')
  moreTest.classList.toggle('moreTestToggle')

  if (dotted.classList.contains('dottedToggle')) {
    showMore.innerHTML = 'عرض عناصر أقل'
  } else {
    showMore.innerHTML = 'عرض المزيد'
  }
}

$('.reply').click(()=> {
    $(this).parents('div.row').next('div.card').toggle();
})


// reply.forEach((el) => {
//   el.addEventListener('click', (e)=> {
//     this.parents('div.row').next('div.card').toggle();
//   })
// })




// addAndHidden.addEventListener('click', (e)=> {
//   cardInner.classList.toggle('hidden');
// })

