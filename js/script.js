/*************************************** MENU HAMBURGUER ***************************************/

function clickMenu() {
  const aside = document.getElementById('aside');

  if (aside.style.display == 'block') {
    aside.style.display = 'none';
  } else {
    aside.style.display = 'block';
  }
}

/*************************************** VERIFICAÇÃO LOGIN / CADASTRO ***************************************/

function validarCadastro(){
  const usuarioCd = document.getElementById('usuarioCd').value;
  const senhaCd = document.getElementById('senhaCd').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if(senhaCd != confirmarSenha) {
    alert("As senhas estão diferentes.");
  }
  else if(!usuarioCd || !senhaCd || !confirmarSenha) {
    alert('Preencha todos os campos.');
  }
  else{
    alert("Cadastro concluído!");
  }
}

function validarLogin(){
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const dica = document.getElementById('dica');

  if(usuario === 'caio' && senha == 123){
    alert("Login com sucesso!");
    dica.innerText = "";   
  }
  else{
    alert("Login errado!");
    dica.innerText = "Dica: números";
  }
}

/*************************************** ASIDE POPULARES ***************************************/

const populares = document.querySelector('.aside nav p button')

function ativarPopulares(event) {
  const btn = event.currentTarget;
  const controls = btn.getAttribute('aria-controls');
  const nav = document.getElementById(controls);

  nav.classList.toggle("ativa")
  const ativa = nav.classList.contains("ativa");
  btn.setAttribute("aria-expanded", ativa);
}

function eventoPopulares() {
  populares.addEventListener('click', ativarPopulares)
}

/*************************************** CARROSSEL ***************************************/

let idx = 0;

const imagens = document.querySelectorAll('.item-carrossel')

const btnVoltar = document.querySelector('#prev-img')
btnVoltar.addEventListener('click', () => {
    idx--
    if (idx < 0) {
        idx = imagens.length - 1
    }
    carrosel(idx)
})

const btnAvancar = document.querySelector('#next-img')
btnAvancar.addEventListener('click', () => {
    idx++
    if (idx > imagens.length - 1) {
        idx = 0;
    }
    carrosel(idx)
})

function carrosel(idx) {
    const carroselImgs = document.querySelector('.container-cards');
    const tmnItem = document.querySelector('.item-carrossel').clientWidth;
    carroselImgs.style.transform = `translateX(${-idx * tmnItem}px)`
}