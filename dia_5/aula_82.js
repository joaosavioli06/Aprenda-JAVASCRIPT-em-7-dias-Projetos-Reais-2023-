// Argumentos em funções

// No JavaScript chamamos as referências dos parâmetros de uma função, chamado "arguments"

// Aqui temos uma função extremamente comum em JS, mas perceba as seguintes situações

function price (a, b) {
    return a + b
}

console.log(price(20))

/* Caso eu só passe um dos valores dos parâmetros (só passei o valor de "a") 
Ele vai dar "NaN" como resposta, pois o valor "b" é undefined, pois não foi
passado nada.
*/

// Caso 2

function price (a, b) {
    return a + b
}

console.log(price(20, 30, 40, 50, 60 ,70))

/* Se eu passar mais de um valor, ele não vai somar todos, pois só posso
passar 2 valores, que são o "a" e o "b"
*/

// Como resolver um problema como esse? Use a função "arguments"

function account () {
    let total = 0
    for (let value of arguments)
    total += value
    return total
}

console.log(account(20, 30, 100, 200))

/* Aqui temos uma função que se chama "account"
Eu primeiro defino seu valor total, que é igual a 0
Depois faço um loop, que faz com que cada valor dos argumentos 
(referência dos parâmetros da função) seja executado pela conta
total += value, ou melhor: o total é "total" + value = total
*/