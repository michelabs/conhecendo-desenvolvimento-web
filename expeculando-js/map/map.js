//Exercícios 1 - Retorna os admins de um determinado MAP.
function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value == "Admin"){
            admins.push(key)
        }
    }

    return admins;
}

const users = new Map();

users.set("Luiz", "Admin");
users.set("Abraão", "User");
users.set("Jacó", "Admin");
users.set("Sisso", "User");
users.set("Lopes", "Admin");

console.log(getAdmins(users));

//Exercícios 2 - Criando um array com valores exclusivos.
const array = [10, 20, 30, 40, 50, 50, 60, 70, 70];

function valoresUnicos(array){
    const valoresUnicos = new Set(array);   
    
    //Método spread
    return [...valoresUnicos];
}

console.log(valoresUnicos(array));
