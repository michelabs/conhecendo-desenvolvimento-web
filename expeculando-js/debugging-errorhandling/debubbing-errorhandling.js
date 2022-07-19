


function validaArray(array, numero) {
  try {
    if(!array && !numero) {
        throw new ReferenceError("Envie os parâmetros necessários (array e número)!");
    }

    if(typeof array !== "object") {
        
        throw new TypeError("O array precisa ser do tipo object!");
    }

    if(typeof numero !== "number") {
        throw new TypeError("O número precisa ser do tipo number!");
    }

    if(array.length !== numero) {
        throw new RangeError("O tamanho do array é inválido!");
    }
    
  return array;

  } catch (error) {
      if(error instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError!")
        console.log (error.message);
      } else if(error instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log (error.message);
      } else if(error instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log (error.message);
      } else {
            console.log("Ocorreu um tipo de erro não esperado!", error);
      }
  }
}

const array = [1, 2, 3, 4, 5];
console.log(validaArray(array, 5));