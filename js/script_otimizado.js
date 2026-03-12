// dados das rotações (virão do JSON)
let rotationsData = {};

// cache dos elementos do DOM
const playersDOM = {};
let descElement = null;


// roda quando a página carregar
window.onload = async () => {

    // pega elemento da descrição
    descElement = document.getElementById("rotation-description");

    try {

        // carrega o JSON
        const response = await fetch("data/rotations.json");
        rotationsData = await response.json();

        // pega os ids dos jogadores usando a rotação 1
        const playerIds = Object.keys(rotationsData["1"].positions);

        // guarda os elementos no cache
        playerIds.forEach(id => {
            playersDOM[id] = document.getElementById(id);
        });

        // inicia na rotação 1
        setRotation(1);

    } catch (error) {

        console.error("Erro ao carregar rotations.json", error);

    }

};



// função principal
function setRotation(num) {

    const data = rotationsData[num];

    if (!data) {
        alert("Rotação " + num + " não encontrada!");
        return;
    }

    // mover jogadores
    for (const playerId in data.positions) {

        const playerElement = playersDOM[playerId];

        if (playerElement) {

            playerElement.style.left = data.positions[playerId].x + "%";
            playerElement.style.top = data.positions[playerId].y + "%";

        }

    }

    // atualizar descrição
    if (descElement) {
        descElement.innerText = data.desc;
    }

}


