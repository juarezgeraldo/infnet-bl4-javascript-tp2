function verificaTriangulo(lado1, lado2, lado3) {
    let msg = ""

    if ((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado3 + lado1) > lado2) {
        if ((lado1 == lado2) && (lado2 == lado3)) {
            msg = "É um triângulo equilátero"
        } else {
            if ((lado1 == lado2) || (lado2 == lado3) || (lado3 == lado1)) {
                msg = "É um triângulo isósceles"
            } else {
                msg = "É um triângulo escaleno"
            }
        }
    } else {
        msg = "Com os dados informados não é possível formar um triângulo!"
    }

    console.log(msg)
}

const lado1 = parseInt(window.prompt("Informe o valor para o lado 1 do triangulo: "))
const lado2 = parseInt(window.prompt("Informe o valor para o lado 2 do triangulo: "))
const lado3 = parseInt(window.prompt("Informe o valor para o lado 3 do triangulo: "))

verificaTriangulo(lado1, lado2, lado3)
