let media = 0
let notasHomens = 0
let mulheresAcimaDeSete = 0
let maiorNotaHomens = 0
let contador = 1

while (contador <= 10) {
    nota = parseInt(prompt('Digite a nota do aluno: '))
    sexo = prompt ('Digite o sexo do aluno m - Masculino / f - Feminino')

    if (sexo == "m") {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        notasHomens++
    }
    if (sexo == "f" && nota > 7) {
        mulheresAcimaDeSete++
    }

    media += nota
    contador++
}

media = media / 10

console.log('A média geral dos alunos foram ' + media)
console.log(notasHomens + ' homens enviaram as notas.')
console.log(mulheresAcimaDeSete + ' mulheres ficaram acima de 7.')
console.log(maiorNotaHomens + ' foi a maior nota entre os homens.')