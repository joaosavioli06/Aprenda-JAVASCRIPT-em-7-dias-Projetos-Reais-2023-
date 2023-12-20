// Aqui usaremos um for of loop

const friends = ['Joshua', 'Andrew', 'Leo', 'Austin']

for(i of friends){
    console.log(i)
}

// Ele é extremamente similar ao loof por in, mas qual a difrença?
// Como estamos utilizando um array, se utilizasemos o loop for in:

// for(i in friends){
// console.log(i)
// }

// Ele retornaria isso: 0, 1, 2
// Ele retorna isso, pois ele conta os index dentro de friends, e não valor do index

// Neste caso, utilizando o "of" no lugar do "in", e só precisando printar a variável "i"
// É possível utilizar o for of loop, outro exemplo abaixo:

const Randomnum = [1, 18, 54, 32, 8, 70, 27]

for (a of Randomnum){
    console.log(a)
}