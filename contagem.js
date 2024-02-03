const numero = Number(prompt("Digite um número:"))

for ( i = 0; i <= numero; i++) {
    if (numero > 0) {
        console.log(numero - i)
    } else {
        alert("Insira um valor Positivo, maior que 0")
    }
}