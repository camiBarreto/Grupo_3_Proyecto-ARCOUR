
// scriptProductCreate.js


const formRegister = document.querySelector(".register-form");
const inputCollection = document.querySelectorAll(".input-box");
const registerButton = document.getElementById("boton-submit");

if (formRegister) {
    //Aquí empieza la validación del formulario de registro en si.
    window.addEventListener("load", () => {
        //Definimos un Array vacío donde se irán agregando los inputs con errores para llevar un control.
        let errorRegister = [];

        formRegister.addEventListener("submit", async (e) => {

            inputCollection.forEach(inputItem => {

                if (inputItem.value.length < 1) {
                    e.preventDefault();
                    inputItem.classList.add("is-invalid");
                    inputItem.nextElementSibling.innerText = "El campo es obligatorio";
                    if (!errorRegister.includes(inputItem)) {
                        errorRegister.push(inputItem);
                    }
                } else {
                    inputItem.classList.remove("is-invalid");
                    inputItem.nextElementSibling.innerText = "";
                    const index = errorRegister.indexOf(inputItem);
                    if (index !== -1) {
                        errorRegister.splice(index, 1);
                    }
                }

            });

            if (!errorRegister.length == 0) { 
                    //En caso de no estar vacío (osea hay errores) prevenimos que se envié el formulario y mostramos la alerta de error.
                e.preventDefault();
                //La sintaxis de este tipo de alerta es sencilla.
                Swal.fire({
                icon: "error", //Este es el tipo de ícono que se mostrará en la alerta.
                title: "Oops...", //Como dice el nombre es como un <h1>.
                text: "El formulario tiene campos con errores, revisalos", //Y este como un <h2>.
                confirmButtonColor: '#292fa2' //Finalmente acá le estoy cambiando el color al botón de confirmar. Se entiende más fácil viendola.
                });
            } else {
            
                e.preventDefault()
                //Deshabilitamos el botón de enviar para no hacer spam de enviar mientras el timer se termina.
                registerButton.disabled = true;
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
                });
        
                await Toast.fire({
                  icon: "success",
                  title: "Producto creado correctamente",
                });
                //Finalmente cuando se termina de mostrar la alerta se envía el formulario, 
                //igualmente si express validator detecta errores no lo dejará enviar y mostrara los errores de express. Se entiende mucho mejor también probandolo
                formRegister.submit();
            }

        });
    });
}

