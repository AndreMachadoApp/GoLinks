var cards = document.querySelectorAll('.container .card'); // selecionar todos os cards

function slideMensagem() {
  var mensagem = this.querySelector('.mensagem');
  if (!mensagem) {
    // Cria elemento de texto com mensagem
    mensagem = document.createElement('div');
    mensagem.textContent = 'Este setor é responsável por';
    mensagem.classList.add('mensagem'); // Adiciona classe para fazer estilização

    // Define o estilo da mensagem
    mensagem.style.fontSize = '16px';
    mensagem.style.color = 'white';
    mensagem.style.textDecoration = 'none';
    mensagem.style.background = 'rgba(128, 128, 128, 0.8)';
    mensagem.style.transition = 'width 10s, height 12s, background-color 12s, opacity 12s, transform 12s';

    this.appendChild(mensagem);

    // Adicionar classe para iniciar a transição
    setTimeout(function() {
      mensagem.classList.add('show');
    }, 10); // Espera um pequeno intervalo para ativar a transição
  }
}

function removerMensagem() {
  var mensagem = this.querySelector('.mensagem');
  if (mensagem) {
    mensagem.remove();
  }
}

cards.forEach(function(card) {
  card.addEventListener('mouseover', slideMensagem);
  card.addEventListener('mouseout', removerMensagem);
});
