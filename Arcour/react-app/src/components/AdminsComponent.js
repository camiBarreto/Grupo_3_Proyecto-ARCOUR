import React, { useState, useEffect } from "react";
import AdminsInDb from "./AdminsInDb";

function AdminsComponent() {
  const [lastAdmin, setLastAdmin] = useState([]);
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const apiAdmin = "http://localhost:3001/api/admins";
        const response = await fetch(apiAdmin);

        const data = await response.json();

        const lastIndex = data.admins_list.length - 1;
        const lastAdmin = data.admins_list[lastIndex];

        setLastAdmin(lastAdmin);
      } catch (error) {
        console.error("Error al cargar datos de la API de vuelos: " + error);
      }
    };
    fetchAdmins();
  }, []);
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Administradores</h1>
        </div>

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4 flex-users">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Último administrador creado
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                    {lastAdmin && <AdminsInDb {...lastAdmin} />}
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
export default AdminsComponent;
