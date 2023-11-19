import React, { useState, useEffect } from "react";
import UsuariosInDb from "./UsuariosInDb";
function ContentRowTop() {
  const [lastUser, setLastUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiUser = "http://localhost:3001/api/users";
        const response = await fetch(apiUser);

        const data = await response.json();

        const lastIndex = data.users_list.length - 1;
        const lastUser = data.users_list[lastIndex];

        setLastUser(lastUser);
      } catch (error) {
        console.error("Error al cargar datos de la API de vuelos: " + error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
        </div>

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4 flex-users">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Último usuario creado
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                    {lastUser && <UsuariosInDb {...lastUser} />}
                </div>
              </div>
            </div>
          </div>

          {/*<!--End Genres In Db-->*/}
        </div>
      </div>

      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
