import React from 'react';
import ProfileInDb from './ProfileInDb';

function ProfileComponentUsers() {
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
            <div className="container-fluid-profile">
                
                {/*<!-- Content Row Last Movie in Data Base -->*/}
                <div className="row">
                    {/*<!-- Last Movie in DB -->*/}
                    <div className="col-lg-6 mb-4 flex-users">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Datos personales</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <ProfileInDb />
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
export default ProfileComponentUsers;