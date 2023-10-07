console.log('Javascript está funcionando')

let firstName = ('João Gabriel');
let lastName = ('Savioli');
let colorEyes = ('Castanho');
let gender = ('Masculino');
let skin = ('White');
let height = 1.70;
const price = 350;

console.log(firstName)
console.log(lastName)
console.log(colorEyes)
console.log(gender)
console.log(skin)
console.log(height)
console.log(price)


// Aqui eu defini o nome de uma variável do tipo string
let product = 'pen'

// Aqui eu defini o número de uma variável de tipo numérica 
let pricePen = 3

// Aqui eu defini uma variável de tipo boolean
let available = true

// Aqui eu defini uma variável de tipo undefined (indefinida). Ele não está recebendo nenhum valor, então ela está indefinida até que algo seja inserido nela
let whereIget

// Atenção: aqui eu utilizei o termo null em uma variável já existente. O termo null "reseta" o valor da variável, fazendo com que você possa reutilizar ela inserindo um novo dado de sua preferência
pricePen = null

// Aqui eu estou inserindo o novo valor depois de utilizar o null, fazendo com que eu posso reutilizar esta variável
pricePen = 1

console.log(product)
console.log(pricePen)
console.log(available)
console.log(whereIget)
console.log(pricePen)

// Utilizando o type of, ele mostra para você qual é o tipo de variável no console, neste caso, essa variável é do tipo string
console.log(typeof product)

// Aqui eu criei um objeto em JS e coloquei suas propriedades dentro dele
let pen = {
    product: 'Pen',
    pricePen: 1,
    available: true,
    itemColor: 'blue'
}

console.log(pen)

// Aqui eu mudei a cor de uma propriedade que está dentro do objeto
pen.itemColor = 'red'

console.log(pen)



// Aqui eu criei uma lista em JS. O index delas são, 0, 1, 2 e por aí vai
lista = ['João', 'Anastácio', 'Pedro']

// Aqui eu pedi para ele mostrar para mim o index de número 1 da lista
console.log(lista[1])

// Eu também posso mudar o dado, nome, valor ou qualquer coisa de um index, basta fazer isso:
lista[2] = 'Renata'

console.log(lista)

// Aqui eu criei uam função para descrever a situação de uma casa. Eu primeiro o nome dessa função, que se chama houseStatus
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