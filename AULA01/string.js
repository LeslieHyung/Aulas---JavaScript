'use strict'

var nome_usuario //snake_case
var nomeUsuario //camelCase
var NomeUsuario // PascalCase
// var nome-usuario  //kebab-case
// NÃO UTILIZAR O VAR PARA NÃO OCORRER ERROS FUTUROS!!!
// Só utilizamos para teste e aprendizagem!!!
nome_usuario = 'Leslie';
nomeUsuario = "Lancelot";
NomeUsuario = `Odette`;

console.log('Olá Mundo!')
console.log("Olá,", nome_usuario);
console.log('Olá, ' + nomeUsuario);
console.log(`Olá, ${NomeUsuario}`);
console.log(`A soma de: 5 + 5 e = ${5+5}`);

let idade = 18

console.log(`Eu sou a ${nome_usuario} e tenho ${idade} anos de idade.`);
console.log(`Me chamo ${nomeUsuario} e tenho ${idade} anos de idade.`);

