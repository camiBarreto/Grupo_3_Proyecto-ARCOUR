import React, { useState, useEffect } from "react";
import FlightInDb from "./FlightInDb";

function FlightComponents() {
  const [lastFlight, setLastFlight] = useState([]);
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const apiFlight = "http://localhost:3001/api/flights";
        const response = await fetch(apiFlight);

        const data = await response.json();

        const lastIndex = data.flights_list.length - 1;
        const lastFlight = data.flights_list[lastIndex];

        setLastFlight(lastFlight);
      } catch (error) {
        console.error("Error al cargar datos de la API de vuelos: " + error);
      }
    };
    fetchFlights();
  }, []);
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Vuelos</h1>
        </div>

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4 flex-users">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Último vuelo creado
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                    {lastFlight && <FlightInDb {...lastFlight} />}
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
export default FlightComponents;
