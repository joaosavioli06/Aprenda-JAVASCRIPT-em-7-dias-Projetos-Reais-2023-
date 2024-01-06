// Adicionando valores em uma array

const contagem = [5, 6, 7]

contagem.push(8, 9, 10)
// Adiciona valores no final de uma array
// Nesse caso, esses valores vão ser adicionados depois do 7 

contagem.unshift(1, 2, 3)
// Adiciona valores no início de uma array
// Esses valores vão ser inseridos antes do 5

contagem.splice(3, 0, 4)
// Adiciona valores no meio de uma array
// Você precisa passar 3 informações para o Splice inserir o valor
// ('index de início', 'Quantos eu quero deletar daq para frente', 'valores que quero inserir')

console.log(contagem)