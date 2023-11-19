import React from 'react';
import imgHombre from '../assets/images/hombre.png';
import imgMujer from '../assets/images/mujer.png';


function ProfileInDb(props) {
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 flex-users">
                <div className="align-items-users-profile">
                    <div className="flex-users-data-profile">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 10 + 'rem' }} src={props.gender == "masculino" ? imgHombre : imgMujer} alt="" />
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> 
                                    Nombre: {props.first_name ? props.first_name.charAt(0).toUpperCase() + props.first_name.slice(1) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> 
                                    Apellido: {props.last_name ? props.last_name.charAt(0).toUpperCase() + props.last_name.slice(1) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> 
                                    Género: {props.gender ? props.gender.charAt(0).toUpperCase() + props.gender.slice(1) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> Documento: {props.document}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4 ">
                            <div className="card-body">
                                <div className="row"> Fecha de Nacimiento: {props.date_birth}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> Celular: {props.cellphone}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> Correo: {props.email}
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="row"> País: {props.country ? props.country.charAt(0).toUpperCase() + props.country.slice(1) : ''}
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
export default ProfileInDb;