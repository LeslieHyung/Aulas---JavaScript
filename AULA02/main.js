let palavra = "Genshin Impact é um jogo de RPG";
let animal = "jaguatirica";
let nome = "Leslie Deheza Machicado"

console.log(palavra.charAt(4)); //charAt - Conta a partir de 0 e é mostrado a letra que o número foi indicado de acordo com a sequência da frase ou palavra. Ex: "Genshin Impact" - charAt(4) a letra é "h"

console.log(palavra.length); //lengh - conta a quantidade de todos os caracteres

console.log(animal.toUpperCase);

console.log(animal.substring(5,9)); //substring - aparecerá uma parte da palavra que você decidir. Ex: "Jaguatirica" substring(5,9) mostrará "tiri" (lembrando que inicia a contagem a partir de 0.)

let palavraCortada = palavra.split(' '); //Tudo que eu colocar no ('') ele irá ignorar e não irá contar como palavra.
console.log(palavraCortada[4]); //split - corta a palavra da frase. Ex: "Genshin Impact é um jogo de RPG" a quarta palavra é "jogo"

let nomeParte = nome.split(' ');
console.log(nomeParte[0]);

console.log(palavra.replace('RPG', 'aventura')); //O replace serve para trocar alguma palavra da frase. Ex: 'RPG' foi trocado por 'aventura'
