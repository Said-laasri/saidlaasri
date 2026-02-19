// Get latitude and longitude from data attributes
const latitude = 30.397397;
const longitude = -9.559828;

// Initialize the map
const map = L.map('map').setView([latitude, longitude], 6);

// Set the tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
L.marker([latitude, longitude]).addTo(map)
    .bindPopup('Agadir, Morocco')
    .openPopup();