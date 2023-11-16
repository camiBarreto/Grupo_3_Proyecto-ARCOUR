import React from 'react';

function FlightInDb() {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">

                <div className="flex-flight">
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Id:
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Destino:
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Partida:
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Aerolínea:
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Fecha:
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4 flex-medium">
                        <div className="card-body">
                            <div className="row"> Hora Partida:
                            </div>
                        </div>
                    </div>
                    
                
                <div>
                </div>
                <div className="flight-button">
                    <a className="btn btn-danger flight-button" target="_blank" rel="nofollow" href="/">Ver detalle</a>
                </div>
            </div>
           
        </div>

        </React.Fragment >
    )

}
export default FlightInDb;