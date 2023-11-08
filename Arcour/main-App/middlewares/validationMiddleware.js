const { body } = require("express-validator");

const validations = {
  loginValidation: [
    body("correo")
      .notEmpty()
      .withMessage("Debes ingresar un correo")
      .bail()
      .isEmail()
      .withMessage("El correo electrónico no es válido")
      .normalizeEmail()
      .withMessage("El correo electrónico no es válido"),
    body("password").notEmpty().withMessage("Debes ingresar una contraseña"),
  ],
  registerUserValidation: [
    body("nombre")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 3, max: 25 })
      .withMessage("Entre 3 y 25 caracteres")
      .matches(/^[^\d]*$/)
      .withMessage("El campo no admite números"),
    body("apellido")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 3, max: 25 })
      .withMessage("Entre 3 y 25 caracteres")
      .matches(/^[^\d]*$/)
      .withMessage("El campo no admite números"),
    body("documento")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isInt()
      .withMessage("Campo númerico")
      .isLength({ min: 7, max: 15 })
      .withMessage("Entre 7 y 15 dígitos"),
    body("fechaNacimiento")
      .notEmpty()
      .withMessage("La fecha es requerida")
      .isAfter("01-01-1930")
      .withMessage("Fecha invalida")
      .isBefore("01-01-2009")
      .withMessage("Debes ser mayor de 14 años"),
    body("celular")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 7, max: 15 })
      .withMessage("Entre 7 y 15 dígitos")
      .matches(/^\+?[0-9]*$/)
      .withMessage("Campo númerico"),
    body("mail")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isEmail()
      .withMessage("El correo electrónico no es válido")
      .normalizeEmail()
      .withMessage("El correo electrónico no es válido"),
    body("mailConfirm").custom((value, { req }) => {
      if (value !== req.body.mail) {
        throw new Error("Los correos deben coincidir");
      }
      return true;
    }),
    body("password")
      .notEmpty()
      .withMessage("El campo es requerido")
      .isLength({ min: 8 })
      .withMessage("Mínimo 8 caracteres"),
    body("passConfirm").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
  ],
  editUserValidation: [
    body("nombre")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 3, max: 25 })
      .withMessage("Entre 3 y 25 caracteres")
      .matches(/^[^\d]*$/)
      .withMessage("El campo no admite números"),
    body("apellido")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 3, max: 25 })
      .withMessage("Entre 3 y 25 caracteres")
      .matches(/^[^\d]*$/)
      .withMessage("El campo no admite números"),
    body("documento")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isInt()
      .withMessage("Campo númerico")
      .isLength({ min: 7, max: 15 })
      .withMessage("Entre 7 y 15 dígitos"),
    body("fechaNacimiento")
      .notEmpty()
      .withMessage("La fecha es requerida")
      .isAfter("1920-01-01")
      .withMessage("Fecha invalida")
      .isBefore("2009-01-01")
      .withMessage("Debes ser mayor de 14 años"),
    body("celular")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 7, max: 12 })
      .withMessage("Entre 7 y 12 dígitos")
      .matches(/^\+?[0-9]*$/)
      .withMessage("Campo númerico"),
    body("correo")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isEmail()
      .withMessage("El correo electrónico no es válido")
      .normalizeEmail()
      .withMessage("El correo electrónico no es válido"),
  ],
  editAdminValidation: [
    body("empresa")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 3, max: 25 })
      .withMessage("Entre 3 y 25 caracteres")
      .matches(/^[^\d]*$/)
      .withMessage("El campo no admite números"),
    body("correoEmpresarial")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isEmail()
      .withMessage("El correo electrónico no es válido")
      .normalizeEmail()
      .withMessage("El correo electrónico no es válido"),
    body("contacto")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 7, max: 12 })
      .withMessage("Entre 7 y 12 dígitos")
      .matches(/^\+?[0-9]*$/)
      .withMessage("Campo númerico"),
  ],
  productValidation: [
    body("departureTime")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail(),
    body("arrivalTime")
      .notEmpty()
      .withMessage("El campo es requerido").bail(),
    body("departureDate")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isAfter("2023-10-01")
      .withMessage("Fecha invalida"),
    body("ticketPrice")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .matches(/^\+?[0-9]*$/)
      .withMessage("Campo númerico"),
  ],
  editProductValidation: [
    body("arrivalTime")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail(),
    body("departureDate")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isAfter("2023-10-01")
      .withMessage("La fecha es invalida"),
    body("ticketPrice")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .matches(/^\+?[0-9]*$/)
      .withMessage("Campo númerico")
      .custom((value) => {
        if (parseInt(value) > 0) {
          return true;
        }
        throw new Error('El valor debe ser mayor que 0');
      }),
  ],
  registerAdminValidation: [
    body("nombreEmpresa")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 3, max: 25 })
      .withMessage("Entre 3 y 25 caracteres")
      .matches(/^[^\d]*$/)
      .withMessage("El campo no admite números"),

    body("correo")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isEmail()
      .withMessage("El correo electrónico no es válido")
      .normalizeEmail()
      .withMessage("El correo electrónico no es válido"),

    body("password")
      .notEmpty()
      .withMessage("El campo es requerido")
      .isLength({ min: 8 })
      .withMessage("Mínimo 8 caracteres"),

    body("contacto")
      .notEmpty()
      .withMessage("El campo es requerido")
      .bail()
      .isLength({ min: 7, max: 12 })
      .withMessage("Entre 7 y 12 dígitos")
      .matches(/^\+?[0-9]*$/)
      .withMessage("Campo númerico"),
  ],
};

module.exports = validations;
