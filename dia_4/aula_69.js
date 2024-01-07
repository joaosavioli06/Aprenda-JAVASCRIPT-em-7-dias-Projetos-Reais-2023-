// Como esvaziar uma array?
// Existem 3 formas

let lista = [1, 2, 3, 4, 5]

// Essa é uma forma de zerar uma array, lembre-se que não dá para fazer isso usando const
lista = [] 

// Outra forma de zerar uma array, usando o 'length' você declara que o número de carácteres é 0
lista.length = 0

// Uma outra forma de zerar uma array, você declara que a partir do index 0 ele vai excluir todos os carácteres da array
lista.splice(0, lista.length)

console.log(lista)