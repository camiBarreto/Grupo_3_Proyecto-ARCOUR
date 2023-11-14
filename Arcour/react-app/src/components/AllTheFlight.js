import React from 'react';

function AllTheFlight() {
	return (
		<React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<div className="container-fluid">
				<h1 className="h3 mb-2 text-gray-800">Listado de vuelos</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Destino</th>
										<th>Partida</th>
										<th>Hora</th>

									</tr>
								</thead>

								<tbody>
									<tr>
										<td>01</td>
										<td>Bogotá</td>
										<td>Montevideo</td>
										<td>15:00</td>

									</tr>
									<tr>
										<td>02</td>
										<td>Buenos Aires</td>
										<td>Bogotá</td>
										<td>00:15</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default AllTheFlight;