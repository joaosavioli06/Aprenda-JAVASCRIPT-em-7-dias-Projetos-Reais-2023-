let num1 = '1'
let num2 = 1

console.log(num1 === num2)

//Aqui eu fiz uma comparação de igualdade, verifiquei se as duas variáveis são iguais
// Quando utilizamos o === , queremos saber se ele tem tipo e valor igual
// Agora o == , quer apenas saber se o valor é igual

let num3 = '2'
let num4 = 2

console.log(num1 === num2) // False, pois o num3 é uma string e o num4 é um number
console.log(num1 == num2) // True, pois os valores são iguais

//=== é Strict (estrito)
//== é Lose (Só quer saber o valor)