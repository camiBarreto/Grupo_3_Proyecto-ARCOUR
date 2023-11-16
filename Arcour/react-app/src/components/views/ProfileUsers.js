import React from "react";
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import ProfileComponentUsers from "../ProfileComponentUsers";

function ProfileUsers() {
    return (<React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <ProfileComponentUsers />
                <Footer />
            </div>
        </div>    
    </React.Fragment>)
}

export default ProfileUsers