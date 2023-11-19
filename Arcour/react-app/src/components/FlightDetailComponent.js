import React, { useState, useEffect } from "react";
import OneFlightDetail from "./OneFlightDetail";

function FlightDetailComponent(props) {
  const [flightDetail, setFlightDetail] = useState({});
  useEffect(() => {
    const fetchOneFlight = async () => {
        try {
            const apiOneFlight = `http://localhost:3001/api/flights/${props.flightId}/detail`;
            const oneFlightResponse = await fetch(apiOneFlight);

            const data = await oneFlightResponse.json();

            setFlightDetail(data);
        } catch (error) {
            console.error("Error al cargar datos de la API de vuelos: " + error);
        }
    };
    fetchOneFlight();
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
                  Datos del vuelo
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <OneFlightDetail {...flightDetail} />
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
export default FlightDetailComponent;
