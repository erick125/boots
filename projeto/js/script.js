function validarFormulario()
{
	let email = document.getElementById("email").value
	let nome = document.getElementById("nome-completo").value
	let telefone = document.getElementById("telefone").value
	let estado = document.getElementById("estado").value
	let cidade = document.getElementById("cidade").value
	
	if(email == "")
	{
		alert("O campo email está vazio")
	}
	
	if(nome == "")
	{
		alert("O campo nome está vazio")
	}
	
	if(telefone == "" || telefone.length <8)
	{
		alert("O campo telefone está vazio")
	}
	
	if(estado == "")
	{
		alert("O campo estado está vazio")
	}
	
	if(cidade == "")
	{
		alert("O campo cidade está vazio")
	}
	
	console.log(email)
	console.log(nome)
	console.log(telefone)
	console.log(estado)
	console.log(cidade)
}