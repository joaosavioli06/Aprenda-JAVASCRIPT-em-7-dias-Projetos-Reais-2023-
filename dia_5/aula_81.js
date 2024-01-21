// Hoisting
// O JS automaticamente move as funções para cima, para elas serem executadas primeiro

// Como podemos saber se isso funciona na prática? Vamos tentar com algoritmos da aula anterior

shirtPrice('$ 60,00')

function shirtPrice (price) {
    console.log(`The shirt's price is:`, price)
}

// Aqui ele vai funcionar normalmente

// Caso 2

shoe()

const shoe = function() {
    console.log('My shoes are the best!')
}

// Aqui ele já não funciona, pois como a função está dentro de uma variável, a variável não pode ser executada antes de ser definida


