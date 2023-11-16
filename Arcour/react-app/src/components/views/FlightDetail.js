import React from "react";
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import FlightDetailComponent from "../FlightDetailComponent";

function FlightDetail() {
    return (<React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <FlightDetailComponent />
                <Footer />
            </div>
        </div>    
    </React.Fragment>)
}

export default FlightDetail