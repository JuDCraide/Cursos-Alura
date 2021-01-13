var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');

var noticias = document.querySelectorAll('.listaDeArtigos-item');

new0.style.display = 'block';
new0.append(indicadorSlideAtual);

var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

//Indicador slide atual
var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'indicadorSlideAtual';
indicadorSlideAtual.textContent = ' (Slide Atual)';


// Percorre todos os botoes controladores
btns.forEach(function (btn) {
  btn.addEventListener('click', function () {

    //btn.href = 'javascript:void(0)';

    noticias.forEach((noticia, index) => {
      noticia.style.display = 'none';
      if (btn.getAttribute('data-sliderItem') === String(index)) {
        noticia.style.display = 'block';
      }
    });

    document.querySelector('#indicadorSlideAtual').remove();
    this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})