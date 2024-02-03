const texto = prompt("Digite seu texto")
let texto_formatado = ""


for (const letra of texto.split('').reverse().join('')) {
    texto_formatado += letra.toLowerCase()
}

if (texto.toLowerCase() === texto_formatado) {
    console.log(texto)
    console.log(texto_formatado)
    alert("O texto é um Palíndromo")
} else {
    console.log(texto)
    console.log(texto_formatado)
    alert("O texto não é um Palíndromo")
}