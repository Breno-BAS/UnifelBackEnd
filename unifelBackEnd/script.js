const array = ['Amaral', 7829012, 'João', 2931029, 'Regina', 2319993]

const variavelQualquer = array.filter((elementoAtual) =>{
    return elementoAtual >= 7829012
})

console.log(variavelQualquer);



// Desestruturação de array
// const array = [
//     'Computador',
//     'celular',
//     'PS5',
//     'fone'
// ]

// const [computador, celular, PS5] = array

// console.log(PS5)