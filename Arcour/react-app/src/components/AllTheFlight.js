import React, { useState, useEffect } from 'react';

function AllTheFlight() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        // Realiza la solicitud a la API de vuelos
        const fetchFlights = async () => {
            try {
				const apiFlight = "http://localhost:3001/api/flights";
                const response = await fetch(apiFlight);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de vuelos');
                }
                const data = await response.json();
                setFlights(data.flights_list);
            } catch (error) {
                console.error('Error al cargar datos de la API de vuelos: ' + error);
            }
        };

        fetchFlights();
    }, []);
	
	const columns = Object.keys(flights[0] || {}).filter(column => column !== 'id_product');

	const formatColumnName = (column) => {
		const formattedColumn = column.charAt(0).toUpperCase() + column.slice(1);
		return formattedColumn.replace(/_/g, ' ');
	  };

    return (
        <React.Fragment>
            {/*<!-- PRODUCTS LIST -->*/}
			<div className="container-fluid">
				<h1 className="h3 mb-2 text-gray-800">Listado de Vuelos</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										{columns.map(column => (
											<th key={column}>{formatColumnName(column)}</th>
										))}
									</tr>
								</thead>

								<tbody>
									{flights.map((flight, index) => (
										<tr key={index}>
											{columns.map(column => (
												<td key={column}>
													{column === "airline" ? flight[column].charAt(0).toUpperCase() + flight[column].slice(1) : flight[column]}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    );
}

export default AllTheFlight;
