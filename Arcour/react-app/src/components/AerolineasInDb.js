import React, { useState, useEffect } from "react";
import Aerolinea from "./Aerolinea";

function AerolineasInDb() {
  const [totalAirlines, setTotalAirlines] = useState([]);

  useEffect(() => {
    const fetchTotalAirlines = async () => {
        try {
            const apiFlight = "http://localhost:3001/api/flights";
            const response = await fetch(apiFlight);

            const data = await response.json();

            setTotalAirlines(data.totalAirlines);
        } catch (error) {
            console.error("Error al cargar datos de la API de vuelos: " + error);
        }
    };
    fetchTotalAirlines();
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4 flex-aerolineas">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Total de vuelos por Aerolínea
            </h6>
          </div>

          <div className="card-body">
            <div className="row">
              {totalAirlines.map((aerolinea, index) => {
                return <Aerolinea {...aerolinea} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AerolineasInDb;
