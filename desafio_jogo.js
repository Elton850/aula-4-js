const dado = Math.floor(Math.random() * (6 + 1))
let comparador_1 = 0
let comparador_2 = 0

while(true) {
    let pl1 = Number(prompt("Escolha uma das opções:\n1 - Par\n2 - Impar\n3 - Parar"))
    let pl2 = Number(prompt("Escolha uma das opções:\n1 - Par\n2 - Impar\n3 - Parar"))

    if (pl1 === 3 || pl2 === 3) {
        break
    }
    
    switch(pl1) {
        case 1:
            pl1 = 1
            break 
        case 2:
            pl1 = 2
            break
        case 3:
            break
        default:
            alert("Valor Inválido")
            break
    }

    switch(pl2) {
        case 1:
            pl2 = 1
            break 
        case 2:
            pl2 = 2
            break
        case 3:
            break
        default:
            alert("Valor Inválido")
            break
    }

    if (dado % 2 === 0) {
        if (pl1 === 1) {
            comparador_1 = 1
        }
        if (pl1 === 1) {
            comparador_2 = 1
        }
    } else {
        if (pl1 === 2) {
            comparador_1 = 1
        }
        if (pl1 === 2) {
            comparador_2 = 1
        }
    }

    if (comparador_1 > comparador_2) {
        alert("Jogador 1 venceu!")
    } else if (comparador_2 > comparador_1) {
        alert("Jogador 2 venceu!")
    } else {
        alert("empate!")
    }
}