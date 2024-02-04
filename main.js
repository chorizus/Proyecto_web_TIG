const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Cambia la ruta al archivo shapefile
fetch('./Images/zonas_validas.shp')
    .then(response => response.arrayBuffer())
    .then(buffer => {
        const geojson = shp.parseZip(new Uint8Array(buffer)).features;
        L.geoJSON(geojson).addTo(map);
    });