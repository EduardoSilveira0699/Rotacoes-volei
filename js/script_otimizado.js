// 1. DADOS UNIFICADOS (Texto + Coordenadas juntos)
const rotationsData = {
    1: {
        desc: "1-Rotação-2: O Levantador do time da esquerda inicia na posição 1 sacando.\nO time da direita forma uma linha de passe com o Levantador na posição 2.",
        positions: {
            "L-Lev": { x: -3, y: 88 }, "L-P2": { x: 10, y: 50 }, "L-L": { x: 26, y: 25 },
            "L-P1": { x: 45, y: 40 }, "L-C1": { x: 45, y: 55 }, "L-O": { x: 45, y: 70 }, "L-C2": { x: 20, y: 115 },
            "R-Lev": { x: 55, y: 10 }, "R-L": { x: 82, y: 20 }, "R-P2": { x: 85, y: 55 },
            "R-P1": { x: 80, y: 85 }, "R-C1": { x: 65, y: 95 }, "R-O": { x: 96, y: 60 }, "R-C2": { x: 80, y: 115 }
        }
    },
    2: {
        desc: "6-Rotação-1: O Ponteiro 1 do time da esquerda está no saque.\nO time da direita forma uma linha de passe com o Levantador na posição 1, Ponteiro 1 atacando na saida de rede e o Oposto atacando na entrada de rede.",
        positions: {
            "L-Lev": { x: 20, y: 80 }, "L-P1": { x: -3, y: 88 }, "L-C1": { x: 45, y: 55 },
            "L-O": { x: 45, y: 70 }, "L-P2": { x: 45, y: 40 }, "L-L": { x: 26, y: 25 }, "L-C2": { x: 20, y: 115 },
            "R-P1": { x: 80, y: 20 }, "R-C1": { x: 55, y: 65 }, "R-O": { x: 70, y: 95 },
            "R-P2": { x: 83, y: 75 }, "R-L": { x: 85, y: 45 }, "R-Lev": { x: 83, y: 10 }, "R-C2": { x: 80, y: 115 }
        }
    },
    3: {
        desc: "5-Rotação-6: O central 1 do time da esquerda está no saque, o libero sai.\nO time da direita forma uma linha de passe com o Levantador na posição 6, Ponteiro 2 atacando na entrada de rede e o Oposto atacando na saida de rede normalmente.",
        positions: {
            "L-Lev": { x: 20, y: 80 }, "L-P1": { x: 10, y: 50 }, "L-C1": { x: -3, y: 88 },
            "L-O": { x: 45, y: 70 }, "L-P2": { x: 45, y: 40 }, "L-L": { x: 20, y: 115 }, "L-C2": { x: 45, y: 55 },
            "R-P1": { x: 83, y: 20 }, "R-C1": { x: 65, y: 5 }, "R-O": { x: 55, y: 15 },
            "R-P2": { x: 80, y: 85 }, "R-L": { x: 85, y: 55 }, "R-Lev": { x: 60, y: 30 }, "R-C2": { x: 80, y: 115 }
        }
    },
    4: { 
        desc: "4-Rotação-5: O Oposto do time da esquerda está no saque, libero volta.\nO time da direita forma uma linha de passe com o Levantador na posição 5.",
        positions: {
            "L-Lev": { x: 45, y: 70 }, "L-P1": { x: 10, y: 50 }, "L-C1": { x: 20, y: 115 },
            "L-O": { x: -3, y: 88 }, "L-P2": { x: 45, y: 40 }, "L-L": { x: 26, y: 25 }, "L-C2": { x: 45, y: 55 },
            "R-P1": { x: 85, y: 55 }, "R-C1": { x: 80, y: 115 }, "R-O": { x: 60, y: 5 },
            "R-P2": { x: 80, y: 85 }, "R-L": { x: 83, y: 20 }, "R-Lev": { x: 65, y: 65 }, "R-C2": { x: 70, y: 95 }
        }
    },
    5: {
        desc: "3-Rotação-4: O Ponteiro 2 do time da esquerda está no saque.\nO time da direita forma uma linha de passe com o Levantador na posição 4 (escadinha) entrando na rede, Oposto no fundo atacando na linha dos 3m.",
        positions: {
            "L-Lev": { x: 45, y: 70 }, "L-P1": { x: 45, y: 40 }, "L-C1": { x: 20, y: 115 },
            "L-O": { x: 20, y: 80 }, "L-P2": { x: -3, y: 88 }, "L-L": { x: 26, y: 25 }, "L-C2": { x: 45, y: 55 },
            "R-P1": { x: 85, y: 55 }, "R-C1": { x: 80, y: 115 }, "R-O": { x: 85, y: 5 },
            "R-P2": { x: 80, y: 85 }, "R-L": { x: 83, y: 20 }, "R-Lev": { x: 55, y: 95 }, "R-C2": { x: 65, y: 90 }
        }
     },
    6: {
        desc: "2-Rotação-3: O Central 2 do time da esquerda está no saque, o libero sai.\nO time da direita forma uma linha de passe com o Levantador na posição 3.",
        positions: {
            "L-Lev": { x: 45, y: 70 }, "L-P1": { x: 45, y: 40 }, "L-C1": { x: 45, y: 55 },
            "L-O": { x: 20, y: 80 }, "L-P2": { x: 10, y: 50 }, "L-L": { x: 20, y: 115 }, "L-C2": { x: -3, y: 88 },
            "R-P1": { x: 80, y: 85 }, "R-C1": { x: 80, y: 115 }, "R-O": { x: 95, y: 30 },
            "R-P2": { x: 83, y: 20 }, "R-L": { x: 83, y: 55 }, "R-Lev": { x: 55, y: 30 }, "R-C2": { x: 65, y: 5 }
        }
     }
};

// 2. CACHE DOS ELEMENTOS (Busca no HTML apenas 1 vez)
const playersDOM = {};
let descElement = null;

// Roda assim que a página termina de carregar
window.onload = () => {
    // Guarda o elemento do texto
    descElement = document.getElementById("rotation-description");

    // Guarda os elementos dos jogadores na memória (usa a Rotação 1 como base de nomes)
    const playerIds = Object.keys(rotationsData[1].positions);
    playerIds.forEach(id => {
        playersDOM[id] = document.getElementById(id);
    });

    // Inicia na rotação 1
    setRotation(1);
};

// 3. FUNÇÃO PRINCIPAL OTIMIZADA
function setRotation(num) {
    const data = rotationsData[num];
    if (!data) {
        alert("Rotação " + num + " ainda não configurada!");
        return;
    }

    // Move os jogadores puxando direto da memória (playersDOM)
    for (const playerId in data.positions) {
        const playerElement = playersDOM[playerId];
        if (playerElement) {
            playerElement.style.left = data.positions[playerId].x + '%';
            playerElement.style.top = data.positions[playerId].y + '%';
        }
    }

    // Atualiza a legenda
    if (descElement) {
        descElement.innerText = data.desc;
    }
}