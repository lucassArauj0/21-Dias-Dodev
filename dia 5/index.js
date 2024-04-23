let num1 = parseInt(prompt('Escolha um número: '));
let num2 = parseInt(prompt('Escolha outro número: '))
var opcao = parseInt(prompt('Escolha a operação que você deseja:' + '\n1 = +; \n2 = -; \n3 = *; \n4 = /'))

switch (opcao) {
    case 1:
        console.log (num1 + num2)
        break
    case 2:
        console.log (num1 - num2)   
        break
    case 3:
        console.log (num1 * num2)
        break
    case 4:
        console.log (num1 / num2)
        break  
    default:
        console.log ('Você não escolheu nenhuma opção matemática.')             
}