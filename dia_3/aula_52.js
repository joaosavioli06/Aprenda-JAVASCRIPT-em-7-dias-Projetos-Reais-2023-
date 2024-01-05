// Aqui podemos ver como adicionar uma propriedade em um obj já existente
// Podemos fazer isso sem ter que alterá-lo diretamente

function Createmovie (name, year, genre) {
    movie = {
        movieName: name,
        movieYear: year,
        movieGenre: genre,
    }
    return movie
}

const movie1 = Createmovie ('Star Wars', 1977, 'Ficção Científica')
console.log(movie1)

// Aqui nós vemos como alterá-lo
// Você só precisa escolher o obj + criar o novo parâmetro + Colocar o valor ou informação

movie1.movieDirector = 'George Lucas'
console.log(movie1)

const movie2 = Createmovie('Pulp Fiction', 1995, 'Ação')
console.log(movie2)

// Aqui eu fiz a mesma coisa

movie2.movieDirector = 'Tarantino'
console.log(movie2)




