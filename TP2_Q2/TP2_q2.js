function calculaFatorial(numero) {
    var resultado = numero
    for (let i = 1; i < numero; i++) {
            resultado = resultado * i
    }
    return resultado
}


horaInicio = new Date().getMilliseconds();
var resultado = calculaFatorial(53);
horaFinal = new Date().getMilliseconds();
tempoDecorrido = horaFinal - horaInicio
console.log (`53! = ${resultado} ${tempoDecorrido} milisegundos`);

