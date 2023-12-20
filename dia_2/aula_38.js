// Aqui encontramos um loop for in

const Mycar = {
    model: 'Nissan',
    year: 2022,
    km: 30000
}

// Criamos um objeto e suas propriedades

for (let i in Mycar)
    console.log(i, Mycar[i])

// Depois realizamos um loop for in

// i é apenas um nome de variável usado para representar cada propriedade do 
// objeto Mycar durante o loop. Poderia ser qualquer nome, mas i é 
// uma convenção comum.

// for (let i in Mycar) = nesta linha, pedimos para que o loop mostre cada nome
// das propriedades dentro do objeto Mycar. Realizando esta operação com isso:   console.log(i)

// Mycar[i] = isso é utilizado para retornar o valor de cada propriedade do Mycar