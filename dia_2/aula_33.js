// em uma estrutura condicional, ela sempre inicia com o IF e normalmente se encerra com o ELSE
// no meio da estrutura, é possível colocar quantos ELSE IF quiser

Driverspeed = 38

if (Driverspeed > 110){
    console.log('Driving too fast')
} else if (Driverspeed > 40 && Driverspeed <= 110){
    console.log('The speed is ok')
} else {
    console.log('Driving too slow')
}