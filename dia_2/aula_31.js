let corCliente = 'gray'
let corSistema = 'black'

let corVendida = corCliente || corSistema
console.log(corVendida)

// utilizando o operador ||, se o primeiro valor foi definido, ele vai retornar o primeiro valor, porque ou é um ou outro
// ele sempre verificar da esquerda para direita

