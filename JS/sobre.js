//js para expandir 
var titulo = document.getElementById('titulo'); //variavel e pegando o elemento que vai expandir ao passr em cima
var expandableDiv = document.querySelector('.expandable'); //expandindo 

//expandindo quando o mouse passar por cima
titulo.addEventListener('mouseenter', function() { 
  expandableDiv.classList.add('expanded');
});

//tirar a expansão qnd o mouse nao estiver mais em cima
titulo.addEventListener('mouseleave', function() { 
  expandableDiv.classList.remove('expanded');
});

