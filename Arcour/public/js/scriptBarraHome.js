const radioIda = document.getElementById('ida');
const radioIdaVuelta = document.getElementById('idaVuelta');
const seccionArribo = document.getElementById('seccionArribo'); // Agrega un ID a la sección de Arribo en tu HTML

radioIda.addEventListener('click', () => {
    if (radioIda.checked) {
        radioIdaVuelta.checked = false;
        seccionArribo.style.display = 'none';
    }
});

radioIdaVuelta.addEventListener('click', () => {
    if (radioIdaVuelta.checked) {
        radioIda.checked = false;
        seccionArribo.style.display = 'block';
    }
});