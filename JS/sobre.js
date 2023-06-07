var titulo = document.getElementById('titulo');
var expandableDiv = document.querySelector('.expandable');

titulo.addEventListener('mouseenter', function() {
  expandableDiv.classList.add('expanded');
});

titulo.addEventListener('mouseleave', function() {
  expandableDiv.classList.remove('expanded');
});

