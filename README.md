# 📌 Quadro Tático de Vôlei

Aplicação web interativa para **visualizar rotações táticas do
voleibol**.
O sistema permite selecionar diferentes rotações de jogo e visualizar
**posicionamento dos jogadores em quadra**, incluindo saque e recepção.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript puro**,
simulando um **quadro tático digital** para auxiliar no estudo e análise de
posicionamento no vôlei.

------------------------------------------------------------------------

# 🎯 Objetivo do Projeto

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

-   **HTML5** → Estrutura da aplicação\
-   **CSS3** → Estilização da quadra e jogadores\
-   **JavaScript (Vanilla JS)** → Lógica das rotações e manipulação do
    DOM

------------------------------------------------------------------------

# 📂 Estrutura do Projeto

    projeto-rotacoes-volei
    │
    ├── index.html
    ├── style.css
    └── js
        └── script_otimizado.js
        └── script1.js (primeira tentativa, sem otimizações)
    

------------------------------------------------------------------------

# 🧠 Funcionamento do Sistema

O sistema funciona com base em **dados de rotações armazenados em um
objeto JavaScript**.

Cada rotação possui:

-   **Descrição tática**
-   **Posição de cada jogador na quadra**

Exemplo da estrutura de dados:

``` javascript
const rotationsData = {
    1: {
        desc: "Descrição da rotação",
        positions: {
            "L-Lev": { x: -3, y: 88 },
            "L-P1": { x: 45, y: 40 }
        }
    }
}
```

Onde:

-   `desc` → explicação da rotação\
-   `positions` → coordenadas de cada jogador

As posições usam **porcentagem (%)**, facilitando o posicionamento
relativo na quadra.

------------------------------------------------------------------------

# 🏐 Jogadores e Identificação

Cada jogador possui um **ID único**, indicando:

  Prefixo   Significado
  --------- ------------------
  L         Time da esquerda
  R         Time da direita
  Lev       Levantador
  P1 / P2   Ponteiros
  C1 / C2   Centrais
  Op        Oposto
  Lib       Líbero

Exemplo:

    L-Lev → Levantador do time esquerdo
    R-P1 → Ponteiro 1 do time direito

------------------------------------------------------------------------

# 🎮 Controles da Aplicação

A interface possui botões que permitem trocar a rotação:

    1 - Rotação - 2
    6 - Rotação - 1
    5 - Rotação - 6
    4 - Rotação - 5
    3 - Rotação - 4
    2 - Rotação - 3

Ao clicar em um botão:

1️⃣ O JavaScript identifica a rotação escolhida\
2️⃣ Atualiza as posições dos jogadores\
3️⃣ Atualiza a descrição da rotação

------------------------------------------------------------------------

# ⚡ Otimização do Código

O script foi otimizado para melhorar a performance.

### 1️⃣ Cache de elementos do DOM

Os jogadores são armazenados em memória apenas uma vez:

``` javascript
const playersDOM = {};
```

Isso evita múltiplas buscas com `getElementById`.

------------------------------------------------------------------------

### 2️⃣ Inicialização automática

Quando a página carrega:

``` javascript
window.onload = () => {
    setRotation(1);
};
```

A aplicação inicia automaticamente na **rotação 1**.

------------------------------------------------------------------------

### 3️⃣ Atualização dinâmica

A função principal do sistema:

``` javascript
function setRotation(num)
```

Ela:

-   recebe o número da rotação
-   busca os dados correspondentes
-   move os jogadores na quadra
-   atualiza a descrição

------------------------------------------------------------------------

# 🎨 Interface Visual

A interface simula uma **quadra de voleibol**, contendo:

-   Linha da rede\
-   Linha dos 3 metros\
-   Separação entre saque e recepção\
-   Jogadores representados por círculos

### Cores utilizadas

  Elemento        Cor
  --------------- ----------
  Time esquerdo   Azul
  Time direito    Vermelho
  Líbero          Amarelo
  Quadra          Laranja

As movimentações dos jogadores possuem **animação suave** utilizando:

``` css
transition: all 0.8s ease-in-out;
```

------------------------------------------------------------------------

# ▶️ Como Executar o Projeto

1️⃣ Baixe ou clone o repositório

``` bash
git clone https://github.com/seu-usuario/projeto-rotacoes-volei
```

2️⃣ Abra o arquivo:

    index.html

3️⃣ Clique nos botões para visualizar as rotações.

Não é necessário instalar nenhuma dependência.

------------------------------------------------------------------------

# 🚀 Possíveis Melhorias Futuras

Algumas melhorias que podem ser implementadas:

-   Adicionar **mais rotações**
-   Permitir **arrastar jogadores manualmente**
-   Criar **animação de movimentação tática**
-   Adicionar **modo treinador (editar posições)**
-   Tornar a aplicação **responsiva para celular**
-   Salvar formações com **LocalStorage**
-   Criar **versão com React ou Canvas**

------------------------------------------------------------------------

# 👨‍💻 Autor

Projeto desenvolvido por **Eduardo Silveira da Silva**

Estudante de **Análise e Desenvolvimento de Sistemas**\
Interesses em:

-   Desenvolvimento Web
-   Automação
-   Lógica de programação
-   Visualização de dados
