// Tipos de funções

// Function Declaration
// Função na qual você declara um nome para ela, exemplo abaixo:

function shirtPrice (price) {
    console.log(`The shirt's price is:`, price)
}

shirtPrice('$ 60,00')

// Aqui eu declarei um nome para a função (shirtPrice), e tenho que chamá-la pelo nome

// Function Expression
// Função na qual você não declara um nome para ela

const shoe = function() {
    console.log('My shoes are the best!')
}

shoe()

// A função não tem um nome, mas a variável em que ela se armazena sim

// O engraçado, é que ela pode sim ser armazenda novamente dentro de outra variável
// Vemos isso no caso abaixo:

let backpag = shoe

backpag()