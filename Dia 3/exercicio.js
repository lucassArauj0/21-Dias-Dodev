let nome = '';
let idade = 0;
let altura = 0;
let peso = 0;

nome = prompt ("Qual é o seu nome?");
idade = prompt ("Qual é a sua idade?");
altura = prompt ("Qual é a sua altura?");
peso = prompt ("Qual é o seu peso?");

let anoNascimento = 0;
anoNascimento = 2023 - idade;

let imc = 0;
imc = peso / (altura * altura)

console.log(`Olá ${nome}, você tem ${idade} anos, sua altura é ${altura} e seu peso é ${peso}KG. Você nasceu em ${anoNascimento} e seu IMC é ${imc}`)