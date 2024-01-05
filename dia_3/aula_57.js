// Template Literals
// Servem para deixar uma mensagem que deve conter espaços, ser feita de uma melhor maneira

const email = 'Hello Andrew,\nthe meeting is confirmed! \nJohn'

console.log(email)

// Fazendo uma mensagem desta forma, a mensagem vai sair do jeito que quero no terminal
// Mas será que essa é forma mais inteligente de fazer isso? Não

// Usando uma template literal, essa tarefa pode ser mais fácil. 
// Você apenas precisa seguir algumas regras

// Utilize `` invés de '' ou ""
// Dentro da variável, você já pode pular a linha

const email2 = `Hello Andrew,
The meeting is confirmed! 
John`

console.log(email2)

// Caso queira utilizar alguma variável dentro de uma template literal, é só fazer isso:
// $ { nome da variável aqui }

const name = 'Carlo'

const email3 = `Hi ${name}
Are you ok?`

console.log(email3)