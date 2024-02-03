const texto = prompt("Digite sua texto aqui:")
let text_formatado = ""

for (const letra of texto) {
    if (letra.toLowerCase() === "a" ||
        letra.toLowerCase() === "e" ||
        letra.toLowerCase() === "i" ||
        letra.toLowerCase() === "o" ||
        letra.toLowerCase() === "u"
    ) {
        continue
    }
    text_formatado += letra
}
alert(text_formatado)