const texto = prompt("Digite o texto aqui")
let cont_vogal = 0

for (const letra of texto.toLowerCase()) {
    if (letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u") {
            cont_vogal++
        }
}

console.log(`O texto possuí ${cont_vogal} vogais`)