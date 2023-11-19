import React from 'react';

function Destinos (props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        Total de vuelos hacía {props.airport}: {props.total}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Destinos;