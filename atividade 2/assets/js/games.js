const gamesData = [
    {
        id: 1,
        name: "Forza Horizon 5",
        price: "R$ 249,00",
        priceValue: 249.00,
        description: "Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world's greatest cars.",
        image: "../utils/artworks/forzahorizon5-cover.jpg",
        recentReviews: "Very Positive (3,196)",
        allReviews: "Very Positive (81,881)",
        releaseDate: "9 Nov, 2021",
        developer: "Playground Games",
        publisher: "Xbox Game Studios",
        rating: "very-positive",
        genre: "Corrida"
    },
    {
        id: 2,
        name: "Battlefield 4™",
        price: "R$ 199,00",
        priceValue: 199.00,
        description: "Embrace unrivaled destruction in Battlefield 4™. Revel in the glorious chaos of all-out war packed with rewarding, tactical challenges in an interactive environment.",
        image: "../utils/artworks/battlefield4-cover.jpg",
        recentReviews: "Mostly Positive (1,906)",
        allReviews: "Very Positive (27,390)",
        releaseDate: "29 Oct, 2013",
        developer: "DICE",
        publisher: "Electronic Arts",
        rating: "mostly-positive",
        genre: "Ação / Tiro"
    },
    {
        id: 3,
        name: "Assassin's Creed® Origins",
        price: "R$ 179,99",
        priceValue: 179.99,
        description: "Explore Ancient Egypt in this action-adventure game. Battle powerful enemies, unveil conspiracies, and discover the origin story of the Assassin's Brotherhood.",
        image: "../utils/artworks/assassinscreedorigins-cover.png",
        recentReviews: "Very Positive (1,075)",
        allReviews: "Very Positive (33,508)",
        releaseDate: "27 Oct, 2017",
        developer: "Ubisoft Montreal",
        publisher: "Ubisoft",
        rating: "very-positive",
        genre: "Ação / Aventura"
    },
    {
        id: 4,
        name: "Dead by Daylight",
        price: "R$ 69,99",
        priceValue: 69.99,
        description: "Trapped forever in a realm of eldritch evil where even death is not an escape, four determined Survivors face a bloodthirsty Killer in a vicious game of nerve and wits.",
        image: "../utils/artworks/deadbydaylight-cover.jpg",
        recentReviews: "Mostly Positive (9,797)",
        allReviews: "Very Positive (231,505)",
        releaseDate: "14 Jun, 2016",
        developer: "Behaviour Interactive Inc.",
        publisher: "Behaviour Interactive Inc.",
        rating: "mostly-positive",
        genre: "Terror / Sobrevivência"
    },
    {
        id: 5,
        genre: "Ação / Terror",
        name: "Resident Evil 4",
        price: "R$ 169,00",
        priceValue: 169.00,
        description: "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village.",
        image: "../utils/artworks/residentevil4remake-cover.jpg",
        recentReviews: "Overwhelmingly Positive (2,578)",
        allReviews: "Overwhelmingly Positive (50,973)",
        releaseDate: "23 Mar, 2023",
        developer: "CAPCOM Co., Ltd.",
        publisher: "CAPCOM Co., Ltd.",
        rating: "overwhelmingly-positive"
    },
    {
        id: 6,
        genre: "RPG / Fantasia",
        name: "Baldur's Gate 3",
        price: "R$ 199,99",
        priceValue: 199.99,
        description: "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        image: "../utils/artworks/baldursgate3-cover.jpg",
        recentReviews: "Overwhelmingly Positive (6,256)",
        allReviews: "Overwhelmingly Positive (415,026)",
        releaseDate: "3 Aug, 2023",
        developer: "Larian Studios",
        publisher: "Larian Studios",
        rating: "overwhelmingly-positive"
    },
    {
        id: 7,
        genre: "Aventura / Mistério",
        name: "Outer Wilds",
        price: "R$ 67,99",
        priceValue: 67.99,
        description: "Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.",
        image: "../utils/artworks/outerwilds-cover.jpg",
        recentReviews: "Overwhelmingly Positive (1,272)",
        allReviews: "Overwhelmingly Positive (45,053)",
        releaseDate: "18 Jun, 2020",
        developer: "Mobius Digital",
        publisher: "Annapurna Interactive",
        rating: "overwhelmingly-positive"
    },
    {
        id: 8,
        genre: "Ação / Super-herói",
        name: "Marvel's Spider-Man 2",
        price: "R$ 249,90",
        priceValue: 249.90,
        description: "Be Greater. Together. The incredible power of the symbiote forces Peter Parker and Miles Morales into a desperate fight as they balance their lives, friendships, and their duty to protect.",
        image: "../utils/artworks/spiderman2-cover.jpeg",
        recentReviews: "Very Positive (990)",
        allReviews: "Mostly Positive (9,777)",
        releaseDate: "30 Jan, 2025",
        developer: "Insomniac Games, Nixxes Software",
        publisher: "PlayStation Publishing LLC",
        rating: "very-positive"
    },
    {
        id: 9,
        genre: "Ação / Tiro",
        name: "Battlefield™ 2042",
        price: "R$ 249,00",
        priceValue: 249.00,
        description: "Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.",
        image: "../utils/artworks/battlefield2042-cover.jpg",
        recentReviews: "Mixed (6,928)",
        allReviews: "Mixed (101,919)",
        releaseDate: "19 Nov, 2021",
        developer: "DICE",
        publisher: "Electronic Arts",
        rating: "mixed"
    },
    {
        id: 10,
        genre: "RPG / Fantasia",
        name: "ELDEN RING",
        price: "R$ 274,50",
        priceValue: 274.50,
        description: "THE CRITICALLY ACCLAIMED FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        image: "../utils/artworks/elderring-cover.jpg",
        recentReviews: "Very Positive (6,206)",
        allReviews: "Very Positive (411,819)",
        releaseDate: "24 Feb, 2022",
        developer: "FromSoftware, Inc.",
        publisher: "FromSoftware, Inc., Bandai Namco",
        rating: "very-positive"
    },
    {
        id: 11,
        genre: "Ação / Aventura",
        name: "God of War Ragnarök",
        price: "R$ 249,90",
        priceValue: 249.90,
        description: "Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives – now on PC.",
        image: "../utils/artworks/godofwarragnarok-cover.jpg",
        recentReviews: "Very Positive (751)",
        allReviews: "Very Positive (11,180)",
        releaseDate: "19 Sep, 2024",
        developer: "Santa Monica Studio, Jetpack Interactive",
        publisher: "PlayStation Publishing LLC",
        rating: "very-positive"
    },
    {
        id: 12,
        genre: "RPG / Ação",
        name: "DARK SOULS™ III",
        price: "R$ 229,90",
        priceValue: 229.90,
        description: "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
        image: "../utils/artworks/darksouls3-cover.jpg",
        recentReviews: "Very Positive (1,200)",
        allReviews: "Very Positive (102,306)",
        releaseDate: "11 Apr, 2016",
        developer: "FromSoftware, Inc.",
        publisher: "FromSoftware, Inc., Bandai Namco Entertainment",
        rating: "very-positive"
    }
];

let currentGames = [...gamesData];
let cart = JSON.parse(localStorage.getItem('steamCart')) || [];

document.addEventListener('DOMContentLoaded', function () {
    displayGames(currentGames);
    updateCartCount();
});

function displayGames(games) {
    const gamesGrid = document.getElementById('gamesGrid');

    if (games.length === 0) {
        gamesGrid.innerHTML = '<div class="loading">Nenhum jogo encontrado</div>';
        return;
    }

    gamesGrid.innerHTML = games.map(game => createGameCard(game)).join('');
}

function createGameCard(game) {
    return `
        <div class="game-card" onclick="showGameModal(${game.id})">
            <img src="${game.image}" alt="${game.name}" class="game-image" 
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzQ0NjU0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjOGJhNGI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2VtIG7Do28gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4='">
            <div class="game-info">
                <div class="game-title">${game.name}</div>
                <div class="game-genre"><strong>Tipo:</strong> ${game.genre}</div>
                <div class="game-price">${game.price}</div>
                <div class="game-description">${game.description}</div>
                <div class="game-rating">
                    <span class="rating-badge rating-${game.rating}">${game.recentReviews}</span>
                </div>
                <div class="game-details">
                    ${game.releaseDate} • ${game.developer}
                </div>
            </div>
        </div>
    `;
}

function showGameModal(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    document.getElementById('modalGameTitle').textContent = game.name;
    document.getElementById('modalGameBody').innerHTML = `
        <div class="row">
            <div class="col-md-5">
                <img src="${game.image}" alt="${game.name}" class="img-fluid rounded"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzQ0NjU0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjOGJhNGI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2VtIG7Do28gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4='">
            </div>
            <div class="col-md-7">
                <h4 class="text-success">${game.price}</h4>
                <p><strong>Tipo:</strong> ${game.genre}</p>
                <p><strong>Descrição:</strong></p>
                <p>${game.description}</p>
                <hr>
                <p><strong>Avaliações Recentes:</strong> <span class="rating-badge rating-${game.rating}">${game.recentReviews}</span></p>
                <p><strong>Todas as Avaliações:</strong> <span class="rating-badge rating-${game.rating}">${game.allReviews}</span></p>
                <p><strong>Data de Lançamento:</strong> ${game.releaseDate}</p>
                <p><strong>Desenvolvedor:</strong> ${game.developer}</p>
                <p><strong>Distribuidora:</strong> ${game.publisher}</p>
            </div>
        </div>
    `;

    const addToCartBtn = document.getElementById('addToCartBtn');
    const isInCart = cart.some(item => item.id === gameId);
    addToCartBtn.textContent = isInCart ? 'Já no Carrinho' : 'Adicionar ao Carrinho';
    addToCartBtn.disabled = isInCart;
    addToCartBtn.onclick = () => addToCart(game);

    $('#gameModal').modal('show');
}

function addToCart(game) {
    if (!cart.some(item => item.id === game.id)) {
        cart.push({
            id: game.id,
            name: game.name,
            price: game.price,
            priceValue: game.priceValue,
            image: game.image
        });

        localStorage.setItem('steamCart', JSON.stringify(cart));
        updateCartCount();

        const addToCartBtn = document.getElementById('addToCartBtn');
        addToCartBtn.textContent = 'Adicionado!';
        addToCartBtn.disabled = true;

        alert(`${game.name} foi adicionado ao carrinho!`);
    }
}

function updateCartCount() {
    console.log(`Carrinho: ${cart.length} itens`);
}

function filterGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = gamesData.filter(game =>
        game.name.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm) ||
        game.developer.toLowerCase().includes(searchTerm)
    );

    currentGames = filteredGames;
    displayGames(currentGames);
}

function sortGames() {
    const sortBy = document.getElementById('sortSelect').value;

    const sortedGames = [...currentGames].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price-low':
                return a.priceValue - b.priceValue;
            case 'price-high':
                return b.priceValue - a.priceValue;
            case 'rating':
                const ratingOrder = {
                    'overwhelmingly-positive': 5,
                    'very-positive': 4,
                    'mostly-positive': 3,
                    'mixed': 2
                };
                return (ratingOrder[b.rating] || 0) - (ratingOrder[a.rating] || 0);
            default:
                return 0;
        }
    });

    displayGames(sortedGames);
}