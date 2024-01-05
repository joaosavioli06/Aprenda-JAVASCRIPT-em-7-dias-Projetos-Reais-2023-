let cadastro = Number(prompt('Qual é o preço do seu produto? '))

if (cadastro >= 20){
    document.getElementById('productPrice').innerHTML = 'Approved'
} else {
    document.getElementById('productPrice').innerHTML = 'Denied'
}