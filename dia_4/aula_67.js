// O que é uma Arrow Function?

// Uma Arrow Function (=>) é que nem uma função, só que de uma forma bem encurtada

// Utilizando o exemplo anterior, dá para entender um pouco melhor

const movies = [
    {id: 1, movieName: 'The Matrix'},
    {id: 2, movieName: 'Pulp Fiction'},
    {id: 3, movieName: 'The Godfather'}
]

// Neste exemplo, temos uma Arrow Function que nos mostra bem sua utilização
// Utilizando '=>', eu estou falando que isso é uma 'function' e o 'return' está incluso

console.log(movies.find(movie => movie.movieName == 'The Matrix' ))

// Explicação detalhada:
// Função 'movie' criada (movie está dentro de 'movieName')
// Quero que busque dentro dela, um 'movieName' com o nome igual a 'The Matrix' 
// Caso exista 'The Matrix' dentro de movieName, me mostre no terminal