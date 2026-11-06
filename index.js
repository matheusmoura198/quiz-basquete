const prompt = require("prompt-sync")()

// Dados do jogador
let nome = prompt("Digite seu nome: ")

let continuar = "sim"

// perguntas organizado por dificuldade
const dificuldades = [
    {
        nome: "Fácil",
        perguntas: [
            {
                pergunta: "Quantos jogadores de cada equipe ficam em quadra?",
                alternativas: ["4", "5", "6", "7"],
                resposta: 2
            },
            {
                pergunta: "Quantos pontos vale um lance livre convertido?",
                alternativas: ["1", "2", "3", "4"],
                resposta: 1
            },
            {
                pergunta: "Qual destes fundamentos é utilizado para passar a bola?",
                alternativas: ["Arremesso", "Passe", "Rebote", "Bloqueio"],
                resposta: 2
            }
        ]
    },
    {
        nome: "Médio",
        perguntas: [
            {
                pergunta: "Quantos pontos vale uma cesta de trás da linha de três?",
                alternativas: ["1", "2", "3", "4"],
                resposta: 3
            },
            {
                pergunta: "Quantos períodos tem uma partida da NBA?",
                alternativas: ["2", "3", "4", "5"],
                resposta: 3
            },
            {
                pergunta: "Qual é o nome do fundamento de quicar a bola enquanto se movimenta?",
                alternativas: ["Passe", "Drible", "Rebote", "Arremesso"],
                resposta: 2
            }
        ]
    },
    {
        nome: "Difícil",
        perguntas: [
            {
                pergunta: "Na NBA, quantas faltas pessoais eliminam um jogador da partida?",
                alternativas: ["4", "5", "6", "7"],
                resposta: 3
            },
            {
                pergunta: "Quantos segundos uma equipe tem para realizar um arremesso na NBA?",
                alternativas: ["14", "20", "24", "30"],
                resposta: 3
            },
            {
                pergunta: "Quantos segundos um jogador pode permanecer no garrafão adversário na NBA?",
                alternativas: ["3", "5", "8", "10"],
                resposta: 1
            }
        ]
    }
]

// Menu principal
do {
    console.log(`
================================
       QUIZ DE BASQUETE
================================

Bem-vindo, ${nome}!

1 - Jogar
2 - Ver regras
3 - Sair

================================
`)

    let opcao = Number(prompt("Escolha uma opção: "))

    // switch para o menu
    switch (opcao) {

        case 1: {
            let pontos = 0
            let vidas = 3
            let acertos = 0

            console.log(`
================================
       ESCOLHA A DIFICULDADE
================================

1 - Fácil
2 - Médio
3 - Difícil
`)

            let escolha = Number(prompt("Digite a dificuldade: "))

            // Validação da dificuldade
            while (
                !Number.isInteger(escolha) ||
                escolha < 1 ||
                escolha > 3
            ) {
                console.log("Dificuldade inválida!")
                escolha = Number(prompt("Escolha entre 1 e 3: "))
            }

            // array da dificuldade escolhida
            let perguntas = dificuldades[escolha - 1].perguntas

            console.log(`
================================
Dificuldade: ${dificuldades[escolha - 1].nome}
Boa sorte, ${nome}!
================================
`)

            // for para percorrer as perguntas
            for (
                let i = 0;
                i < perguntas.length && vidas > 0;
                i++
            ) {
                console.log(`
Pergunta ${i + 1}:
${perguntas[i].pergunta}
`)

                // Exibindo as alternativas
                for (
                    let j = 0;
                    j < perguntas[i].alternativas.length;
                    j++
                ) {
                    console.log(
                        `${j + 1} - ${perguntas[i].alternativas[j]}`
                    )
                }

                let resposta = Number(prompt("Sua resposta: "))

                // while para validar a resposta
                while (
                    !Number.isInteger(resposta) ||
                    resposta < 1 ||
                    resposta > perguntas[i].alternativas.length
                ) {
                    console.log("Alternativa inválida!")
                    resposta = Number(prompt("Digite uma opção válida: "))
                }

                // Estrutura if e else para verificar a resposta
                if (resposta === perguntas[i].resposta) {
                    console.log("Resposta correta!")
                    pontos += 10
                    acertos++
                } else {
                    console.log("Resposta errada!")
                    vidas--
                }

                console.log(`
--------------------------------
Pontos: ${pontos}
Vidas restantes: ${vidas}
--------------------------------
`)
            }

            // Operador ternário para classificação
            let classificacao =
                pontos >= 30 ? "Lenda das Quadras" :
                pontos >= 20 ? "Craque" :
                pontos >= 10 ? "Jogador Promissor" :
                "Iniciante"

            let resultado = acertos > 0
                ? "Você conseguiu acertar perguntas!"
                : "Você precisa treinar mais!"

            console.log(`
================================
          RESULTADO FINAL
================================

Jogador: ${nome}
Dificuldade: ${dificuldades[escolha - 1].nome}
Acertos: ${acertos}
Pontuação: ${pontos}
Vidas restantes: ${vidas}
Classificação: ${classificacao}
Resultado: ${resultado}

================================
`)

            break
        }

        case 2:
            console.log(`
================================
              REGRAS
================================

- Cada resposta correta vale 10 pontos.
- Você começa com 3 vidas.
- Cada resposta errada custa uma vida.
- Cada dificuldade possui 3 perguntas.
- Escolha uma alternativa de 1 a 4.
- O jogo termina quando as perguntas
  acabam ou suas vidas chegam a zero.

================================
`)
            break

        case 3:
            console.log(`Até a próxima, ${nome}!`)
            continuar = "não"
            break

        default:
            console.log("Opção inválida!")
            break
    }

    // Pergunta se deseja voltar ao menu
    if (continuar === "sim") {
        continuar = prompt(
            "Deseja voltar ao menu? (sim/não): "
        ).toLowerCase()
    }

} while (continuar === "sim")

console.log(`
================================
Obrigado por jogar, ${nome}!
Até a próxima!
================================
`)
