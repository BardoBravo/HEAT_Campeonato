# Resultados do Campeonato HEAT - GitHub Pages

Uma página web dinâmica mostrando resultados do campeonato do jogo de tabuleiro HEAT com design elegante de tema de corrida e sistema de menus laterais duplos.

## 🏁 Funcionalidades

- **Pódio do Campeonato**: Exibe os 3 primeiros colocados com fotos e pontos
- **Resultados das Corridas**: Mostra resultados das corridas anteriores antes das finais
- **Galeria do Evento**: Carrossel mostrando fotos do evento
- **Todos os Participantes**: Visualização em grade de todos os jogadores com suas equipes e pontos
- **Sistema de Menus Duplos**:
  - **Menu Esquerdo**: Navegação entre diferentes temporadas do campeonato
  - **Menu Direito**: Links para PDFs com regras oficiais do HEAT
- **Design Responsivo**: Funciona em desktop e dispositivos móveis
- **Gerenciamento Fácil**: Estrutura de dados simples para atualizar conteúdo

## 🎮 Sistema de Menus Laterais

### Menu Esquerdo (Temporadas) ☰
- **Botão**: Hambúrguer no canto superior esquerdo
- **Função**: Alternar entre diferentes temporadas do campeonato
- **Cor**: Laranja (#ff6b00)

### Menu Direito (Regras) 📋
- **Botão**: Ícone de documento no canto superior direito  
- **Função**: Acesso rápido às regras do campeonato em PDF
- **Cor**: Vermelho (#dc3545)

## 📁 Estrutura de Arquivos

```
HeatPedalChampionship/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilização CSS com tema HEAT
├── script.js           # Funcionalidade JavaScript e dados
├── images/             # Diretório para todas as imagens
│   ├── player1.jpg     # Foto do vencedor do 1º lugar
│   ├── player2.jpg     # Foto do vencedor do 2º lugar
│   ├── player3.jpg     # Foto do vencedor do 3º lugar
│   ├── alex.jpg        # Fotos individuais dos jogadores
│   ├── maria.jpg
│   ├── john.jpg
│   └── event1.jpg      # Fotos da galeria do evento
├── rules/              # Diretório para regras em PDF
│   ├── heat-regras-basicas.pdf
│   ├── heat-chuva-forte.pdf
│   ├── heat-visao-tunel.pdf
│   ├── heat-lendas-rs.pdf
│   └── README.md       # Instruções para PDFs das regras
└── README.md           # Este arquivo
```

## 🎮 Gerenciamento de Dados

Todos os dados do campeonato estão armazenados em `script.js` no objeto `seasonsData`. Agora suporta múltiplas temporadas com sistema de menus independentes.

### Estrutura de Temporadas

```javascript
const seasonsData = {
    "03/2026": {
        seasonName: "Temporada 03/2026",
        championshipData: {
            winners: [...],
            races: [...],
            allPlayers: [...],
            eventPhotos: [...]
        }
    },
    "08/2026": {
        seasonName: "Temporada 08/2026",
        championshipData: {
            // dados da temporada...
        }
    }
};
```

### Funcionalidades dos Menus

#### Menu de Temporadas (Esquerdo)
- **Abertura**: Clique no botão ☰ (superior esquerdo)
- **Seleção**: Clique em qualquer temporada para trocar
- **Fechamento**: Clique no X, fora do menu, ou pressione ESC
- **Visual**: Animação de slide da esquerda para direita

#### Menu de Regras (Direito)  
- **Abertura**: Clique no botão 📋 (superior direito)
- **Links PDF**: Cada regra abre em nova aba
- **Fechamento**: Clique no X, fora do menu, ou pressione ESC
- **Visual**: Animação de slide da direita para esquerda

### Gerenciamento via JavaScript

```javascript
// Mudar temporada programaticamente
DataManager.switchToSeason("08/2026");

// Ver dados de todas as temporadas
DataManager.getAllSeasonsData();

// Ver dados da temporada atual
DataManager.getCurrentSeasonData();

// Atualizar vencedores da temporada atual
const newWinners = [
    {
        position: 1,
        name: "Novo Vencedor",
        points: 95,
        photo: "images/novo_vencedor.jpg"
    },
    // ... mais vencedores
];
DataManager.updateWinners(newWinners);
```

## 📋 Regras em PDF

### Arquivos Necessários na Pasta `rules/`:

1. **heat-regras-basicas.pdf** - Regras básicas do jogo HEAT
2. **heat-chuva-forte.pdf** - Regras para condições de chuva forte  
3. **heat-visao-tunel.pdf** - Regras para visão em túnel
4. **heat-lendas-rs.pdf** - Regras específicas para lendas do Rio Grande do Sul

### Como Adicionar:
1. Obtenha os PDFs das regras oficiais
2. Renomeie exatamente com os nomes acima
3. Coloque na pasta `rules/`
4. Os links funcionarão automaticamente

## 🎨 Personalização Visual

### Cores dos Menus
- **Menu Esquerdo (Temporadas)**: 
  - Primário: Laranja (#ff6b00)
  - Hover: Gradiente laranja
- **Menu Direito (Regras)**:
  - Primário: Vermelho (#dc3545) 
  - Hover: Gradiente vermelho

### Animações
- **Slide lateral**: Menus deslizam de suas respectivas bordas
- **Overlay escuro**: Fundo escurece quando menus abrem
- **Transições suaves**: 0.3s ease para todas as animações
- **Hover effects**: Botões e links respondem ao mouse

## 📱 Design Responsivo

### Desktop
- Menus ocupam 350px de largura
- Botões posicionados nos cantos superiores

### Mobile/Tablet
- Menus reduzem para 300px de largura
- Botões permanecem acessíveis
- Touch-friendly para todos os elementos

## 🚀 Deploy no GitHub Pages

1. **Upload dos Arquivos**: 
   - Faça upload de todos os arquivos para seu repositório
   - Inclua os PDFs na pasta `rules/`

2. **Configuração**:
   - Vá em Settings > Pages
   - Escolha branch "main" e pasta raiz "/"
   - Salve as configurações

3. **Acesso**:
   - Site estará em: `https://[usuario].github.io/[repositorio]`
   - Tempo de deploy: ~5 minutos

## 🎯 Funcionalidades Avançadas

### Controle de Estado
- **Menus Exclusivos**: Apenas um menu aberto por vez
- **Indicador de Temporada**: Header mostra temporada ativa
- **Persistência Visual**: Items ativos destacados

### Interações
- **ESC para Fechar**: Tecla ESC fecha qualquer menu aberto
- **Click Outside**: Clique fora fecha os menus
- **Scroll Suave**: Troca de temporada rola suavemente para o topo

### Acessibilidade
- **Navegação por Teclado**: Suporte completo
- **Aria Labels**: Elementos semanticamente corretos
- **Contraste**: Cores atendem padrões de acessibilidade

## 🔧 Dicas de Uso

1. **Organização**: Mantenha dados de temporadas organizados cronologicamente
2. **Imagens**: Use fotos de alta qualidade (150x150px para jogadores)
3. **PDFs**: Mantenha regras atualizadas e bem nomeadas
4. **Responsividade**: Teste em diferentes dispositivos
5. **Performance**: Otimize imagens para web

---

**Construído para Campeonatos HEAT** 🏁  
*Sistema de Menus Duplos - Temporadas à Esquerda, Regras à Direita*