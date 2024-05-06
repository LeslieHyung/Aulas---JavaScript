let nome = prompt("Qual o seu nome?");
alert(`Olá ${nome}! Seja Bem Vindo!`);

let peso = Number(prompt("Insira seu peso."))
let altura = Number(prompt("Insira sua altura."))

let IMC = peso / (altura * 2)
alert (`Este é o seu IMC ${IMC}!!!`)

if(IMC >=18.5 && IMC <=24.9){
    alert("Tu tá bem pelo menos fisicamente")
}else{
    alert("Nem bom fisicamente tu tá.")
}


