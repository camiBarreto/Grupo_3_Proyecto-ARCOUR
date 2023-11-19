import React from 'react';

function OneFlightDetail(props) {
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4 flex-users">

                <div className="flex-flight">
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Número de vuelo: {props.flight_number}
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
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Fecha: {props.departure_date}
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Hora de partida: {props.departure_time}
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Hora de llegada: {props.arrival_time}
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Precio: ${props.ticket_price}
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> 
                                Duración del vuelo: {props.flight_duration}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment >
    )

}
export default OneFlightDetail;



