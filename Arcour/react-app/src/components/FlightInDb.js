import React from 'react';
import {Link} from 'react-router-dom'

function FlightInDb(props) {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">

                <div className="flex-flight">
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Número de vuelo: #{props.flight_number}
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Partida: {props.departure_airport}
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Destino: {props.arrival_airport}
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Aerolínea: {props.airline ? props.airline.charAt(0).toUpperCase() + props.airline.slice(1) : ''}
                            </div>
                        </div>
                    </div>
                <div className="flight-button">
                <Link to= {`/vuelos/${props.flight_number}/detail`} exact="true" className="btn btn-danger flight-button">Ver detalle</Link>
                                         
                </div>
            </div>
           
        </div>

        </React.Fragment >
    )

}
export default FlightInDb;