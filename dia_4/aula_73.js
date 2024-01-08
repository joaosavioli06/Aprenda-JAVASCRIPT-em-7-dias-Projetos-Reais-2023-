// Verificando itens dentro de uma array

// Nós podemos verificar coisas específicas dentro de uma array por meio de funções

// O exemplo abaixo mostra isso:

let tempSorocaba = [33, 31, 30, 29, 27]

// Aqui eu defini temperaturas de Sorocaba

let tempPositive = tempSorocaba.every(function (Positive) {
    return Positive >= 0
})

// Aqui eu criei uma variável com o nome 'tempPositive' que usa o 'every'
// O 'every' checa todos os itens de uma array
// A função criada se chama 'Positive'. Ela irá returnar 'true' se todos os itens da array forem maiores ou iguais a zero
// Caso tenha um valor negativo, ela vai retornar 'false'

console.log(tempPositive)