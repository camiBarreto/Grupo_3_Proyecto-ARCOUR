import React from 'react';
import AerolineasInDb from './AerolineasInDb';
import ContentRowMovies from './ContentRowMovies';
import Destinos from './Destinos';

let destinos = [
	{ destino: 'Uruguay' },
	{ destino: 'Argentina' },
	{ destino: 'Colombia' }
]


function ContentRowTop() {
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
								<h5 className="m-0 font-weight-bold text-gray-800">Destinos</h5>
							</div>

							<div className="card-body">

								<div className="row">
									{
										destinos.map((destino, index) => {
											return <Destinos  {...destino} key={index}
											/>

										})

									}
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
	)

}
export default ContentRowTop;