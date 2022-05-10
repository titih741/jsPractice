const alunos = [
    {
        nome: "Tiago",
        nota: 7,
        turma: 1
    },
    {
        nome: "Karla",
        nota: 6,
        turma: 2,
    },
    {
        nome: "Pedro",
        nota: 5,
        turma: 1,
    }
]

function alunosAprovados (alunos, media){
    let aprovados = [];

    for(let i = 0; i<alunos.length; i++){

        const {nota, nome} = alunos[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6))