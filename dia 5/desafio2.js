let quantidade

let opcao = parseInt(prompt('O que você deseja: \n1 Abastecer com gasolina; \n2 Abastecer com álcool; \n3 Calibrar os pneus?'))

let valor

switch (opcao) {
    case 1:
        valor = parseInt(prompt("Digite o valor que deseja abastecer: "))
        quantidade = valor / 5
        console.log("A quantidade em litros foram " + quantidade + "L de gasolina")
        break
    case 2:
        valor = parseInt(prompt("Digite o valor que deseja abastecer: "))
        quantidade = valor / 3
        console.log("A quantidade em litros de álcool foram: " + quantidade + "L de álcool.")
        break
    default:
        console.log("Pneus calibrados com sucesso!")            
}