let num = parseInt(prompt('Escolha um número: '))

for (let contador = num; contador <= num+2; contador++) {
        console.log('A Tabuada do número: ' + contador)
    for(let outros = 0; outros <= 10; outros++) {
        console.log(contador + ' x ' + outros + ' = ' + contador*outros)
    }
}