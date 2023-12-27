// [EN] Factory = [BR] Indústria

// Uma "factory" no JS é basicamente uma função que cria objetos de uma maneira mais ágil

function createBook (name, author, pages) {
    book = {
        bookName: name,
        bookAuthor: author,
        bookPages: pages,
    }
    return book
}

const book1 = createBook('Circles', 'John Sav', 410)
console.log(book1)

// A factory é uma função com a utilidade de agilizar a criação de objetos
// Você cria uma função com um nome e depois os parâmetros da função
// Depois coloca o objeto e suas propriedades, linkando as com os parâmetros
// Utilize o "return" para retornar os valores para a função

// Após isso, você já pode criar o seu objeto da seguinte forma:
// const "nome do obj" = "nome da factory" ('Valor1', 'Valor2')

