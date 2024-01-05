// Object built in = String
// A string pode fazer várias coisas interessantes, como:

// Estrutura para chamar uma propriedade da String:
// console.log('variável' + . + nome da propriedade)

let message = 'Hey, my name is João Gabriel'
console.log(message.length)

// Aqui eu usei a propriedade "length", que me fornece quantos caracteres eu tenho na variável

console.log(message.endsWith('el'))

// A propriedade 'endsWith' me mostra se a variável termina com alguma informação, neste caso é 'el', que retornará

console.log(message.includes('Hey'))

// A propriedade 'includes' me mostra se a informação que eu pedi se inclui na variável

console.log(message.toLocaleUpperCase())

// Essa propriedade trasnforma o valor da variável em letra maiúscula