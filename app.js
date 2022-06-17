const cadastro = document.getElementById('cadastro');

function validarNome() {
	var nome = formulario.nome.value

    if (nome.match(/\w+\s+/) == null){
		document.getElementById('nome').classList.add('erro');
    	return false;
    } else {
        document.getElementById('nome').classList.remove('erro');
     	return true;
    }   
}

function validarEmail() {
	var email = formulario.email.value

    if (email.match(/\S+@\S+\.\S+/) == null){
		document.getElementById('email').classList.add('erro');
    	return false;
    } else {
		document.getElementById('email').classList.remove('erro');
     	return true;
    }   
}

function validarCidade() {
	var nome = formulario.cidade.value

    if (nome.match(/[a-zA-Z]+\s*/) == null){
		document.getElementById('cidade').classList.add('erro');
    	return false;
    } else {
        document.getElementById('cidade').classList.remove('erro');
     	return true;
    }   
}

function verificarEstado() {
    let estado = document.getElementById("estado");
    let selected = estado.options[estado.selectedIndex].text;
    if (selected == '--'){
		document.getElementById('estado').classList.add('erro');
    	return false;
    } else {
        document.getElementById('estado').classList.remove('erro');
     	return true;
    }
}

function validarDados() {
  if (validarNome () && validarEmail() && validarCidade () && verificarEstado()){
   window.location.href = "file:///C:/Users/Eu%20e%20o%20outro/Documents/cadastro-sorteio/katt-sorteio/sorteio.html";
  }
  else {
  window.alert("Preencha com seus dados.");
  }
}
