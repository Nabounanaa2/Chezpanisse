const toggleBtn = document.querySelector('.categorie-btn');
const sousCat = document.querySelector('.sous-categorie');

toggleBtn.addEventListener('click', function() {
  sousCat.classList.toggle('show');
});
