let notas = [];
let sexos = [];

cadastrarAlunos();
calcularMediaGeral();
calcularHomensEnviaramNotas();
calcularMulheresAcima7();
calcularMaiorNotaHomem();

function cadastrarAlunos () {
    let continuar = true;
    while (continuar) {
        notas.push(parseInt(prompt("Digite a nota do/a aluno/a: ")));
        sexos.push(prompt("Digite o sexo do aluno: M - Masculino / F - Feminino"));
        let novoCadastro = prompt ("Deseja cadastrar novo/a aluno/a? Digite S - Sim ou N - Não.");
        if (novoCadastro.toLocaleUpperCase === 'N') {
            continuar = false;
        }
    }
}

function calcularMediaGeral () {
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    let mediaNotas = somaNotas / notas.length;
    console.log(`A média geral dos alunos foi ${mediaNotas}.`);
}

function calcularHomensEnviaramNotas () {
    let HomensEnviaramNotas = 0;
    for (let i = 0; i < sexos.length; i++) {
        if (sexos[i].toUpperCase() === 'M') {
            HomensEnviaramNotas++;
        }
    }
    console.log(`${HomensEnviaramNotas} enviaram notas.`)
}

function calcularMulheresAcima7 () {
    let mulheresAcimaDe7 = 0;
    for (let i = 0; i < notas.length; i++) {
        if (sexo[i].toUpperCase() === 'F' && notas[i] >= 7) {
            mulheresAcimaDe7 ++;
        }
    }
    console.log(`${mulheresAcimaDe7} mulheres tiveram nota acima de 7.`)
}

function calcularMaiorNotaHomem () {
    let MaiorNotaHomens = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > MaiorNotaHomens) {
            MaiorNotaHomens = notas [i];
        }
    }
    console.log(`A maior nota entre os homens foi ${MaiorNotaHomens}.`);
}