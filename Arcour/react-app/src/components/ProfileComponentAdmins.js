import React, { useState, useEffect } from "react";
import ProfileAdminInDb from "./ProfileAdminInDb";

function ProfileComponentAdmins(props) {
  const [adminDetail, setAdminDetail] = useState({});
  useEffect(() => {
    const fetchOneAdmin = async () => {
      try {
        const apiOneAdmin = `http://localhost:3001/api/admins/${props.adminId}/detail`;
        const oneAdminResponse = await fetch(apiOneAdmin);

        const data = await oneAdminResponse.json();

        setAdminDetail(data);
      } catch (error) {
        console.error("Error al cargar datos de la API de vuelos: " + error);
      }
    };
    fetchOneAdmin();
  }, []);
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid-profile">
        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4 flex-users">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Datos de empresa
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <ProfileAdminInDb {...adminDetail}/>
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
export default ProfileComponentAdmins;
