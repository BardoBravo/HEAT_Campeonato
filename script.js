// Season Data - Multiple seasons support
const seasonsData = {
    "03/2026": {
        seasonName: "Temporada 03/2026",
        championshipData: {
            // Championship Winners (Top 3)
            winners: [
                {
                    position: 1,
                    name: "???",
                    points: 0,
                    photo: "images/senna.jpg"
                },
                {
                    position: 2,
                    name: "???",
                    points: 0,
                    photo: "images/senna.jpg"
                },
                {
                    position: 3,
                    name: "??",
                    points: 0,
                    photo: "images/senna.jpg"
                }
            ],

            // Previous Race Results
            races: [
                {
                    name: "Classificatória 1 - Hex - Porto Alegre!",
                    results: [
                        { position: 1, name: "Rodrigo S.", points: 24 },
                        { position: 2, name: "João A.", points: 16 },
                        { position: 3, name: "Cristiano M.", points: 13 },
                        { position: 4, name: "Marco S.", points: 12 }
                    ]
                },
                {
                    name: "Classificatória 2 - Taverna - São Leopoldo!",
                    results: [
                        { position: 1, name: "Jovani A.", points: 21 },
                        { position: 2, name: "André", points: 18 },
                        { position: 3, name: "Fabiano D.", points: 12 },
                        { position: 4, name: "Cláudio R.", points: 11 }
                    ]
                },
                {
                    name: "Final - Toca do Rato - Ivoti",
                    results: [
                        { position: 1, name: "???", points: 0 },
                        { position: 2, name: "???", points: 0 },
                        { position: 3, name: "???", points: 0 },
                        { position: 4, name: "???", points: 0 },
                        { position: 5, name: "???", points: 0 }
                    ]
                }
            ],

            // All Participants
            allPlayers: [
                { name: "Yuri B.", points: 5, photo: "images/yuri.png", team: "Porto Alegre" },
                { name: "Ane", points: 7, photo: "images/maria.jpg", team: "Porto Alegre" },
                { name: "Marco S.", points: 12, photo: "images/marco.png", team: "Porto Alegre" },
                { name: "Rodrigo S.", points: 24, photo: "images/sarah.jpg", team: "Porto Alegre" },
                { name: "João A.", points: 16, photo: "images/mike.jpg", team: "Porto Alegre" },
                { name: "Cristiano M.", points: 13, photo: "images/cristiano.png", team: "Porto Alegre ?" },
                { name: "Fabiano D.", points: 12, photo: "images/fabiano.png", team: "Vale dos Sinos" },
                { name: "Jovani A.", points: 21, photo: "images/jovani.png", team: "Vale dos Sinos" },
                { name: "Moisés T.", points: 9, photo: "images/moises.png", team: "Vale dos Sinos" },
                { name: "André", points: 18, photo: "images/andre.png", team: "Vale dos Sinos" },
                { name: "Jhon C.", points: 4, photo: "images/JhonC.png", team: "Vale dos Sinos" },
                { name: "Cláudio R.", points: 11, photo: "images/claudio.png", team: "Vale dos Sinos" },
                { name: "Rael", points: 4, photo: "images/rael.png", team: "Vale dos Sinos" }

            ],

            // Event Gallery Photos
            eventPhotos: [
                {
                    src: "images/1.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/2.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/3.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/4.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/5.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/6.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/7.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/8.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/9.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/9.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/10.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/11.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/12.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/13.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/14.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                },
                {
                    src: "images/15.jpeg",
                    alt: "Cerimônia de Abertura do Campeonato",
                    caption: "Cerimônia de abertura com todos os participantes"
                }
            ]
        }
    },
    "08/2026": {
        seasonName: "Temporada 08/2026",
        championshipData: {
            // Championship Winners (Top 3)
            winners: [
                {
                    position: 1,
                    name: "Carlos Santos",
                    points: 92,
                    photo: "images/carlos.jpg"
                },
                {
                    position: 2,
                    name: "Ana Pereira",
                    points: 85,
                    photo: "images/ana.jpg"
                },
                {
                    position: 3,
                    name: "Roberto Lima",
                    points: 80,
                    photo: "images/roberto.jpg"
                }
            ],

            // Previous Race Results
            races: [
                {
                    name: "Corrida Classificatória 1",
                    results: [
                        { position: 1, name: "Carlos Santos", points: 23 },
                        { position: 2, name: "Ana Pereira", points: 20 },
                        { position: 3, name: "Roberto Lima", points: 18 },
                        { position: 4, name: "Pedro Costa", points: 16 },
                        { position: 5, name: "Lucia Ferreira", points: 14 }
                    ]
                },
                {
                    name: "Corrida Final",
                    results: [
                        { position: 1, name: "Carlos Santos", points: 32 },
                        { position: 2, name: "Ana Pereira", points: 28 },
                        { position: 3, name: "Roberto Lima", points: 25 },
                        { position: 4, name: "Pedro Costa", points: 22 },
                        { position: 5, name: "Lucia Ferreira", points: 20 }
                    ]
                }
            ],

            // All Participants
            allPlayers: [
                { name: "Carlos Santos", points: 92, photo: "images/carlos.jpg", team: "Força Azul" },
                { name: "Ana Pereira", points: 85, photo: "images/ana.jpg", team: "Velocidade Rosa" },
                { name: "Roberto Lima", points: 80, photo: "images/roberto.jpg", team: "Trovão Verde" },
                { name: "Pedro Costa", points: 76, photo: "images/pedro.jpg", team: "Raio Dourado" },
                { name: "Lucia Ferreira", points: 74, photo: "images/lucia.jpg", team: "Fúria Vermelha" }
            ],

            // Event Gallery Photos
            eventPhotos: [
                {
                    src: "images/season2_event1.jpg",
                    alt: "Abertura Temporada 08/2026",
                    caption: "Abertura da nova temporada"
                },
                {
                    src: "images/season2_event2.jpg",
                    alt: "Corridas Intensas",
                    caption: "Momentos de alta velocidade"
                }
            ]
        }
    }
};

// Current active season
let currentSeason = "03/2026";

// Placeholder images (to be replaced with actual photos)
const placeholderImages = {
    player: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23ff6b00'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-family='Arial' font-size='14'%3EFoto do Jogador%3C/text%3E%3C/svg%3E",
    event: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23dc3545'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-family='Arial' font-size='24'%3EFoto do Evento%3C/text%3E%3C/svg%3E"
};

// Get current championship data
function getCurrentChampionshipData() {
    return seasonsData[currentSeason]?.championshipData || seasonsData["03/2026"].championshipData;
}

// DOM Elements
let currentSlide = 0;
const carousel = {
    track: null,
    slides: [],
    indicators: [],
    prevBtn: null,
    nextBtn: null
};

// Menu Elements
const leftMenuToggle = document.getElementById('leftMenuToggle');
const rightMenuToggle = document.getElementById('rightMenuToggle');
const leftLateralMenu = document.getElementById('leftLateralMenu');
const rightLateralMenu = document.getElementById('rightLateralMenu');
const menuOverlay = document.getElementById('menuOverlay');
const leftMenuClose = document.getElementById('leftMenuClose');
const rightMenuClose = document.getElementById('rightMenuClose');
const seasonIndicator = document.getElementById('seasonIndicator');

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupCarousel();
    setupImageErrorHandling();
    setupLateralMenus();
});

// Initialize all page content
function initializePage() {
    displayWinners();
    displayRaceResults();
    displayAllPlayers();
    displayEventPhotos();
}

// Display championship winners on podium
function displayWinners() {
    const data = getCurrentChampionshipData();
    data.winners.forEach(winner => {
        const position = getPositionText(winner.position);
        const photoElement = document.getElementById(`${position}-place-photo`);
        const nameElement = document.getElementById(`${position}-place-name`);
        const pointsElement = document.getElementById(`${position}-place-points`);
        
        if (photoElement && nameElement && pointsElement) {
            photoElement.src = winner.photo;
            photoElement.alt = `${winner.name} - ${winner.position}${getOrdinalSuffix(winner.position)} Place`;
            nameElement.textContent = winner.name;
            pointsElement.textContent = `Pontos: ${winner.points}`;
        }
    });
}

// Display race results
function displayRaceResults() {
    const racesGrid = document.getElementById('races-grid');
    if (!racesGrid) return;
    
    racesGrid.innerHTML = '';
    
    const data = getCurrentChampionshipData();
    data.races.forEach(race => {
        const raceCard = createRaceCard(race);
        racesGrid.appendChild(raceCard);
    });
}

// Create race result card
function createRaceCard(race) {
    const card = document.createElement('div');
    card.className = 'race-card';
    
    const title = document.createElement('h3');
    title.className = 'race-title';
    title.textContent = race.name;
    
    const resultsList = document.createElement('ul');
    resultsList.className = 'race-results';
    
    race.results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>
                <span class="race-position">${result.position}.</span>
                ${result.name}
            </span>
            <span>${result.points} pts</span>
        `;
        resultsList.appendChild(listItem);
    });
    
    card.appendChild(title);
    card.appendChild(resultsList);
    
    return card;
}

// Display all players
function displayAllPlayers() {
    const playersGrid = document.getElementById('players-grid');
    if (!playersGrid) return;
    
    playersGrid.innerHTML = '';
    
    const data = getCurrentChampionshipData();
    data.allPlayers.forEach(player => {
        const playerCard = createPlayerCard(player);
        playersGrid.appendChild(playerCard);
    });
}

// Create player card
function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    
    card.innerHTML = `
        <img src="${player.photo}" alt="${player.name}" onerror="this.src='${placeholderImages.player}'">
        <h3>${player.name}</h3>
        <p>${player.team}</p>
        <p>Total: ${player.points} pts</p>
    `;
    
    return card;
}

// Display event photos in carousel
function displayEventPhotos() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselIndicators = document.getElementById('carouselIndicators');
    
    if (!carouselTrack || !carouselIndicators) return;
    
    carouselTrack.innerHTML = '';
    carouselIndicators.innerHTML = '';
    
    const data = getCurrentChampionshipData();
    data.eventPhotos.forEach((photo, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${photo.src}" alt="${photo.alt}" onerror="this.src='${placeholderImages.event}'">
            <div class="carousel-caption">
                <p>${photo.caption}</p>
            </div>
        `;
        carouselTrack.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(indicator);
    });
}

// Setup carousel functionality
function setupCarousel() {
    carousel.track = document.getElementById('carouselTrack');
    carousel.prevBtn = document.getElementById('prevBtn');
    carousel.nextBtn = document.getElementById('nextBtn');
    
    if (!carousel.track || !carousel.prevBtn || !carousel.nextBtn) return;
    
    carousel.slides = carousel.track.children;
    carousel.indicators = document.querySelectorAll('.indicator');
    
    // Add event listeners
    carousel.prevBtn.addEventListener('click', prevSlide);
    carousel.nextBtn.addEventListener('click', nextSlide);
    
    // Auto-play carousel
    setInterval(() => {
        nextSlide();
    }, 5000);
}

// Navigate to specific slide
function goToSlide(index) {
    if (index < 0 || index >= carousel.slides.length) return;
    
    currentSlide = index;
    const translateX = -currentSlide * 100;
    carousel.track.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    carousel.indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

// Go to previous slide
function prevSlide() {
    const newIndex = currentSlide === 0 ? carousel.slides.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
}

// Go to next slide
function nextSlide() {
    const newIndex = currentSlide === carousel.slides.length - 1 ? 0 : currentSlide + 1;
    goToSlide(newIndex);
}

// Setup lateral menus functionality
function setupLateralMenus() {
    // Left menu (seasons) functionality
    if (leftMenuToggle) {
        leftMenuToggle.addEventListener('click', () => toggleMenu('left'));
    }
    
    if (leftMenuClose) {
        leftMenuClose.addEventListener('click', () => closeMenu('left'));
    }
    
    // Right menu (rules) functionality
    if (rightMenuToggle) {
        rightMenuToggle.addEventListener('click', () => toggleMenu('right'));
    }
    
    if (rightMenuClose) {
        rightMenuClose.addEventListener('click', () => closeMenu('right'));
    }
    
    // Overlay functionality
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeAllMenus);
    }
    
    // Season selection functionality
    const seasonItems = document.querySelectorAll('.season-item');
    seasonItems.forEach(item => {
        item.addEventListener('click', function() {
            const season = this.dataset.season;
            switchSeason(season);
        });
    });
    
    // Close menus on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && (leftLateralMenu.classList.contains('open') || rightLateralMenu.classList.contains('open'))) {
            closeAllMenus();
        }
    });
}

// Toggle specific menu open/close
function toggleMenu(side) {
    if (side === 'left') {
        if (leftLateralMenu.classList.contains('open')) {
            closeMenu('left');
        } else {
            closeMenu('right'); // Close right menu if open
            openMenu('left');
        }
    } else if (side === 'right') {
        if (rightLateralMenu.classList.contains('open')) {
            closeMenu('right');
        } else {
            closeMenu('left'); // Close left menu if open
            openMenu('right');
        }
    }
}

// Open specific lateral menu
function openMenu(side) {
    if (side === 'left') {
        leftLateralMenu.classList.add('open');
        leftMenuToggle.classList.add('active');
    } else if (side === 'right') {
        rightLateralMenu.classList.add('open');
        rightMenuToggle.classList.add('active');
    }
    
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close specific lateral menu
function closeMenu(side) {
    if (side === 'left') {
        leftLateralMenu.classList.remove('open');
        leftMenuToggle.classList.remove('active');
    } else if (side === 'right') {
        rightLateralMenu.classList.remove('open');
        rightMenuToggle.classList.remove('active');
    }
    
    // Only hide overlay if both menus are closed
    if (!leftLateralMenu.classList.contains('open') && !rightLateralMenu.classList.contains('open')) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close all menus
function closeAllMenus() {
    closeMenu('left');
    closeMenu('right');
}

// Switch between seasons
function switchSeason(season) {
    if (seasonsData[season]) {
        currentSeason = season;
        
        // Update active season indicator
        if (seasonIndicator) {
            seasonIndicator.textContent = seasonsData[season].seasonName;
        }
        
        // Update active season item in menu
        const seasonItems = document.querySelectorAll('.season-item');
        seasonItems.forEach(item => {
            if (item.dataset.season === season) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Reload page content with new season data
        initializePage();
        setupCarousel();
        
        // Close menu after selection
        closeMenu('left');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Setup error handling for missing images
function setupImageErrorHandling() {
    // Handle player photos
    document.querySelectorAll('.player-photo').forEach(img => {
        img.onerror = function() {
            this.src = placeholderImages.player;
        };
    });
    
    // Handle carousel images
    document.querySelectorAll('.carousel-slide img').forEach(img => {
        img.onerror = function() {
            this.src = placeholderImages.event;
        };
    });
}

// Utility functions
function getPositionText(position) {
    const positions = {
        1: 'first',
        2: 'second',
        3: 'third'
    };
    return positions[position] || position.toString();
}

function getOrdinalSuffix(number) {
    const suffixes = {
        1: 'st',
        2: 'nd',
        3: 'rd'
    };
    return suffixes[number] || 'th';
}

// Data management functions for easy updates
const DataManager = {
    // Update championship winners for current season
    updateWinners: function(winnersData) {
        const data = getCurrentChampionshipData();
        data.winners = winnersData;
        displayWinners();
    },
    
    // Add new race result for current season
    addRaceResult: function(raceData) {
        const data = getCurrentChampionshipData();
        data.races.push(raceData);
        displayRaceResults();
    },
    
    // Update all players for current season
    updateAllPlayers: function(playersData) {
        const data = getCurrentChampionshipData();
        data.allPlayers = playersData;
        displayAllPlayers();
    },
    
    // Add event photo for current season
    addEventPhoto: function(photoData) {
        const data = getCurrentChampionshipData();
        data.eventPhotos.push(photoData);
        displayEventPhotos();
        setupCarousel();
    },
    
    // Switch to specific season
    switchToSeason: function(season) {
        switchSeason(season);
    },
    
    // Get current season data
    getCurrentSeasonData: function() {
        return seasonsData[currentSeason];
    },
    
    // Get all seasons data
    getAllSeasonsData: function() {
        return seasonsData;
    },
    
    // Get current data (for debugging/export)
    getCurrentData: function() {
        return getCurrentChampionshipData();
    }
};

// Make DataManager available globally for easy management
window.DataManager = DataManager;

// Console log para desenvolvedores
console.log('🏁 Resultados do Campeonato HEAT carregados!');
console.log('Use o objeto DataManager para atualizar conteúdo facilmente:');
console.log('- DataManager.updateWinners(novoArrayVencedores)');
console.log('- DataManager.addRaceResult(novoObjetoCorrida)');
console.log('- DataManager.updateAllPlayers(novoArrayJogadores)');
console.log('- DataManager.addEventPhoto(novoObjetoFoto)');
console.log('- DataManager.switchToSeason("08/2026") // Trocar temporada');
console.log('- DataManager.getCurrentData() // Ver dados atuais');
console.log('- DataManager.getAllSeasonsData() // Ver todas as temporadas');