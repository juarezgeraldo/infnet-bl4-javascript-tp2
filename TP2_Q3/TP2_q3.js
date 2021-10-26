function montaNotas(numero) {
    let notasAlunos = []
    for (let i = 1; i <= numero; i++) {
        let nota = getRandomIntInclusive(0, 100)
        notasAlunos.push([i, nota])
    }
    return notasAlunos
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let qtdAlunos = 20
let notasAlunos = montaNotas(qtdAlunos);
let aprovados = 0
let reprovados = 0
for (let i = 0; i < qtdAlunos; i++){
    let status = notasAlunos[i][1] >= 60 ? "Aprovado" : "Reprovado"
    aprovados = status == "Aprovado" ? aprovados + 1 : aprovados + 0
    reprovados = status == "Reprovado" ? reprovados + 1 : reprovados + 0
    console.log(`Aluno nr. ${notasAlunos[i][0]} - Nota ${notasAlunos[i][1]} ${status}`)
}
console.log(`Aprovados: ${aprovados} (${(aprovados) / qtdAlunos * 100}%) - Reprovados: ${reprovados} (${(reprovados) / qtdAlunos * 100}%) `)

