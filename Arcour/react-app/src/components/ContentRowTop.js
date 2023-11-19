import React, { useState, useEffect } from "react";
import AerolineasInDb from "./AerolineasInDb";
import ContentRowMovies from "./ContentRowMovies";
import Destinos from "./Destinos";

function ContentRowTop() {
  const [totalFlights, setTotalFlights] = useState([]);

  useEffect(() => {
    const fetchTotalFlights = async () => {
      try {
        // Realiza la solicitud a la API para obtener la información de vuelos
        const apiFlight = "http://localhost:3001/api/flights";
        const response = await fetch(apiFlight);

        const data = await response.json();

        // Actualiza el estado local con la información de vuelos
        setTotalFlights(data.totalFlights);
      } catch (error) {
        console.error("Error al cargar datos de la API de vuelos: " + error);
      }
    };

    fetchTotalFlights();
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <ContentRowMovies />
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Total de vuelos por Destino
                </h5>
              </div>

              <div className="card-body">
                <div className="row">
                  {totalFlights.map((flight, index) => {
                    return <Destinos {...flight} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <AerolineasInDb />

          {/*<!--End Genres In Db-->*/}
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}

export default ContentRowTop;
