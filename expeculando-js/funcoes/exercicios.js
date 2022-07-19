// exercício 1

const alunos = [
    {
        nome: "João",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Sofia",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "Paulo",
        nota: 6,
        turma: "2C",
    },
    {
        nome: "Miguel",
        nota: 3,
        turma: "2C",
    }
]

function alunosAprovados(array, media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++) {

        // object destructing
        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

// exercício 2

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Carla",
    idade: 30
};

const pessoa2 = {
    nome: "Maria",
    idade: 40
};

const animal1 = {
    nome: "Luiggy",
    idade: 2
};

console.log(calculaIdade.call(animal1, 10));
console.log(calculaIdade.apply(animal1, [10]));