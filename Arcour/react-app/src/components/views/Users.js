import React from "react";
import TopBar from '../../components/TopBar';
import ContentRowTop from '../../components/ContentRowTop';
import Movie from '../../components/Movie';
import Footer from '../../components/Footer';

function Users() {
    return (<React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Movie />
                <Footer />
            </div>
        </div>    
    </React.Fragment>)
}

export default Users