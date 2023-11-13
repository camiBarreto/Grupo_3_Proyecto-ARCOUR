import React from "react";
import TopBar from '../../components/TopBar';
import AdminsComponent from '../AdminsComponent';
import AllTheAdmins from '../../components/AllTheAdmins';
import Footer from '../../components/Footer';

function Admins() {
    return (<React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <AdminsComponent />
                <AllTheAdmins />
                <Footer />
            </div>
        </div>    
    </React.Fragment>)
}

export default Admins