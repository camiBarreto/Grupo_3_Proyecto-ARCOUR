//Script de solo ida / ida y vuelta

const radioIda = document.getElementById('ida');
const radioIdaVuelta = document.getElementById('idaVuelta');
const seccionArribo = document.getElementById('seccionArribo'); // Agrega un ID a la sección de Arribo en tu HTML

window.addEventListener("load", () => {
    if(radioIda) {
        radioIda.addEventListener('click', () => {
            if (radioIda.checked) {
                radioIdaVuelta.checked = false;
                seccionArribo.style.display = 'none';
            }
        });
    }
    
    if(radioIdaVuelta) {
        radioIdaVuelta.addEventListener('click', () => {
            if (radioIdaVuelta.checked) {
                radioIda.checked = false;
                seccionArribo.style.display = 'block';
            }   
        });
    }
    
})

//Script SweetAlert product-detail

window.addEventListener("load", () => {
    const validation = document.getElementById("error");
    if(validation) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: '<div><p class="notFound-text">No se encontraron vuelos</p> <a href="/" class="back-home-link">Volver a la página de inicio</a></div>',
            showConfirmButton: false,
            showCloseButton: true,
            allowOutsideClick: false,
          })
    }
})