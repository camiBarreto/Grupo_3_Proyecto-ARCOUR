import React from 'react';

function FlightInDb() {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">
                <div className = "align-items-users">
                    <div className="flex-users-data">
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> Origen:
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> Destino:
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> Horario:
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> Aerolínea:
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className = "flex-img-button">
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}
export default FlightInDb;