//array
const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]
    //desconstrução de arrays
const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)

//objeto
const pessoa = { nome: 'Naiane', idade: 24 }
    //desconstrução Objeto
const pessoaTelefone = {...pessoa, telefone: 987654321 }
console.log(pessoa, pessoaTelefone)