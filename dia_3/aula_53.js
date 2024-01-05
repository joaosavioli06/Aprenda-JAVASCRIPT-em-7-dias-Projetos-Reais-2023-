// O que é um Constructor?
// É um construtor de objetos, assim como o Factory também é

// O constructro costuma ser um pouco mais simples, com menos linhas
// Exemplo abaixo:

function CreateBook (author, name, year) {
    this.Bookauthor = author;
    this.Bookname = name;
    this.Bookyear = year; 
}

// A criação da função é a mesma
// Dentro da função, você utiliza o "this" e depois a atribuição do parâmetro

const book1 = new CreateBook('John', 'Circles Adventures', 2006)

// Na criação da variável, você precisa colocar um "new" antes da criação do obj

console.log(book1)