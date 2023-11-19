import React, {useState, useEffect} from 'react';

function AllTheUsers() {
	const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchusers = async () => {
            try {
				const apiUser = "http://localhost:3001/api/users";
                const response = await fetch(apiUser);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de usuarios');
                }
                const data = await response.json();
                setUsers(data.users_list);
            } catch (error) {
                console.error('Error al cargar datos de la API de usuarios: ' + error);
            }
        };

        fetchusers();
    }, []);
	
	const columns = Object.keys(users[0] || {}).filter(column => column !== 'password' && column !== 'favourite_aeroline' && column !== 'id_product');

	const formatColumnName = (column) => {
		const formattedColumn = column.charAt(0).toUpperCase() + column.slice(1);
		return formattedColumn.replace(/_/g, ' ');
	  };

	const upperCaseColumns = ["gender", "country", "first_name", "last_name"]

    return (
        <React.Fragment>
            {/*<!-- userS LIST -->*/}
			<div className="container-fluid">
				<h1 className="h3 mb-2 text-gray-800">Listado de Usuarios</h1>

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
									{users.map((user, index) => (
										<tr key={index}>
											{columns.map(column => (
												<td key={column}>
													{upperCaseColumns.includes(column) ? user[column].charAt(0).toUpperCase() + user[column].slice(1) : user[column]}
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
export default AllTheUsers;