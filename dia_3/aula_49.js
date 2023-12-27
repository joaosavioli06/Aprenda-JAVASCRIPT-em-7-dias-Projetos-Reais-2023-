book = {
    bookName: 'The storytale',
    bookChapters: 18,
    bookPages: 249,
    chaptersName: {
        chap1: 'The old story',
        chap2: 'The Man',
        chap3: 'Who has killed them?'
    }

    ,print: function(){
        console.log('Printing...')
    }
}

book.print()

// Neste exemplo, eu criei uma função dentro de um objeto e depois realizei a chamada dela
// Dentro do obj, definimos o nome da função, que nesse caso é "print"
// Depois definimos o que a função faz

// Realizando a chamada, é necessário colocar o nome do objetp + "." + propriedade / função

