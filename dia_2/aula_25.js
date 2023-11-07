let num1 = 5
let num2 = 10

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

// Também temos o encremento e decremento, eles são o ++ e --
// No exemplo abaixo temos uam situação em que ele é aplicado

total = num1 + num2
console.log(total)

//Fiz uma estrutura na qual eu armazeno uma soma de duas variáveis

console.log(++total)

//Aqui eu utilizei o encremento antes da variável dentro do console.log, o que significa que vai ser 15 + 1 = 16
//O encremento adiciona +1 e o decremento -1
// Ele pode ser usado antes e depois de uma variável, como os exemplos mostram:

total2 = num1 + num2
console.log(--total2) //14 (tive que criar uma variável nova, pois a variável total fica com o valor gravado depois de utilizar um encremento, até onde consegui entender)

total3 = num1 + num2
console.log(total3++) //Aqui eu defini a variável com o encremento, até fiz a chamada no console, mas ela não funciona assim, vc tem que chamar ela dnv
console.log(total3) //Aqui vai dar 16, pois somou o 15 + 1 
