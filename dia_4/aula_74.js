// Como filtrar uma array com o 'filter'

// O 'filter' serve para filtrar uma array, retornando valores de uma função, de uma forma escrita (vamos se dizer)
// Abaixo, temos uma função encurtada pelo Array Function, que retorna no terminal as tempeartura de Tietê
// Mas dessa vez, ela retorna os valores mesmo, não um resultado boolean


let tempTiete = [34, 32, 30, 28, 27]

let tempPst = tempTiete.filter(Positive => Positive >= 0)

console.log(tempPst)
