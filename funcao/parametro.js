//parâmetros de função
function soma(numero1, numero2) {
    return numero1 + numero2;
}
//declaração dos valores para a função declarar corretamente o programa
console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))


function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(multiplica(4, 5))


// parâmetros string
function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade("Naiane", 24))