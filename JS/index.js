function toggleDarkMode() {
    var body = document.body;

    // Adiciona ou remove a classe 'dark-mode' do elemento body
    body.classList.toggle('dark-mode');
}


/*var ordemPressionada = [];

document.addEventListener('keydown', function(event) {
  var tecla = event.key.toLowerCase();
  ordemPressionada.push(tecla);

  if (ordemPressionada.join('') === 'mágialivros') {
    exibirMensagem();
  }
});

function exibirMensagem() {
  var mensagem = document.createElement('div');
  mensagem.id = 'mensagem';
  mensagem.textContent = 'Mensagem secreta!';
  document.body.appendChild(mensagem);
}*/
