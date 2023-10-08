// Aqui eu criei uma lista em JS. O index delas são, 0, 1, 2 e por aí vai
lista = ['João', 'Anastácio', 'Pedro']

// Aqui eu pedi para ele mostrar para mim o index de número 1 da lista
console.log(lista[1])

// Eu também posso mudar o dado, nome, valor ou qualquer coisa de um index, basta fazer isso:
lista[2] = 'Renata'

console.log(lista)

// Aqui eu criei uma função para descrever a situação de uma casa. Eu primeiro o nome dessa função, que se chama houseStatus
// Depois eu defino os parâmetros dessa função, neste caso o único parâmetro que existe é o situation
// Após definir um parâmetro, eu defino qual é a operação dentro desta função. Como é possível ver, eu coloquei a operação no console.log dentro da função

function houseStatus(situation){
    console.log('The house is ' + situation)
}

// Aqui é onde eu coloco os argumentos que operam diretamente nos parâmetros 
houseStatus('Free')

// Função um pouco mais avançada:

function poloLacoste(color, price, month ){
    console.log('My Lacoste Polo is ' + color + ', the price was' + price + ' and I bought it on ' + month)
}

poloLacoste('red', ' R$350,00', 'October')

// Função matemática

function percentage10 (price){
   return price - (price * 10 / 100)
}

console.log(percentage10(100))

// Nesta função eu calculei o desconto de 10% de um item no qual eu escolho o preço