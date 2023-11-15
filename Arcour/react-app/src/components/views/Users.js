import React from "react";
import TopBar from '../../components/TopBar';
import UsersComponent from '../UsersComponent';
import AllTheUsers from '../../components/AllTheUsers';
import Footer from '../../components/Footer';

function Users() {
    return (<React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <UsersComponent />
                <AllTheUsers />
                <Footer />
            </div>
        </div>    
    </React.Fragment>)
}

export default Users