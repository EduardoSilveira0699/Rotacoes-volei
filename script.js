const rotations = {
    1: {
        // TIME ESQUERDA (AZUL - SAQUE - ROTAÇÃO 1)
        "L-Lev": { x: -3, y: 88 },   // Fundo esquerdo (sacando/defesa)
        "L-P2":  { x: 10, y: 50 },  // Fundo, mais centralizado
        "L-L":   { x: 26, y: 25 },  // Fundo, parte superior
        "L-P1":  { x: 45, y: 40 },  // Rede, superior
        "L-C1":  { x: 45, y: 55 },  // Rede, centro
        "L-O":   { x: 45, y: 70 },  // Rede, inferior
        "L-C2":  { x: 20, y: 115 },  // C2 NO BANCO DE RESERVAS (Fora da quadra)

        // TIME DIREITA (VERMELHO - RECEPÇÃO - ROTAÇÃO 2)
        "R-Lev": { x: 55, y: 10 },  // Infiltrando/Rede superior
        "R-L":   { x: 82, y: 20 },  // Linha de passe (superior)
        "R-P2":  { x: 85, y: 50 },  // Linha de passe (centro)
        "R-P1":  { x: 80, y: 75 },  // Linha de passe (inferior)
        "R-C1":  { x: 65, y: 95 },  // Puxado um pouco para a rede (inferior)
        "R-O":   { x: 96, y: 60 },  // Escondido na recepção (fundo direito)
        "R-C2":  { x: 80, y: 115 },  // C2 NO BANCO DE RESERVAS (Fora da quadra)
    },
    2: {
        // TIME ESQUERDA (SACA) 
        "L-Lev": { x: 25, y: 80 },  
        "L-P1":  { x: 25, y: 50 },  
        "L-C1":  { x: 35, y: 80 },  
        "L-O":   { x: -5, y: 80 },  
        "L-P2":  { x: 15, y: 20 },  
        "L-L":   { x: 15, y: 80 },  

        // TIME DIREITA (RECEBE) 
        "R-P1":  { x: 60, y: 50 },  
        "R-C1":  { x: 80, y: 80 },  
        "R-O":   { x: 70, y: 20 },  
        "R-P2":  { x: 80, y: 20 },  
        "R-L":   { x: 90, y: 80 },  
        "R-Lev": { x: 85, y: 50 },  
    },
    3: { },
    4: { },
    5: { },
    6: { }
};

function setRotation(num) {
    const rot = rotations[num];
    if (!rot || Object.keys(rot).length === 0) {
        alert("Rotação " + num + " ainda não configurada no código!");
        return;
    }

    for (const playerId in rot) {
        const playerElement = document.getElementById(playerId);
        if (playerElement) {
            playerElement.style.left = rot[playerId].x + '%';
            playerElement.style.top = rot[playerId].y + '%';
        }
    }
}

window.onload = () => {
    setRotation(1);
};