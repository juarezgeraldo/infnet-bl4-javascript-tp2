function contarNumeros(total) {
    var i;
    var contador = 0
    for (i = 1; i < total; i++) {
        const multiplo2 = i % 2;
        const multiplo3 = i % 3;
        if (multiplo2 == 0 && multiplo3 == 0){
            contador = contador + 1
        }
    }
    return contador
}


console.log (contarNumeros(1000000));


