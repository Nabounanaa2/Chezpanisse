const toggleBtn = document.querySelector('.toggle-btn');
const sousCat = document.querySelector('.sous-cat');

toggleBtn.addEventListener('click', function() {
  sousCat.classList.toggle('show');
});
