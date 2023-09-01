// Función para obtener la ubicación
function obtenerUbicacion() {
    const TOKEN = "";//token proporcionado por ipinfo.io
    fetch(`https://ipinfo.io?token=${TOKEN}`)
        .then(response => response.json())
        .then(data => {
        const ubicacion = `${data.city}, ${data.country}, ${data.region}`;
        document.getElementById('ubicacion').textContent = ubicacion;
        })
        .catch(error => {
        console.error('Error al obtener la ubicación:', error);
        });
}

// Llamar a la función para obtener la ubicación
obtenerUbicacion();