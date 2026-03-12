# 📌 Quadro Tático de Vôlei

Aplicação web interativa para **visualizar rotações táticas do
voleibol**.
O sistema permite selecionar diferentes rotações de jogo e visualizar
**posicionamento dos jogadores em quadra**, incluindo saque e recepção.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript puro**,
simulando um **quadro tático digital** para auxiliar no estudo e análise de
posicionamento no vôlei.

------------------------------------------------------------------------

O objetivo deste projeto é:

-   Demonstrar **rotações táticas do voleibol**
-   Facilitar a **visualização do posicionamento dos jogadores**
-   Permitir a **troca dinâmica de rotações**
-   Servir como ferramenta educativa para **estudo de tática esportiva**

Além disso, o projeto também demonstra conceitos importantes de
desenvolvimento web como:

-   Manipulação do **DOM**
-   Estruturação de **dados em objetos JavaScript**
-   **Atualização dinâmica da interface**
-   Organização de código para melhor **performance**

------------------------------------------------------------------------

# 🛠️ Tecnologias Utilizadas

-   **HTML5**
-   **CSS3**
-   **JavaScript (Vanilla JS)**
-   **JSON (armazenamento das rotações)**

------------------------------------------------------------------------

# 📂 Estrutura do Projeto

    projeto-rotacoes-volei
    │
    ├── index.html
    ├── style.css
    │
    ├── js
    │   └── script_otimizado.js  
    │
    ├── data
    │   └── rotations.json
    ├── img
    │   └── logo.png 
    

------------------------------------------------------------------------

# 🧠 Arquitetura

Os **dados das rotações** ficam separados da lógica do sistema.

Arquivo:

    data/rotations.json

Exemplo de estrutura:

``` json
{
  "1": {
    "desc": "Descrição da rotação",
    "positions": {
      "L-Lev": { "x": -3, "y": 88 }
    }
  }
}
```

O JavaScript carrega esses dados usando:

``` javascript
fetch("data/rotations.json")
```

Isso permite:

-   alterar rotações sem modificar o código
-   conectar futuramente com APIs
-   organizar melhor o projeto

------------------------------------------------------------------------

# ⚙️ Funcionamento

Quando a página abre:

1.  O JS faz **fetch do JSON**
2.  Os dados são armazenados em `rotationsData`
3.  Os elementos dos jogadores são armazenados em cache
4.  A rotação inicial é exibida

Função principal:

``` javascript
setRotation(num)
```

Ela:

-   busca os dados da rotação
-   move os jogadores
-   atualiza a descrição

------------------------------------------------------------------------

# 🏐 Identificação dos Jogadores

  Prefixo   Significado
  --------- ------------------
  L         Time da esquerda
  R         Time da direita
  Lev       Levantador
  P1 / P2   Ponteiros
  C1 / C2   Centrais
  Op        Oposto
  Lib       Líbero

------------------------------------------------------------------------

# 🎮 Controles

Botões permitem trocar a rotação:

-   1 - Rotação - 2
-   6 - Rotação - 1
-   5 - Rotação - 6
-   4 - Rotação - 5
-   3 - Rotação - 4
-   2 - Rotação - 3

------------------------------------------------------------------------

# 🎨 Interface

A quadra possui:

-   rede
-   linha dos 3 metros
-   divisão saque/recepção
-   jogadores representados por círculos

Animação:

``` css
transition: all 0.8s ease-in-out;
```

------------------------------------------------------------------------

# ▶️ Como Executar

Clone o repositório:

``` bash
git clone https://github.com/seu-usuario/projeto-rotacoes-volei
```

Use um servidor local.

No **VS Code**:

1.  Instale **Live Server**
2.  Clique com botão direito no `index.html`
3.  Clique em **Open with Live Server**

------------------------------------------------------------------------

# 👨‍💻 Autor

**Eduardo Silveira da Silva**
Estudante de Análise e Desenvolvimento de Sistemas
Engenharia de Controle e Automação
