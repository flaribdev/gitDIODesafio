let jogador = "Novato"
let numeroVitorias = 200
let numeroDerrotas = 5

function rank(jogador, vitorias, derrotas) {

    let nivel =""
    let saldoVitorias = vitorias-derrotas

    if (saldoVitorias < 10) {
        nivel = "Ferro"
    }else if(saldoVitorias < 20){
        nivel = "Broonze"
    }else if(saldoVitorias < 50){
        nivel = "Prata"
    }else if(saldoVitorias < 80){
        nivel = "Ouro"
    }else if(saldoVitorias < 90){
        nivel = "Diamante"
    }else if(saldoVitorias < 100){
        nivel = "Lendário"
    }else {
        nivel = "Imortal"
    }

    console.log("O Herói tem saldo de ", saldoVitorias, " está no nível de ",nivel)
}

rank(jogador, numeroVitorias, numeroDerrotas)