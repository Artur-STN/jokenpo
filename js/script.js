var player;
var computer;

function insertOptionComputer() {

    let numberRandom = Math.floor(Math.random() * 3)

    let srcImages = [

        'imagens/papel.png',
        'imagens/tesoura.png',
        'imagens/pedra.png'

    ]

    let valores = [

        'papel',
        'tesoura',
        'pedra'

    ]

    document.getElementById('optionComputer').src = srcImages[numberRandom]

    computer = valores[numberRandom]

}

function verificaSrcImagem(srcParams) {

    if (srcParams == 'imagens/papel.png') {

        player = 'papel'

    } else if (srcParams == 'imagens/tesoura.png') {

        player = 'tesoura'

    } else if (srcParams == 'imagens/pedra.png') {

        player = 'pedra'

    }
    
}

function verificaGanhador() {

    let resultado = document.getElementById('resultado')

    if (player == 'papel') {

        if (computer == 'papel') {

            resultado.innerHTML = 'EMPATE'
            resultado.style.color = '#FCAB10'

        } else if (computer == 'tesoura') {
    
            resultado.innerHTML = 'DERROTA'
            resultado.style.color = '#F8333C'
    
        } if (computer == 'pedra') {
    
            resultado.innerHTML = 'VITÓRIA'
            resultado.style.color = '#3BC14A'
    
        }

    } else if (player == 'tesoura') {

        if (computer == 'papel') {

            resultado.innerHTML = 'VITÓRIA'
            resultado.style.color = '#3BC14A'

        } else if (computer == 'tesoura') {
    
            resultado.innerHTML = 'EMPATE'
            resultado.style.color = '#FCAB10'
    
        } if (computer == 'pedra') {
    
            resultado.innerHTML = 'DERROTA'
            resultado.style.color = '#F8333C'
    
        }

    } if (player == 'pedra') {

        if (computer == 'papel') {

            resultado.innerHTML = 'DERROTA'
            resultado.style.color = '#F8333C'

        } else if (computer == 'tesoura') {
    
            resultado.innerHTML = 'VITÓRIA'
            resultado.style.color = '#3BC14A'
    
        } if (computer == 'pedra') {
    
            resultado.innerHTML = 'EMPATE'
            resultado.style.color = '#FCAB10'
    
        }

    }
    
}

function insertOptionPlayer(params) {

    document.getElementById('optionPlayer').src = params

    insertOptionComputer()

    verificaSrcImagem(params)
    
    verificaGanhador()

}
