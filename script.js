let clicarNome = function() {
  let nome = document.getElementById('nome').value
  console.log("O nome inserido pelo o usuario foi : " + nome)
  saidaNome = "Nome : " + nome
  document.getElementById('saidaNome').innerHTML = saidaNome
}

let clicarIdade = function() {
  let idade = document.getElementById('idade').value
  console.log("A idade inserida pelo o usuario foi : " + idade)
  saidaIdade = "Idade : " + idade
  document.getElementById('saidaIdade').innerHTML = saidaIdade
  
}

let clicarEndereco = function() {
  let endereco = document.getElementById('endereco').value
  console.log("O endereço inserido pelo usuario foi : " + endereco)
  saidaEndereco = "Endereço : " + endereco
   document.getElementById('saidaEndereco').innerHTML = saidaEndereco
}
