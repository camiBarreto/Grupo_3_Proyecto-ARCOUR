import React from 'react';
import imgUsuario from '../assets/images/mujer.png';


function ProfileAdminInDb() {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">
                <div className="align-items-users-profile">
                    <div className="flex-users-data-profile">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-profile" style={{ width: 10 + 'rem' }} src={imgUsuario} alt="" />
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> Nombre:
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> País de origen:
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> Correo:
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> Aerolínea:
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> Teléfono:
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )

}
export default ProfileAdminInDb;