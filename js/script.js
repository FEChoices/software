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
