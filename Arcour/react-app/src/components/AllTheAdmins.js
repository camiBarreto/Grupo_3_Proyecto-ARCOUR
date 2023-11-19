import React, {useState, useEffect} from 'react';

function AllTheAdmins() {
	const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchadmins = async () => {
            try {
				const apiAdmin = "http://localhost:3001/api/admins";
                const response = await fetch(apiAdmin);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de admins');
                }
                const data = await response.json();
                setAdmins(data.admins_list);
            } catch (error) {
                console.error('Error al cargar datos de la API de admins: ' + error);
            }
        };

        fetchadmins();
    }, []);
	
	const columns = Object.keys(admins[0] || {}).filter(column => column !== 'admin');

	const formatColumnName = (column) => {
		const formattedColumn = column.charAt(0).toUpperCase() + column.slice(1);
		return formattedColumn.replace(/_/g, ' ');
	  };

	const upperCaseColumns = ["country_origin", "country_route", "aeroline_name"]

    return (
        <React.Fragment>
            {/*<!-- ADMINS LIST -->*/}
			<div className="container-fluid">
				<h1 className="h3 mb-2 text-gray-800">Listado de Administradores</h1>

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
									{admins.map((admin, index) => (
										<tr key={index}>
											{columns.map(column => (
												<td key={column}>
													{upperCaseColumns.includes(column) ? admin[column].charAt(0).toUpperCase() + admin[column].slice(1) : admin[column]}
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
export default AllTheAdmins;