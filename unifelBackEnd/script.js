

Spread objeto

const info = { nome: 'Breno', age: 28 }
const infoAdc = { lastname: 'Silva' }

const pessoa = {...info, ...infoAdc}

console.log(pessoa);

//spread operator(...) - Junção de arrays
//const array1 = [4, 8, 41, 2]
//const array2 = [7, 6, 32, 1]

//const array = [...array1, ...array2]
//console.log(array)




//const array = ['Amaral', 7829012, 'João', 2931029, 'Regina', 2319993]

//const variavelQualquer = array.filter((elementoAtual) =>{
//    return elementoAtual >= 7829012
//})

//console.log(variavelQualquer);



// Desestruturação de array
// const array = [
//     'Computador',
//     'celular',
//     'PS5',
//     'fone'
// ]

// const [computador, celular, PS5] = array

// console.log(PS5)