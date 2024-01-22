// Parâmetros default em uma função

// Vamos se dizer que eu queira fazer uma função com valores que já são predefinidos
// Como posso facilitar a execução dessa função?
// Por usar parâmetros default, ou melhor, que já são fixos

// Exemplo de financiamento de carro

function financiamento (preco, juros, anos) {
    return preco * juros / 100 * anos
}

console.log(financiamento(20000, 2.5, 5))

/* Nesta minha função, vamos se dizer que eu queira deixar
o juros fixo em 2.5% e 5 anos de financiamente, a única coisa que pode
ser alterada é o preço do carro. Como facilitar isso sem ter que digitar?
Resposta abaixo
*/

function financiamento (preco, juros = 2.5, anos = 5) {
    return (preco * juros / 100 * anos) + preco
}

console.log(financiamento(10000))

/* Aqui eu já deixei 2 valores como padrão e ainda de quebra
fiz com que o valor do juros fosse somado com o valor do preço do carro*/