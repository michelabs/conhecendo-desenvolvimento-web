//Exercício 1 - Multiplicação de números.

console.log("Exercício 1")

const maca = {
    value: 1,
};

const laranja = {
    value: 3,
};

function mapComThis(array, thisArg) {
   return array.map(function (item) {
    return item * this.value;
   }, thisArg);
};
const nums = [1, 2];

console.log("this -> maçã", mapComThis(nums, maca));
console.log("this -> laranja", mapComThis(nums, laranja));

const array1 = [1, 2, 3, 4, 5];

function mapSemThis(array) {
    return array.map((item) => item*2);
}
console.log(mapSemThis(array1));

//Exercício 2 - Exibindo números pares
console.log("")
console.log("Exercício 2")

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retornaPar(array){
    return array.filter((item) => item % 2 == 0);
}
console.log("Array completo",array2)
console.log("Array filtrado por pares", retornaPar(array2));

//Exercício 3 - 

console.log("")
console.log("Exercício 3")

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somaNumeros (array) {
    return array.reduce((prev, current) => prev + current);
}

console.log(somaNumeros(array3));

const lista =[
 {
    name: "sabao em pó",
    preco: 30,
},
{
    name: "cereal",
    preco: 12,
},
{
    name: "toalha",
    preco: 30,
}];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1);
        console.log({prev});
        console.log({current})
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));


