// Como concatenar arrays?
// Para fazer isso é bem fácil

let num = [1,2,3,4,5]
let abc = ['a', 'b', 'c']

// Primeiro eu criei duas arrays 

// Depois eu criei uma variável que vai usar o 'concat' para concatenar as duas arrays
let all = num.concat(abc)

// Para concatenar, você deve usar uma array, a função 'concat' e dentro dela a outra array

console.log(all)

// Para concatenar valores específicos de uma array, você deve fazer isso:

// Utilize a função 'slice' na variável / array que vocÊ deseja
// Você terá de informar qual é o index inicial e até qual index você vai cortar
let all2 = all.slice(4, 6)

console.log(all2)