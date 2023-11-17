import React from 'react';
import {Link} from 'react-router-dom'

function FlightInDb() {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">

                <div className="flex-flight">
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Número de vuelo:
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Aerolínea:
                            </div>
                        </div>
                    </div>
                <div className="flight-button">
                <Link to= "/vuelos/:id/detail" exact={true} className="btn btn-danger flight-button">Ver detalle</Link>
                                         
                </div>
            </div>
           
        </div>

        </React.Fragment >
    )

}
export default FlightInDb;