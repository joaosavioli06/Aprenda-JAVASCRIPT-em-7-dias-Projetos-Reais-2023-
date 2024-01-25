// Não precisa colocar nomes nas funções

// Criando uma função que recolhe os dados de ID's no HTML
// A variável "conta" pega o valor gasto 
// A variável "gorjeta" é um input range de 0 a 100 %
// A variável valor é o valor da gorjeta a ser dada ao garçom

function howMany() {
    let numPessoas = document.getElementById('splitInput').value
    
    if (numPessoas == 1)
    document.getElementById('splitValue').innerText = numPessoas + ' Pessoa'
    else 
    document.getElementById('splitValue').innerText = numPessoas + ' Pessoas'
}

function casas(num){
    num = num.toFixed(2) 
    return 'R$ ' + num
}

function suaConta () {
    let conta = Number(document.getElementById('yourBill').value)
    let gorjeta = document.getElementById('tipInput').value
    let dividirGorjeta = document.getElementById('splitInput').value
     
    let valorGorjeta = conta * (gorjeta / 100)
    let contaTotal = conta + valorGorjeta
    let gorjetaTotal = contaTotal / dividirGorjeta


    document.getElementById('tipPercent').innerText = gorjeta + ' %'
    document.getElementById('tipValue').innerText = casas(valorGorjeta)
    document.getElementById('totalWithTip').innerText = 'R$ ' + contaTotal
    document.getElementById('splitInput').innerText = howMany(splitValue)
    document.getElementById('billEach').innerText = casas(gorjetaTotal)
    
}

// Fazer 3 cálculos:
// Um cálculo do valor da gorjeta
// Cálculo da conta do restaurante + gorjeta
// Calculo de quanto cada um deve pagar pelo valor total da conta do restaurante