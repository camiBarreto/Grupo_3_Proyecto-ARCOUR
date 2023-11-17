const formRegister = document.querySelector(".login-form");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("contraseña");


if (formRegister) {
    //Aquí empieza la validación del formulario de login en si.

    window.addEventListener("load", () => {

        passwordField.addEventListener("input", (e) => {
            if (e.target.value.length < 8) {
                passwordField.classList.add("is-invalid");
                passwordField.nextElementSibling.innerText = "Mínimo 8 caracteres";
            } else {
                passwordField.classList.remove("is-invalid");
                passwordField.nextElementSibling.innerText = ""
            }
        });

        emailField.addEventListener("input", e => {
            if (!isValidEmail(e.target.value)) {
                emailField.classList.add("is-invalid");
                emailField.nextElementSibling.innerText = "El correo electrónico no es válido";

            } else {
                emailField.classList.remove("is-invalid");
                emailField.nextElementSibling.innerText = "";
            }
        });


        formRegister.addEventListener("submit", (e) => {

            if (passwordField.value.length < 8) {
                passwordField.classList.add("is-invalid");
                passwordField.nextElementSibling.innerText = "Contraseña inválida"
                e.preventDefault();
            }
            if (!validarEmail(emailField.value)) {
                emailField.classList.add("is-invalid");
                emailField.nextElementSibling.innerText = "El correo electrónico no es válido";
                e.preventDefault();
            }
        });
    });

}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
