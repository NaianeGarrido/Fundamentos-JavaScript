//function com parametro e sem return
function cumprimentaPessoa1(pessoa) {
    console.log(`oi, ${pessoa}!`)
}
cumprimentaPessoa1('Helena')

//function com return e com parametro
function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa2(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa2('Paula')