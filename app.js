// Establece la fecha de inicio (modifica esta fecha según tu necesidad)
const fechaInicio = new Date('2023-09-09T00:00:00');

// Función para calcular el tiempo transcurrido
function calcularTiempo() {
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaInicio;

    // Convertir milisegundos en unidades de tiempo
    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const años = Math.floor(dias / 365.25); // Consideramos años bisiestos
    const meses = Math.floor(dias / 30.44); // Promedio de días en un mes

    // Actualizar la vista en el HTML
    document.getElementById('years').innerHTML = `${años} <span>Años</span>`;
    document.getElementById('months').innerHTML = `${meses % 12} <span>Meses</span>`;
    document.getElementById('days').innerHTML = `${dias % 30} <span>Días</span>`;
    document.getElementById('hours').innerHTML = `${horas % 24} <span>Horas</span>`;
    document.getElementById('minutes').innerHTML = `${minutos % 60} <span>Minutos</span>`;
    document.getElementById('seconds').innerHTML = `${segundos % 60} <span>Segundos</span>`;
}

// Llamar la función cada segundo
setInterval(calcularTiempo, 1000);

// Ejecutar al cargar la página para mostrar el valor inicial
calcularTiempo();


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".coverflow img");

    const showImages = () => {
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                img.classList.add("show");
            }
        });
    };

    showImages(); // Llamamos a la función al inicio por si ya hay imágenes en pantalla
    window.addEventListener("scroll", showImages);
});




