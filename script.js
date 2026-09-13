const properties = [
    {
        "id": 1,
        "title": "Prime Apartment in Chennai",
        "type": "Apartment",
        "location": "Chennai",
        "price": 12000000,
        "bedrooms": 2,
        "bathrooms": 2,
        "area": 1500,
        "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
        "description": "A premium apartment located in the prime area of Chennai. This property is strategically positioned with excellent connectivity to major parts of Chennai, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gym",
            "Power Backup",
            "Lift",
            "Security"
        ]
    },
    {
        "id": 2,
        "title": "Prime Villa in Chennai",
        "type": "Villa",
        "location": "Chennai",
        "price": 45000000,
        "bedrooms": 4,
        "bathrooms": 4,
        "area": 3500,
        "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
        "description": "A premium villa located in the prime area of Chennai. This property is strategically positioned with excellent connectivity to major parts of Chennai, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Pool",
            "Garden",
            "Covered Parking",
            "Security 24/7"
        ]
    },
    {
        "id": 3,
        "title": "Prime Independent House in Chennai",
        "type": "Independent House",
        "location": "Chennai",
        "price": 25000000,
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 2200,
        "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
        "description": "A premium independent house located in the prime area of Chennai. This property is strategically positioned with excellent connectivity to major parts of Chennai, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Garden",
            "Covered Parking",
            "Borewell",
            "Terrace"
        ]
    },
    {
        "id": 4,
        "title": "Prime Residential Plot in Chennai",
        "type": "Residential Plot",
        "location": "Chennai",
        "price": 8000000,
        "bedrooms": 0,
        "bathrooms": 0,
        "area": 2400,
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
        "description": "A premium residential plot located in the prime area of Chennai. This property is strategically positioned with excellent connectivity to major parts of Chennai, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gated Community",
            "Street Lights",
            "Park",
            "Clear Title"
        ]
    },
    {
        "id": 5,
        "title": "Prime Commercial Property in Chennai",
        "type": "Commercial Property",
        "location": "Chennai",
        "price": 60000000,
        "bedrooms": 0,
        "bathrooms": 2,
        "area": 5000,
        "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
        "description": "A premium commercial property located in the prime area of Chennai. This property is strategically positioned with excellent connectivity to major parts of Chennai, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Central AC",
            "Elevators",
            "Cafeteria",
            "Parking Space"
        ]
    },
    {
        "id": 6,
        "title": "Prime Apartment in Coimbatore",
        "type": "Apartment",
        "location": "Coimbatore",
        "price": 8500000,
        "bedrooms": 2,
        "bathrooms": 2,
        "area": 1200,
        "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
        "description": "A premium apartment located in the prime area of Coimbatore. This property is strategically positioned with excellent connectivity to major parts of Coimbatore, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gym",
            "Power Backup",
            "Lift",
            "Security"
        ]
    },
    {
        "id": 7,
        "title": "Prime Villa in Coimbatore",
        "type": "Villa",
        "location": "Coimbatore",
        "price": 22000000,
        "bedrooms": 4,
        "bathrooms": 4,
        "area": 2800,
        "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
        "description": "A premium villa located in the prime area of Coimbatore. This property is strategically positioned with excellent connectivity to major parts of Coimbatore, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Pool",
            "Garden",
            "Covered Parking",
            "Security 24/7"
        ]
    },
    {
        "id": 8,
        "title": "Prime Independent House in Coimbatore",
        "type": "Independent House",
        "location": "Coimbatore",
        "price": 14000000,
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 1800,
        "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
        "description": "A premium independent house located in the prime area of Coimbatore. This property is strategically positioned with excellent connectivity to major parts of Coimbatore, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Garden",
            "Covered Parking",
            "Borewell",
            "Terrace"
        ]
    },
    {
        "id": 9,
        "title": "Prime Residential Plot in Coimbatore",
        "type": "Residential Plot",
        "location": "Coimbatore",
        "price": 5500000,
        "bedrooms": 0,
        "bathrooms": 0,
        "area": 1500,
        "image": "https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?w=600&q=80",
        "description": "A premium residential plot located in the prime area of Coimbatore. This property is strategically positioned with excellent connectivity to major parts of Coimbatore, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gated Community",
            "Street Lights",
            "Park",
            "Clear Title"
        ]
    },
    {
        "id": 10,
        "title": "Prime Commercial Property in Coimbatore",
        "type": "Commercial Property",
        "location": "Coimbatore",
        "price": 35000000,
        "bedrooms": 0,
        "bathrooms": 2,
        "area": 3500,
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
        "description": "A premium commercial property located in the prime area of Coimbatore. This property is strategically positioned with excellent connectivity to major parts of Coimbatore, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Central AC",
            "Elevators",
            "Cafeteria",
            "Parking Space"
        ]
    },
    {
        "id": 11,
        "title": "Prime Apartment in Salem",
        "type": "Apartment",
        "location": "Salem",
        "price": 6000000,
        "bedrooms": 2,
        "bathrooms": 2,
        "area": 1100,
        "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "description": "A premium apartment located in the prime area of Salem. This property is strategically positioned with excellent connectivity to major parts of Salem, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gym",
            "Power Backup",
            "Lift",
            "Security"
        ]
    },
    {
        "id": 12,
        "title": "Prime Villa in Salem",
        "type": "Villa",
        "location": "Salem",
        "price": 15000000,
        "bedrooms": 4,
        "bathrooms": 4,
        "area": 2200,
        "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
        "description": "A premium villa located in the prime area of Salem. This property is strategically positioned with excellent connectivity to major parts of Salem, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Pool",
            "Garden",
            "Covered Parking",
            "Security 24/7"
        ]
    },
    {
        "id": 13,
        "title": "Prime Independent House in Salem",
        "type": "Independent House",
        "location": "Salem",
        "price": 9000000,
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 1500,
        "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
        "description": "A premium independent house located in the prime area of Salem. This property is strategically positioned with excellent connectivity to major parts of Salem, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Garden",
            "Covered Parking",
            "Borewell",
            "Terrace"
        ]
    },
    {
        "id": 14,
        "title": "Prime Residential Plot in Salem",
        "type": "Residential Plot",
        "location": "Salem",
        "price": 4000000,
        "bedrooms": 0,
        "bathrooms": 0,
        "area": 1200,
        "image": "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&q=80",
        "description": "A premium residential plot located in the prime area of Salem. This property is strategically positioned with excellent connectivity to major parts of Salem, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gated Community",
            "Street Lights",
            "Park",
            "Clear Title"
        ]
    },
    {
        "id": 15,
        "title": "Prime Commercial Property in Salem",
        "type": "Commercial Property",
        "location": "Salem",
        "price": 25000000,
        "bedrooms": 0,
        "bathrooms": 2,
        "area": 2500,
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        "description": "A premium commercial property located in the prime area of Salem. This property is strategically positioned with excellent connectivity to major parts of Salem, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Central AC",
            "Elevators",
            "Cafeteria",
            "Parking Space"
        ]
    },
    {
        "id": 16,
        "title": "Prime Apartment in Erode",
        "type": "Apartment",
        "location": "Erode",
        "price": 5500000,
        "bedrooms": 2,
        "bathrooms": 2,
        "area": 1000,
        "image": "https://images.unsplash.com/photo-1502672260266-1c1c29440404?w=600&q=80",
        "description": "A premium apartment located in the prime area of Erode. This property is strategically positioned with excellent connectivity to major parts of Erode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gym",
            "Power Backup",
            "Lift",
            "Security"
        ]
    },
    {
        "id": 17,
        "title": "Prime Villa in Erode",
        "type": "Villa",
        "location": "Erode",
        "price": 12000000,
        "bedrooms": 4,
        "bathrooms": 4,
        "area": 2000,
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        "description": "A premium villa located in the prime area of Erode. This property is strategically positioned with excellent connectivity to major parts of Erode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Pool",
            "Garden",
            "Covered Parking",
            "Security 24/7"
        ]
    },
    {
        "id": 18,
        "title": "Prime Independent House in Erode",
        "type": "Independent House",
        "location": "Erode",
        "price": 8000000,
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 1400,
        "image": "https://images.unsplash.com/photo-1605276374104-a628b0dc4fa5?w=600&q=80",
        "description": "A premium independent house located in the prime area of Erode. This property is strategically positioned with excellent connectivity to major parts of Erode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Garden",
            "Covered Parking",
            "Borewell",
            "Terrace"
        ]
    },
    {
        "id": 19,
        "title": "Prime Residential Plot in Erode",
        "type": "Residential Plot",
        "location": "Erode",
        "price": 3500000,
        "bedrooms": 0,
        "bathrooms": 0,
        "area": 1200,
        "image": "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=80",
        "description": "A premium residential plot located in the prime area of Erode. This property is strategically positioned with excellent connectivity to major parts of Erode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gated Community",
            "Street Lights",
            "Park",
            "Clear Title"
        ]
    },
    {
        "id": 20,
        "title": "Prime Commercial Property in Erode",
        "type": "Commercial Property",
        "location": "Erode",
        "price": 20000000,
        "bedrooms": 0,
        "bathrooms": 2,
        "area": 2000,
        "image": "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
        "description": "A premium commercial property located in the prime area of Erode. This property is strategically positioned with excellent connectivity to major parts of Erode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Central AC",
            "Elevators",
            "Cafeteria",
            "Parking Space"
        ]
    },
    {
        "id": 21,
        "title": "Prime Apartment in Tiruppur",
        "type": "Apartment",
        "location": "Tiruppur",
        "price": 5000000,
        "bedrooms": 2,
        "bathrooms": 2,
        "area": 950,
        "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
        "description": "A premium apartment located in the prime area of Tiruppur. This property is strategically positioned with excellent connectivity to major parts of Tiruppur, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gym",
            "Power Backup",
            "Lift",
            "Security"
        ]
    },
    {
        "id": 22,
        "title": "Prime Villa in Tiruppur",
        "type": "Villa",
        "location": "Tiruppur",
        "price": 11000000,
        "bedrooms": 4,
        "bathrooms": 4,
        "area": 1800,
        "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
        "description": "A premium villa located in the prime area of Tiruppur. This property is strategically positioned with excellent connectivity to major parts of Tiruppur, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Pool",
            "Garden",
            "Covered Parking",
            "Security 24/7"
        ]
    },
    {
        "id": 23,
        "title": "Prime Independent House in Tiruppur",
        "type": "Independent House",
        "location": "Tiruppur",
        "price": 7500000,
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 1300,
        "image": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
        "description": "A premium independent house located in the prime area of Tiruppur. This property is strategically positioned with excellent connectivity to major parts of Tiruppur, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Garden",
            "Covered Parking",
            "Borewell",
            "Terrace"
        ]
    },
    {
        "id": 24,
        "title": "Prime Residential Plot in Tiruppur",
        "type": "Residential Plot",
        "location": "Tiruppur",
        "price": 3000000,
        "bedrooms": 0,
        "bathrooms": 0,
        "area": 1200,
        "image": "https://images.unsplash.com/photo-1590243402778-958a22bc5c37?w=600&q=80",
        "description": "A premium residential plot located in the prime area of Tiruppur. This property is strategically positioned with excellent connectivity to major parts of Tiruppur, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gated Community",
            "Street Lights",
            "Park",
            "Clear Title"
        ]
    },
    {
        "id": 25,
        "title": "Prime Commercial Property in Tiruppur",
        "type": "Commercial Property",
        "location": "Tiruppur",
        "price": 30000000,
        "bedrooms": 0,
        "bathrooms": 2,
        "area": 2800,
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
        "description": "A premium commercial property located in the prime area of Tiruppur. This property is strategically positioned with excellent connectivity to major parts of Tiruppur, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Central AC",
            "Elevators",
            "Cafeteria",
            "Parking Space"
        ]
    },
    {
        "id": 26,
        "title": "Prime Apartment in Tiruchengode",
        "type": "Apartment",
        "location": "Tiruchengode",
        "price": 4500000,
        "bedrooms": 2,
        "bathrooms": 2,
        "area": 900,
        "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&q=80",
        "description": "A premium apartment located in the prime area of Tiruchengode. This property is strategically positioned with excellent connectivity to major parts of Tiruchengode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gym",
            "Power Backup",
            "Lift",
            "Security"
        ]
    },
    {
        "id": 27,
        "title": "Prime Villa in Tiruchengode",
        "type": "Villa",
        "location": "Tiruchengode",
        "price": 9000000,
        "bedrooms": 4,
        "bathrooms": 4,
        "area": 1600,
        "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
        "description": "A premium villa located in the prime area of Tiruchengode. This property is strategically positioned with excellent connectivity to major parts of Tiruchengode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Pool",
            "Garden",
            "Covered Parking",
            "Security 24/7"
        ]
    },
    {
        "id": 28,
        "title": "Prime Independent House in Tiruchengode",
        "type": "Independent House",
        "location": "Tiruchengode",
        "price": 6500000,
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 1200,
        "image": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80",
        "description": "A premium independent house located in the prime area of Tiruchengode. This property is strategically positioned with excellent connectivity to major parts of Tiruchengode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Private Garden",
            "Covered Parking",
            "Borewell",
            "Terrace"
        ]
    },
    {
        "id": 29,
        "title": "Prime Residential Plot in Tiruchengode",
        "type": "Residential Plot",
        "location": "Tiruchengode",
        "price": 2500000,
        "bedrooms": 0,
        "bathrooms": 0,
        "area": 1200,
        "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
        "description": "A premium residential plot located in the prime area of Tiruchengode. This property is strategically positioned with excellent connectivity to major parts of Tiruchengode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Gated Community",
            "Street Lights",
            "Park",
            "Clear Title"
        ]
    },
    {
        "id": 30,
        "title": "Prime Commercial Property in Tiruchengode",
        "type": "Commercial Property",
        "location": "Tiruchengode",
        "price": 15000000,
        "bedrooms": 0,
        "bathrooms": 2,
        "area": 1500,
        "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
        "description": "A premium commercial property located in the prime area of Tiruchengode. This property is strategically positioned with excellent connectivity to major parts of Tiruchengode, offering a great lifestyle and high investment returns.",
        "amenities": [
            "Central AC",
            "Elevators",
            "Cafeteria",
            "Parking Space"
        ]
    }
];



// --- State ---
let favorites = JSON.parse(localStorage.getItem('realEstateFavorites')) || [];

// --- DOM Elements ---
const propertyGrid = document.getElementById('propertyGrid');
const noResults = document.getElementById('noResults');
const favoritesGrid = document.getElementById('favoritesGrid');
const noFavorites = document.getElementById('noFavorites');
const favoritesSection = document.getElementById('favorites');

// Filters
const filterLocation = document.getElementById('filterLocation');
const filterType = document.getElementById('filterType');
const filterMaxPrice = document.getElementById('filterMaxPrice');
const filterMinBeds = document.getElementById('filterMinBeds');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

// Hero Search
const heroLocation = document.getElementById('heroLocation');
const heroType = document.getElementById('heroType');
const heroMaxPrice = document.getElementById('heroMaxPrice');
const heroSearchBtn = document.getElementById('heroSearchBtn');

// Modals
const propertyModal = document.getElementById('propertyModal');
const agentModal = document.getElementById('agentModal');
const closeModals = document.querySelectorAll('.close-modal');
const modalDetails = document.getElementById('modalDetails');
const agentPropertyName = document.getElementById('agentPropertyName');

// Forms
const contactForm = document.getElementById('contactForm');
const agentForm = document.getElementById('agentForm');
const formSuccessMessage = document.getElementById('formSuccessMessage');
const agentSuccessMessage = document.getElementById('agentSuccessMessage');

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

// --- Helper Functions ---
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};

// --- Render Functions ---
const renderPropertyCard = (property, container) => {
    const isFav = favorites.includes(property.id);
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
        <div class="property-img">
            <span class="property-badge">${property.type}</span>
            <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${property.id}, event)" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${property.image}" alt="${property.title}">
        </div>
        <div class="property-content">
            <div class="property-price">${formatCurrency(property.price)}</div>
            <h3 class="property-title">${property.title}</h3>
            <div class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</div>
            
            <div class="property-features">
                ${property.bedrooms > 0 ? `<span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>` : ''}
                ${property.bathrooms > 0 ? `<span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>` : ''}
                <span><i class="fas fa-vector-square"></i> ${property.area} sq.ft</span>
            </div>
            
            <button class="btn btn-primary btn-block" onclick="viewPropertyDetails(${property.id})">View Details</button>
        </div>
    `;
    container.appendChild(card);
};

const renderProperties = (data) => {
    propertyGrid.innerHTML = '';
    if (data.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        data.forEach(prop => renderPropertyCard(prop, propertyGrid));
    }
};

const renderFavorites = () => {
    favoritesGrid.innerHTML = '';
    const favProperties = properties.filter(p => favorites.includes(p.id));
    
    if (favProperties.length === 0) {
        noFavorites.classList.remove('hidden');
    } else {
        noFavorites.classList.add('hidden');
        favProperties.forEach(prop => renderPropertyCard(prop, favoritesGrid));
    }
};

// --- Core Functionality ---

// Favorites System
window.toggleFavorite = (id, event) => {
    event.stopPropagation();
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('realEstateFavorites', JSON.stringify(favorites));
    
    // Re-render both grids to update heart icons and favorites list
    filterProperties();
    renderFavorites();
};

// Filter System
const filterProperties = () => {
    const location = filterLocation.value;
    const type = filterType.value;
    const maxPrice = filterMaxPrice.value ? parseInt(filterMaxPrice.value) : Infinity;
    const minBeds = filterMinBeds.value ? parseInt(filterMinBeds.value) : 0;

    const filtered = properties.filter(p => {
        const matchLocation = location === "" || p.location === location;
        const matchType = type === "" || p.type === type;
        const matchPrice = p.price <= maxPrice;
        const matchBeds = p.bedrooms >= minBeds;
        return matchLocation && matchType && matchPrice && matchBeds;
    });

    renderProperties(filtered);
};

const clearFilters = () => {
    filterLocation.value = '';
    filterType.value = '';
    filterMaxPrice.value = '';
    filterMinBeds.value = '';
    heroLocation.value = '';
    heroType.value = '';
    heroMaxPrice.value = '';
    renderProperties(properties);
};

// Handle Hero Search
heroSearchBtn.addEventListener('click', () => {
    // Sync hero search with main filters
    filterLocation.value = heroLocation.value;
    filterType.value = heroType.value;
    filterMaxPrice.value = heroMaxPrice.value;
    filterMinBeds.value = ''; // reset beds
    
    // Scroll to properties section
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
    
    filterProperties();
});

// Main Filter Apply
applyFiltersBtn.addEventListener('click', filterProperties);
clearFiltersBtn.addEventListener('click', clearFilters);

// Modals
window.viewPropertyDetails = (id) => {
    const property = properties.find(p => p.id === id);
    if (!property) return;

    modalDetails.innerHTML = `
        <div class="details-grid">
            <div class="details-img">
                <img src="${property.image}" alt="${property.title}">
            </div>
            <div class="details-info">
                <h2>${property.title}</h2>
                <div class="details-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</div>
                <div class="details-price">${formatCurrency(property.price)}</div>
                
                <div class="details-features">
                    <span><i class="fas fa-home"></i> ${property.type}</span>
                    ${property.bedrooms > 0 ? `<span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>` : ''}
                    ${property.bathrooms > 0 ? `<span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>` : ''}
                    <span><i class="fas fa-vector-square"></i> ${property.area} sq.ft</span>
                </div>
                
                <div class="details-desc">
                    <h3>Description</h3>
                    <p>${property.description}</p>
                </div>
                
                <div class="details-amenities">
                    <h3>Amenities</h3>
                    <ul class="amenities-list">
                        ${property.amenities.map(amenity => `<li><i class="fas fa-check-circle"></i> ${amenity}</li>`).join('')}
                    </ul>
                </div>
                
                <button class="btn btn-primary" onclick="openContactAgent('${property.title}')">Contact Agent</button>
            </div>
        </div>
    `;
    propertyModal.classList.add('active');
};

window.openContactAgent = (propertyName) => {
    agentPropertyName.textContent = "Inquiring about: " + propertyName;
    propertyModal.classList.remove('active');
    agentModal.classList.add('active');
};

// Close Modals
closeModals.forEach(btn => {
    btn.addEventListener('click', () => {
        propertyModal.classList.remove('active');
        agentModal.classList.remove('active');
        agentSuccessMessage.classList.add('hidden');
        agentForm.reset();
    });
});

window.addEventListener('click', (e) => {
    if (e.target === propertyModal) {
        propertyModal.classList.remove('active');
    }
    if (e.target === agentModal) {
        agentModal.classList.remove('active');
        agentSuccessMessage.classList.add('hidden');
        agentForm.reset();
    }
});

// Forms
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccessMessage.classList.remove('hidden');
    setTimeout(() => {
        formSuccessMessage.classList.add('hidden');
        contactForm.reset();
    }, 3000);
});

agentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    agentSuccessMessage.classList.remove('hidden');
    setTimeout(() => {
        agentSuccessMessage.classList.add('hidden');
        agentForm.reset();
        agentModal.classList.remove('active');
    }, 2000);
});

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Show favorites section logic
// We just toggle its visibility when "Favorites" nav link is clicked, or it can just be scrolled to
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // close mobile menu if open

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetId === 'favorites') {
            favoritesSection.classList.remove('hidden');
            renderFavorites();
        }

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties);
    renderFavorites(); // In case favorites section is visible on load
});
