import React from 'react';
import imgAdmin from '../assets/images/perfil.png';


function ProfileAdminInDb(props) {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">
                <div className="align-items-users-profile">
                    <div className="flex-users-data-profile">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 10 + 'rem' }} src={imgAdmin} alt="" />
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> 
                                    Nombre de la empresa: {props.enterprise ? props.enterprise.charAt(0).toUpperCase() + props.enterprise.slice(1) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> 
                                    País de origen: {props.country_origin ? props.country_origin.charAt(0).toUpperCase() + props.country_origin.slice(1) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> 
                                    Correo Empresarial: {props.email_enterprise}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> 
                                    País de operación: {props.country_route ? props.country_route.charAt(0).toUpperCase() + props.country_route.slice(1) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> 
                                    Aerolínea: {props.aeroline_name ? props.aeroline_name.charAt(0).toUpperCase() + props.aeroline_name.slice(1) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> 
                                    Contacto: {props.contact}
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