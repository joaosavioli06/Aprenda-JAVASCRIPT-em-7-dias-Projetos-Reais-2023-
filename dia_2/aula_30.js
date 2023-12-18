let podeVotar = true
let idadeMinima = true

let resultado = podeVotar && idadeMinima

console.log(resultado)

// utilizando o operador &&, a operação só vai dar true, se todos os parâmetros forem true

let Votarpode = false
let Minimaidade = true

let result = Votarpode || Minimaidade

console.log(result)

// utilizando o operador ||, caso um parâmetro seja falso e o outro true, ele ainda vai true
// o || só precisa de um true para conseguir fazer a "aprovação"

console.log(!resultado)

// utilizando o operador !, ele sempre vai retornar o contrário da operação original
// a variável resultado é true, mas utilizando o !, ela retorna false
