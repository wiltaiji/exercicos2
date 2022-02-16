/*criar uma funcao que retorne valores unicos */

function valoresUnicos(array){
    let unico = new Set(array);
    return[...unico];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5,40, 6];

console.log (valoresUnicos(arr))