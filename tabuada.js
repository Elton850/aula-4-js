const numero = Number(prompt("Escolha um número:"))

    console.log(`Tabuada do número: ${numero}`)
    for (i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`)
}