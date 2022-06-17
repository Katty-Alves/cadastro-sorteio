
function Cadastrar() {
  var Nome = document.getElementById('name'); 
  var Email = document.getElementById('email');
  var Senha = document.getElementById('senha');
  var Cidade = document.getElementById('cidade');
  var Estado = document.getElementById('estado');

   if (Nome.value.match(/\w+\s+/) == null){
		document.getElementById('name').classList.add('erro');
    alert('Informe seu nome completo.')
    	return false;
  }

  else if (Email.value.match(/\S+@\S+\.\S+/) == null){
		document.getElementById('email').classList.add('erro');
    alert('Informe um email válido.')
    	return false;
  }

  else if (Senha.value.match(/[0-9]/g) == null || (!senha.match(/[A-Z]/g) && !senha.match(/[a-z]/g)) || !senha.match(/[\W|_]/g)){
		document.getElementById('senha').classList.add('erro');
    alert('Informe uma senha válida.')
    	return false;
  }

  if (Cidade.value.match(/\w+\s+/) == null){
		document.getElementById('cidade').classList.add('erro');
    alert('Informe uma CIDADE.')
    	return false;
        }

  else if (Estado.selectedIndex == 0){
		document.getElementById('estado').classList.add('erro'); 
    alert('Informe o estado')
    	return false;

  }

  else{
  window.location.href = "file:///C:/Users/Eu%20e%20o%20outro/Documents/cadastro-sorteio/katt-sorteio/sorteio.html";
}
}
