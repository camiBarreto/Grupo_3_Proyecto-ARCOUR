//Script formulario de register y editar Administrador

//Preguntamos si existe el formulario, ya que acá mismo se definiran las validaciones de edición de Administrador. Esto es mas que todo para evitar errores.
const formAdmin = document.getElementById("register-form"); //Importamos el formulario.

if (formAdmin) {
  const adminInputs = Array.from(document.getElementsByClassName("input-box")); //Importamos todos los inputs del formulario y convertimos en Array para poder usar el forEach.
  const checkboxAdmin = document.getElementById("check"); //Importamos el checkbox de t&c para mostrar una alerta en caso de que no se acepten.
  const adminButton = document.getElementById("boton-admin") //Importamos el botón de enviar el formulario para deshabilitarlo cuando se envié la info.

  //Aquí empieza la validación del formulario de registro en si.
  window.addEventListener("load", () => {
    //Definimos un Array vacío donde se irán agregando los inputs con errores para llevar un control.
    let emptyErrors = [];
    let lengthErrors = [];
    //Usamos el forEach para recorrer todos los inputs uno a uno y validar.
    //Validación de campo vacío.
    adminInputs.forEach(inputAdmin => {
      //Usamos el evento de input para hacer validaciones en vivo (esto detecta cada vez que se escribe dentro del input).
      inputAdmin.addEventListener("input", e => {
        //Preguntamos si la longitud del input es menor 1 osea igual a 0.
        if (e.target.value.length < 1) {
          //En caso de ser "true" se agrega la clase "is-invalid" al input para darle estilo de error y se agrega el texto de error
          //a la etiqueta hermana del input que en este caso es una etiqueta p vacía, previamente definida en el html.
          inputAdmin.classList.add("is-invalid");
          inputAdmin.nextElementSibling.innerText = "El campo es obligatorio";
          //Aquí se pregunta si el input ya está en el Array de errores.
          if (!emptyErrors.includes(inputAdmin)) {
            //En caso de ser "false" ya que esta negando, lo añade.
            emptyErrors.push(inputAdmin);
          }
          //Al momento de que nos muestre el error al dejar el input vacío queremos que cuando escribamos algo (osea cuando ya no esté vacío) se deja de mostrar el error.
        } else {
          //Por lo tanto aquí hacemos lo contrario que arriba, quitamos la clase, quitamos el texto y sacamos del Array el input corrrespondiente accediendo previamente a su índice.
          inputAdmin.classList.remove("is-invalid");
          inputAdmin.nextElementSibling.innerText = "";
          //No tienen que entender esta parte por completo, lo hizo ChatGpt jajajaja.
          const index = emptyErrors.indexOf(inputAdmin);
          if (index !== -1) {
            emptyErrors.splice(index, 1);
          }
        }
      });
    });

    //Validación de longitudes específicas
    const companyNameInput = document.getElementById("name")
    const contactInput =document.getElementById("number")
    const mailInput = document.getElementById("mail");
    const reMailInput = document.getElementById("mail-re");
    const pwInput = document.getElementById("pass");
    const rePwInput = document.getElementById("passConfirm");

    
    companyNameInput.addEventListener("input", e => {
        if(e.target.value.length < 3 || e.target.value.length > 25) {
            companyNameInput.classList.add("is-invalid");
            companyNameInput.nextElementSibling.innerText = "Entre 3 y 25 caracteres";
          if (!lengthErrors.includes(companyNameInput)) {
            lengthErrors.push(companyNameInput);
          }
        } else {
            companyNameInput.classList.remove("is-invalid");
            companyNameInput.nextElementSibling.innerText = "";
          const index = lengthErrors.indexOf(companyNameInput);
          if (index !== -1) {
            lengthErrors.splice(index, 1);
          }
        }
      });

   
      contactInput.addEventListener("input", e => {
        if(e.target.value.length < 7 || e.target.value.length > 15) {
          contactInput.classList.add("is-invalid");
          contactInput.nextElementSibling.innerText = "Entre 7 y 15 dígitos";
          if (!lengthErrors.includes(contactInput)) {
            lengthErrors.push(contactInput);
          }
        } else {
          contactInput.classList.remove("is-invalid");
          contactInput.nextElementSibling.innerText = "";
          const index = lengthErrors.indexOf(contactInput);
          if (index !== -1) {
            lengthErrors.splice(index, 1);
          }
        }
      });

    mailInput.addEventListener("input", e => {
      if(!isValidEmail(e.target.value)) {
        mailInput.classList.add("is-invalid");
        mailInput.nextElementSibling.innerText = "El correo electrónico no es válido";
        if (!lengthErrors.includes(mailInput)) {
          lengthErrors.push(mailInput);
        }
      } else {
        mailInput.classList.remove("is-invalid");
        mailInput.nextElementSibling.innerText = "";
        const index = lengthErrors.indexOf(mailInput);
        if (index !== -1) {
          lengthErrors.splice(index, 1);
        }
      }
    });

    reMailInput.addEventListener("input", e => {
      if(e.target.value !== mailInput.value) {
        reMailInput.classList.add("is-invalid");
        reMailInput.nextElementSibling.innerText = "Los correos deben coincidir";
        if (!lengthErrors.includes(reMailInput)) {
          lengthErrors.push(reMailInput);
        }
      } else {
        reMailInput.classList.remove("is-invalid");
        reMailInput.nextElementSibling.innerText = "";
        const index = lengthErrors.indexOf(reMailInput);
        if (index !== -1) {
          lengthErrors.splice(index, 1);
        }
      }
    });

    pwInput.addEventListener("input", e => {
      if(e.target.value.length < 5) {
        pwInput.classList.add("is-invalid");
        pwInput.nextElementSibling.style.color = "indianred";
        pwInput.nextElementSibling.innerText = "La contraseña es insegura";
        if (!lengthErrors.includes(pwInput)) {
          lengthErrors.push(pwInput);
        }
      } else if(e.target.value.length < 8) {
          pwInput.classList.add("is-invalid");
          pwInput.nextElementSibling.style.color = "#FFC436";
          pwInput.nextElementSibling.innerText = "La contraseña es débil";
          if (!lengthErrors.includes(pwInput)) {
            lengthErrors.push(pwInput);
          }
      
      } else {
        pwInput.classList.remove("is-invalid");
        pwInput.nextElementSibling.style.color = "#54B435";
        pwInput.nextElementSibling.innerText = "La contraseña es segura";
        const index = lengthErrors.indexOf(pwInput);
        if (index !== -1) {
          lengthErrors.splice(index, 1);
        }
      }
    });

    rePwInput.addEventListener("input", e => {
      if(e.target.value !== pwInput.value) {
        rePwInput.classList.add("is-invalid");
        rePwInput.nextElementSibling.innerText = "Las contraseñas no coinciden";
        if (!lengthErrors.includes(rePwInput)) {
          lengthErrors.push(rePwInput);
        }
      } else {
        rePwInput.classList.remove("is-invalid");
        rePwInput.nextElementSibling.innerText = "";
        const index = lengthErrors.indexOf(rePwInput);
        if (index !== -1) {
          lengthErrors.splice(index, 1);
        }
      }
    });
    //Aquí le añadamos el evento de submit al formulario.
    formAdmin.addEventListener("submit", async (e) => {
      //Usamos el forEach para recorrer otra vez los inputs.
      adminInputs.forEach( inputAdmin => {
        //Y aquí mas que todo resolvemos un problema, ya que apenes cargue la vista si mandamos el formulario tal cual, no habría ningún error, entonces lo que hacemos es validar
        //al momento de enviar. El resto es igual que arriba, exceptuando el e.target, ya que no estamos usando el evento de "input".
        if(inputAdmin.value.length < 1) {
          e.preventDefault();
          inputAdmin.classList.add("is-invalid");
          inputAdmin.nextElementSibling.innerText = "El campo es obligatorio";
          if (!emptyErrors.includes(inputAdmin)) {
            emptyErrors.push(inputAdmin);
          }
        } else {
          inputAdmin.classList.remove("is-invalid");
          inputAdmin.nextElementSibling.innerText = "";
          const index = emptyErrors.indexOf(inputAdmin);
          if (index !== -1) {
            emptyErrors.splice(index, 1);
          }
        }
        
      });
      //Aquí preguntamos si el Array de errores está o no vacío.
      if (emptyErrors.length !== 0 || lengthErrors.length !== 0) {
        //En caso de no estar vacío (osea hay errores) prevenimos que se envié el formulario y mostramos la alerta de error.
        e.preventDefault();
        //La sintaxis de este tipo de alerta es sencilla.
        Swal.fire({
          icon: "error", //Este es el tipo de ícono que se mostrará en la alerta.
          title: "Oops...", //Como dice el nombre es como un <h1>.
          text: "El formulario tiene campos con errores, revisalos", //Y este como un <h2>.
          confirmButtonColor: '#292fa2' //Finalmente acá le estoy cambiando el color al botón de confirmar. Se entiende más fácil viendola.
        });
        //Todo está lógica es para validar si los t&c están check, no se preocupen si no lo entienden que igual esto es copy paste, lo entiendo a medias.
      } else if (!checkboxAdmin.checked) {
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
              return !result && "Tienes que aceptar los T&C";
            },
          });
          if (accept) {
            Swal.fire({
              title: 'Aceptaste los T&C :)',
              confirmButtonColor: '#292fa2'
            });
          }
          checkboxAdmin.checked = true;
        })();
        //Está es la alerta que se muestra cuando no hay errores y se envía el formulario
      } else {
        //Aquí hacemos un preventDefault para que se pueda mostrar la alerta que contiene un timer
        e.preventDefault()
        //Deshabilitamos el botón de enviar para no hacer spam de enviar mientras el timer se termina.
        adminButton.disabled = true;
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
          title: "Administrador registrado correctamente",
        });
        //Finalmente cuando se termina de mostrar la alerta se envía el formulario, 
        //igualmente si express validator detecta errores no lo dejará enviar y mostrara los errores de express. Se entiende mucho mejor también probandolo
        formAdmin.submit();
      }
    });
  });
  
  // Función para verificar la validez del correo electrónico
  function isValidEmail(email) {
    // Utilizamos una expresión regular para verificar si la cadena contiene "@".
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  }
}

//Espero haberme explicado bien :) 🫶

//------------------------------------------------------------------------------------------00-------------------------------------------------------------------------------------

//Script formulario validaciones edición admin


//Preguntamos si existe el formulario, ya que acá mismo se definiran las validaciones de edición de admin. Esto es mas que todo para evitar errores.
const formEditAdmin = document.getElementById("edit-form"); //Importamos el formulario.

if (formEditAdmin) {
  const editAdminInputs = Array.from(document.getElementsByClassName("input-box")); //Importamos todos los inputs del formulario y convertimos en Array para poder usar el forEach.
  const editAdminButton = document.getElementById("boton-edit") //Importamos el botón de enviar el formulario para deshabilitarlo cuando se envié la info.

  window.addEventListener("load", () => {
    let emptyErrors = [];
    let lengthErrors = [];
    editAdminInputs.forEach(inputAdmin => {
      inputAdmin.addEventListener("input", e => {
        if (e.target.value.length < 1) {
          inputAdmin.classList.add("is-invalid");
          inputAdmin.nextElementSibling.innerText = "El campo es obligatorio";
          if (!emptyErrors.includes(inputAdmin)) {
            emptyErrors.push(inputAdmin);
          }
        } else {
          inputAdmin.classList.remove("is-invalid");
          inputAdmin.nextElementSibling.innerText = "";
          const index = emptyErrors.indexOf(inputAdmin);
          if (index !== -1) {
            emptyErrors.splice(index, 1);
          }
        }
      });
    });
    

    //Validación de longitudes específicas
    const companyNameInput = document.getElementById("name");
    const phoneIdInputs = document.getElementById("number");
    const mailInput = document.getElementById("mail");

    
    companyNameInput.addEventListener("input", e => {
        if(e.target.value.length < 3 || e.target.value.length > 25) {
          companyNameInput.classList.add("is-invalid");
          companyNameInput.nextElementSibling.innerText = "Entre 3 y 25 caracteres";
          if (!lengthErrors.includes(companyNameInput)) {
            lengthErrors.push(companyNameInput);
          }
        } else {
          companyNameInput.classList.remove("is-invalid");
          companyNameInput.nextElementSibling.innerText = "";
          const index = lengthErrors.indexOf(companyNameInput);
          if (index !== -1) {
            lengthErrors.splice(index, 1);
          }
        }
      });

      phoneIdInputs.addEventListener("input", e => {
        if(e.target.value.length < 7 || e.target.value.length > 15) {
          phoneIdInputs.classList.add("is-invalid");
          phoneIdInputs.nextElementSibling.innerText = "Entre 7 y 15 dígitos";
          if (!lengthErrors.includes(phoneIdInputs)) {
            lengthErrors.push(phoneIdInputs);
          }
        } else {
          phoneIdInputs.classList.remove("is-invalid");
          phoneIdInputs.nextElementSibling.innerText = "";
          const index = lengthErrors.indexOf(phoneIdInputs);
          if (index !== -1) {
            lengthErrors.splice(index, 1);
          }
        }
      });

    mailInput.addEventListener("input", e => {
      if(!isValidEmail(e.target.value)) {
        mailInput.classList.add("is-invalid");
        mailInput.nextElementSibling.innerText = "El correo electrónico no es válido";
        if (!lengthErrors.includes(mailInput)) {
          lengthErrors.push(mailInput);
        }
      } else {
        mailInput.classList.remove("is-invalid");
        mailInput.nextElementSibling.innerText = "";
        const index = lengthErrors.indexOf(mailInput);
        if (index !== -1) {
          lengthErrors.splice(index, 1);
        }
      }
    });



    formEditAdmin.addEventListener("submit", async (e) => {
      editAdminInputs.forEach( inputAdmin => {
        //Y aquí mas que todo resolvemos un problema, ya que apenes cargue la vista si mandamos el formulario tal cual, no habría ningún error, entonces lo que hacemos es validar
        //al momento de enviar. El resto es igual que arriba, exceptuando el e.target, ya que no estamos usando el evento de "input".
        if(inputAdmin.value.length < 1) {
          e.preventDefault();
          inputAdmin.classList.add("is-invalid");
          inputAdmin.nextElementSibling.innerText = "El campo es obligatorio";
          if (!emptyErrors.includes(inputAdmin)) {
            emptyErrors.push(inputAdmin);
          }
        } else {
          inputAdmin.classList.remove("is-invalid");
          inputAdmin.nextElementSibling.innerText = "";
          const index = emptyErrors.indexOf(inputAdmin);
          if (index !== -1) {
            emptyErrors.splice(index, 1);
          }
        }
        
      });
        
      if (emptyErrors.length !== 0 || lengthErrors.length !== 0) {
        e.preventDefault();
        Swal.fire({
          icon: "error",
          title: "Oops...", 
          text: "El formulario tiene campos con errores, revisalos",
          confirmButtonColor: '#292fa2' 
        });
      } else {
        e.preventDefault()
        editAdminButton.disabled = true;
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
          title: "Administrador editado correctamente",
        });
        formEditAdmin.submit();
      }
    });
  });
  
  // Función para verificar la validez del correo electrónico
  function isValidEmail(email) {
    // Utilizamos una expresión regular para verificar si la cadena contiene "@".
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  }
}