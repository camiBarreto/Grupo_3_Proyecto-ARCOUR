// Simulación de una base de datos ficticia
const database = {
    users: [
        { id: 1, name: "Usuario 1" },
        { id: 2, name: "Usuario 2" },
        { id: 3, name: "Usuario 3" },
    ],
    getUserById: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = database.users.find(user => user.id === id);
                if (user) {
                    resolve(user);
                } else {
                    reject("Usuario no encontrado");
                }
            }, 5000);
        });
    },
    saveUser: (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                database.users.push(user);
                resolve("Usuario guardado exitosamente");
            }, 3000);
        });
    },
};

// Uso de las funciones de la base de datos
database.getUserById(2)
    .then(user => {
        console.log(user); // { id: 2, name: "Usuario 2" }
    })
    .catch(error => {
        console.error(error); // No se ejecutará en este caso
    });

const newUser = { id: 4, name: "Nuevo Usuario" };
database.saveUser(newUser)
    .then(result => {
        console.log(result); // Usuario guardado exitosamente
    })
    .catch(error => {
        console.error(error); // No se ejecutará en este caso
    });
