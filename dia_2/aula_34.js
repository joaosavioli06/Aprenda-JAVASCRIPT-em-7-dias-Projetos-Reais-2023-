let Restaurant = 'asd'

switch (Restaurant) {
    case 'BK':
        console.log('Burger King')
        break
    case 'MC':
        console.log('Mac Donalds')
        break
    case 'BOBS':
        console.log('Bobs')
        break
    default:
        console.log('Inexistant restaurant')
}

// O objetivo do switch case, é analisar uma variável, verificar o resultado dela e retornar o valor específico dela
// É necessário utilizar os breaks, para caso o resultado da variável já tenha sido achado, a operação termine
// O default é usado para caso a análise da variável não retorne nenhum caso