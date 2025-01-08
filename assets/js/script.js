// Seleciona o gato
const cat = document.getElementById('cat');

// Mostra o gato na tela
cat.style.display = 'block';

// Adiciona um evento de movimento do mouse
document.addEventListener('mousemove', (event) => {
  // Atualiza a posição do gato para seguir o cursor
  cat.style.left = event.clientX + 'px';
  cat.style.top = event.clientY + 'px';
});
