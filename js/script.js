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


// REVISAR ESSE CÓDIGO
const usuarioLg = document.getElementById('nome-lg').value;
const senhaLg = document.getElementById('senha-lg').value;
const dica = document.getElementById('dica');

function validarLogin(){
  if(usuarioLg === usuarioCd && senhaLg === senhaCd){
    alert("Login com sucesso!");
    dica.innerText = "" 
  }
  else{
    alert("Login errado!");
    dica.innerText = "Dica: números"
  }
}
