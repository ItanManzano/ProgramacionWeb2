// Función para cambiar el texto
function cambiarTexto(nuevoTexto) {
    document.getElementById('texto-principal').innerText = nuevoTexto;
}

// Asignar evento de clic a cada imagen
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.goku-img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const texto = img.getAttribute('data-text');
            cambiarTexto(texto);
        });
    });
});

