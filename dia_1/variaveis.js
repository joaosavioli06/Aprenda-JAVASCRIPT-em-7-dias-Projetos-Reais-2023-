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