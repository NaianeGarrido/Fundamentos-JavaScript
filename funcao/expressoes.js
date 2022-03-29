// expressão de função
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1))

// erro, declaração solicitada antes de variavel ter sido declarada.
console.log(somaOutroExemplo(1, 1))
const somaOutroExemplo = function(num1, num2) { return num1 + num2 }


// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.
console.log(apresentar())

function apresentar() {
    return "olá";
}