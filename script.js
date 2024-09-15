const playerName = prompt('Olá, cidadão(ã), como se chama?')
const startMenu = prompt(`Seja bem-vindo(a), ${playerName}!
Escolha uma das opções abaixo para começar.

1- Jogar
2- Sair
    `)

const secretNumber = Math.floor(Math.random() * 11)
let attempt
let remainingAttempts = 5


switch(startMenu) {
    case '1':
        do {
        attempt = prompt('Adivinhe o número secreto (entre 1 e 10):')

        if (attempt == secretNumber) {
            alert(`Parabéns ${playerName}, você adivinhou o número secreto!`)
        break
        } else if (attempt > secretNumber) {
            alert('O número secreto é menor.')
        } else {
            alert('O número secreto é maior.')
        }


        for (remainingAttempts; remainingAttempts--;) {
            alert(`Você tem ${remainingAttempts} tentativas restantes.`)
            break
        }

    } while (remainingAttempts > 0)



    while (remainingAttempts == 0) {
        alert(`Você perdeu, o número secreto era ${secretNumber}.`)
        break
    }

        break

    case '2':
        alert('Ok, espero você de volta.')
        break
    default:
        alert('Opção inválida/inexistente.')
}
