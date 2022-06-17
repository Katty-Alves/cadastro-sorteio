
function Cadastrar() {
  var Nome = document.getElementById('name'); 
  var Email = document.getElementById('email');
  var Senha = document.getElementById('senha');
  var Data_nascimento = document.getElementById('data_nascimento');

   if (Nome.value.length < 6){
		document.getElementById('name').classList.add('erro');
    alert('Informe seu nome completo.')
    	return false;
  }

  else if (Email.value.indexOf("@") == -1 || Email.value.indexOf(".") == -1){
		document.getElementById('email').classList.add('erro');
    alert('Informe um email válido.')
    	return false;
  }

  else if (Senha.value.length < 6){
		document.getElementById('senha').classList.add('erro');
    alert('Informe uma senha válida.')
    	return false;
  }

  else if (Data_nascimento.value == ''){
		document.getElementById('data_nascimento').classList.add('erro');
    alert('Informe sua data de nascimento.')
    	return false;
  }

else{
  window.location.href = "file:///C:/Users/Eu%20e%20o%20outro/Documents/cadastro-sorteio/katt-sorteio/sorteio.html";
}



}
