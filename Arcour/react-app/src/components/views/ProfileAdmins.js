import React from "react";
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import ProfileComponentAdmins from "../ProfileComponentAdmins";

function ProfileAdmins(props) {
    let id = props.match.params.id
    return (<React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <ProfileComponentAdmins adminId={id}/>
                <Footer />
            </div>
        </div>    
    </React.Fragment>)
}

export default ProfileAdmins