/* alert("Olá mundo");
prompt("Digite seu nome");
confirm("Está certo disso");*/

//var nome = prompt("Qual é o seu nome?")
//var idade = prompt("Qual a sua idade?")
//var trabalho = prompt("Qual é o seu trabalho?")

//console.log('Olá' + nome + 'seja bem-vindo!');
//console.log(`Olá  ${nome}, você tem ${idade} anos e trabalha como ${trabalho}!`)
//console.log(typeof nome, idade,trabalho)


function calculadora(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    var resultado = n1 + n2

    console.log(`O resultado da soma é ${resultado}`);
    
}

mostrarmensagem()