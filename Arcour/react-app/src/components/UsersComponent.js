import React from 'react';
import UsuariosInDb from './UsuariosInDb';
function ContentRowTop() {
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
            <div className="container-fluid">
                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
                </div>


                {/*<!-- Content Row Last Movie in Data Base -->*/}
                <div className="row">
                    {/*<!-- Last Movie in DB -->*/}
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Último usuario creado</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <UsuariosInDb />
                                </div>
                            </div>
                        </div>
                    </div>
               

                    {/*<!--End Genres In Db-->*/}
                </div>
            </div>


            {/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;