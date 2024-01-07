// Localizando itens em uma array de referência

// Neste caso, temos uma array com vários itens com descrições dentro dela
// Caso você queira procurar por algum filme dentro do array, não será possível usar o 'includes'

const movies = [
    {id: 1, movieName: 'The Matrix'},
    {id: 2, movieName: 'Pulp Fiction'},
    {id: 3, movieName: 'The Godfather'}
]

// Aqui em cima, eu criei a array com os filmes

console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix'
} ))

// Caso eu queira achar o filme dentro da array, eu tenho que utilizar o find junto com uma função
// Não é possível usar o find sem a função

// Se é uma array com várias referências, vai ter que usar o 'find'