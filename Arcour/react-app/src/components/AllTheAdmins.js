import React from 'react';

function AllTheAdmins() {
	return (
		<React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<div className="container-fluid">
				<h1 className="h3 mb-2 text-gray-800">Listado de Administradores</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Correo</th>

									</tr>
								</thead>

								<tbody>
									<tr>
										<td>01</td>
										<td>Camila</td>
										<td>Barreto</td>
										<td>cami@gmail.com</td>

									</tr>
									<tr>
										<td>02</td>
										<td>Jorge</td>
										<td>Perez</td>
										<td>jorge@gmail.com</td>
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
export default AllTheAdmins;