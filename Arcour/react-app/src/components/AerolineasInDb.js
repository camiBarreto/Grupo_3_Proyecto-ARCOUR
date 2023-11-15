import React from 'react';
import Aerolinea from './Aerolinea';

let aerolineas = [
    { aerolinea: 'Aerolíneas Argentinas' },
    { aerolinea: 'Latam' },
    { aerolinea: 'Avianca' }
]

function AerolineasInDb() {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-aerolineas">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Total de vuelos por Aerolínea</h6>
                    </div>
                    
                        <div className="card-body">
                            <div className="row">
                                {
                                    aerolineas.map((aerolinea, index) => {
                                        return <Aerolinea  {...aerolinea} key={index} 
                                        />
                                        
                                    })
                                    
                                }
                            </div>
                        
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}
export default AerolineasInDb;