import React from 'react';
import imgHombre from '../assets/images/hombre.png';
import imgMujer from '../assets/images/mujer.png';
import {Link} from 'react-router-dom'

function UsuariosInDb(props) {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">
                <div className = "align-items-users">
                    <div className="flex-users-data">
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> 
                                    Nombre y Apellido: {`${props.first_name ? props.first_name.charAt(0).toUpperCase() + props.first_name.slice(1) : ''} ${props.last_name ? props.last_name.charAt(0).toUpperCase() + props.last_name.slice(1) : ''}`}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> 
                                    Correo: {props.email}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className = "flex-img-button">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 10 + 'rem' }} src={props.gender == "masculino" ? imgHombre : imgMujer} alt="" />
                        <Link to= {`/usuarios/${props.id}/profile`} exact="true" className="btn btn-danger">Ver detalle</Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}
export default UsuariosInDb;