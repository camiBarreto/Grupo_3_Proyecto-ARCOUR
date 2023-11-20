const deleteUser = document.getElementById("deleteFormUser");

function confirmDeleteUser() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "confirmButton",
      cancelButton: "cancelButton",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "¿Estas seguro que quieres eliminar este usuario?",
      text: "No podrás revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Eliminado",
          "El usuario ha sido eliminado",
          "success"
        );
        setInterval(() => {
          deleteUser.submit();
        },2500)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Tu usuario está seguro :)",
          "error"
        );
      }
    });
}

const deleteAdmin = document.getElementById("deleteFormAdmin");

function confirmDeleteAdmin() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "confirmButton",
      cancelButton: "cancelButton",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "¿Estas seguro que quieres eliminar este administrador?",
      text: "No podrás revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Eliminado",
          "El administrador ha sido eliminado",
          "success"
        );
        setInterval(() => {
          deleteAdmin.submit();
        },2500)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Tu cuenta de administrador está segura :)",
          "error"
        );
      }
    });
}
