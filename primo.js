const numero = Number(prompt("Digite um número:"))
let validacao = 0

for ( i = 1; i <= numero; i++) {
    if (numero > 1 && numero % i === 0) {
        validacao++
    }
    if (validacao > 2) {
        break
    }
}

if (validacao === 2) {
    alert(`O número ${numero} é Primo`)
} else {
    alert(`O número ${numero} não é Primo`)
}