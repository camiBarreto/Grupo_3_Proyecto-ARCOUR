//Script formulario de register y editar usuario

const inputRegister = document.querySelector(".is-invalid");
const formRegister = document.querySelector(".register-form");
const checkboxRegister = document.getElementById("check");
const registerButton = document.getElementById("boton-register")

if (formRegister) {
  window.addEventListener("load", () => {
    formRegister.addEventListener("submit", async (e) => {
      if (inputRegister) {
        console.log("hola");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El formulario tiene campos con errores, revisalos",
          confirmButtonColor: '#292fa2'
        });
        e.preventDefault();
      } else if (!checkboxRegister.checked) {
        e.preventDefault();
        (async () => {
          const { value: accept } = await Swal.fire({
            title: "Terminos y Condiciones",
            input: "checkbox",
            inputValue: 0,
            inputPlaceholder: "Acepto los terminos y condiciones",
            confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
            buttonsStyling: false,
            allowOutsideClick: false,
            customClass: {
              confirmButton: 'boton-submit-form',
            },
            inputValidator: (result) => {
              return !result && "You need to agree with T&C";
            },
          });
          if (accept) {
            Swal.fire({
              title: 'Aceptaste los T&C :)',
              confirmButtonColor: '#292fa2'
            });
          }
          checkboxRegister.checked = true;
        })();
        
      } else {
        e.preventDefault()
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
          title: "Usuario registrado correctamente",
        });

        formRegister.submit();
      }
    });
  });
}
