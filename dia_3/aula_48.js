// Criando um objeto
// Vale mais a pena criar um objeto com várias propriedades, do que várias variáveis soltas

let bookName = 'The storytale'
let bookChapters = 18
let bookPages = 249

// Invés de criar várias variáveis soltas, vale mais a pena criar um obejto com propriedades organizadas

book = {
    bookName: 'The storytale',
    bookChapters: 18,
    bookPages: 249,
}

// Dentro de um objeto se utiliza ":" ao invés de "="
// Depois você coloca uma vírgula para continuar com a outra propriedade

book = {
    bookName: 'The storytale',
    bookChapters: 18,
    bookPages: 249,
    chaptersName: {
        chap1: 'The old story',
        chap2: 'The Man',
        chap3: 'Who has killed them?'
    }
}

// Aqui eu criei uma propriedade com propriedades dentro dela (chaptersName)

console.log(book)