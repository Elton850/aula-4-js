let saldo = 1000

while (true) {
    const menu = Number(prompt("Bem-vindo!\n1 - Ver saldo\n2 - Fazer Saque\n3 - Fazer Depósito\n4 - Sair"))
    
    switch (menu) {
        case 1:
            alert(`Saldo atual: ${saldo}`)
            break
        case 2:
           const saque = Number(prompt(`Quanto deseja sacar?\n(Saldo atual disponível: ${saldo})`))
            if (saque > 0 && saque <= saldo) {
                saldo -= saque
                alert(`Saldo atual: ${saldo}`)
            } else {
                alert("Operação inválida, verifique o saldo disponível para saque e o valor inserido no campo para saque")
            }
            break
        case 3:
            const deposito = Number(prompt(`Quanto deseja depositar?\n(Saldo atual disponível: ${saldo})`))
            if (deposito > 0 ) {
                saldo += deposito
                alert(`Depósito efetuado!\n(Saldo atual: ${saldo})`)
            } else {
                alert("Operação inválida, verifique o saldo disponível para saque e o valor inserido no campo para saque")
            }
            break
        case 4:
            alert("Até a Próxima")
            break
        default:
            alert("Operação inválida, verifique o saldo disponível para saque e o valor inserido no campo para saque")
            break
        }

    if (menu === 4) {
        break
    }
}