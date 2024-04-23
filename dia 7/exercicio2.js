let saldo = 1000;
let maiorValorInserido = 0;
let somaValoreInseridos = 0;
let totalTransacoes = 0;
let continuar = false;

do {
const nome = prompt('Qual seu nome? ');
const cpf = Number(prompt('Qual o seu CPF? '));
const valor = Number(prompt('Digite o valor da transação: '));
const operacao = prompt('Qual operação deseja realizar? S / D');

if (valor < 0) {
    console.log('Valor inválido. Tente novamente.')
} else if (operacao == "s" && valor > saldo) {
    console.log('Valor inválido. Saldo insulficiente.')
} else if (operacao == "s") {
    console.log(`Olá ${nome} do CPF ${cpf}, seu saldo é ${saldo} `)
    saldo -= valor;
    totalTransacoes ++;
    somaValoreInseridos += valor;

    if (valor > maiorValorInserido) {
        console.log(`Transaçao realizada com sucesso. Seu saldo é ${saldo}.`)
    }

    const opcao = prompt('Deseja continuar? (1 - sim) ou (2 - não)')
    if (opcao == 1) {
        continuar = true
    } else if (opcao == 2) {
        continuar = false
    } else {
        console.log('Opção inválida. tente novamente.')

    }
}
} while (continuar)

console.log(`Seu saldo é R$${saldo}`);
console.log(`O maior valor inserido foi R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${somaValoreInseridos / totalTransacoes}`);