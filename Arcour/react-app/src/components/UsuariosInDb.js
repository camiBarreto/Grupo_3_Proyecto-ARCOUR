import React from 'react';
import imgUsuario from '../assets/images/mujer.png';


function UsuariosInDb() {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">
                <div>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="row"> Nombre y apellido:
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="row"> Correo:
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 10 + 'rem' }} src={imgUsuario} alt="" />
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
                </div>
            </div>

        </React.Fragment>
    )

}
export default UsuariosInDb;