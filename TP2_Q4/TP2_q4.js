function montaNumeros(qtd) {
    let numeros = []
    let i = 1
    while (i <= qtd) {
        let aleatorio = getRandomIntInclusive(0, 5000)
        if (numeros.indexOf(numeros) < 0) {
            numeros.push(aleatorio)
            i++
        }
    }
    return numeros
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let qtd = 1000
let numeros = montaNumeros(qtd);
numeros.sort(function (a, b) { return a - b })
console.log(numeros)

