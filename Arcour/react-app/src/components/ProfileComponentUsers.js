import React, {useState, useEffect} from "react";
import ProfileInDb from "./ProfileInDb";

function ProfileComponentUsers(props) {
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    const fetchOneUser = async () => {
      try {
        const apiOneUser = `http://localhost:3001/api/users/${props.userId}/detail`;
        const oneUserResponse = await fetch(apiOneUser);

        const data = await oneUserResponse.json();

        setUserDetail(data);
      } catch (error) {
        console.error("Error al cargar datos de la API de vuelos: " + error);
      }
    };
    fetchOneUser();
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
                  Datos personales
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <ProfileInDb {...userDetail} />
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
export default ProfileComponentUsers;
