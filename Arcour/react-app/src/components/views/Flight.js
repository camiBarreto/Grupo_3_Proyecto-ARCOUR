import React from "react";
import TopBar from '../../components/TopBar';
import AllTheFlight from '../../components/AllTheFlight';
import Footer from '../../components/Footer';
import FlightComponents from "../FlightComponents";

function Admins() {
    return (<React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <FlightComponents />
                <AllTheFlight />
                <Footer />
            </div>
        </div>    
    </React.Fragment>)
}

export default Admins