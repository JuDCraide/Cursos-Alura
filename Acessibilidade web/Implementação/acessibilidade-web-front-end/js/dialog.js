// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var video = document.querySelector('video');

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function () {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForaDialog.inert = true;
  video.removeAttribute('controls');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  conteudoForaDialog.inert = false;
  btnAbreDialog.focus();
  video.setAttribute('controls', true);
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
document.addEventListener('keyup', function (e) {
  if (e.key === "Escape") {
    fechandoDialog();
  }
});

dialogOverlay.addEventListener('click', fechandoDialog);