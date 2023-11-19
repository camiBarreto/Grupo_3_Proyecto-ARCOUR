import React from 'react';
import imgAdmin from '../assets/images/perfil.png';
import {Link} from 'react-router-dom'


function AdminsInDb(props) {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">
                <div className = "align-items-users">
                    <div className="flex-users-data">
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> 
                                    Nombre de la empresa: {props.enterprise}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> 
                                    Correo Empresarial: {props.email_enterprise}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className = "flex-img-button">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 10 + 'rem' }} src={imgAdmin} alt="" />
                        <Link to= {`/administradores/${props.id}/profile`} exact="true" className="btn btn-danger">Ver detalle</Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}
export default AdminsInDb;