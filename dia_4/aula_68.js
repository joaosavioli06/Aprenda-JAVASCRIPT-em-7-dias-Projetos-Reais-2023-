// Como remover itens dentro de uma array?

const num = [5, 6, 7, 8]
// Criei a array

const final = num.pop()
// A função 'pop' retira o último item da array

const final2 = num.shift()
// A função 'shift' retira o primeiro item da array

const final3 = num.splice(0, 1)
// A função 'splice' retira um item no meio da array
// É necessário especificar a partir de qual index e quantos itens serão retirados

console.log(num)

console.log(final3)
// Esse console.log serve para ver qual foi o último item retirado da array