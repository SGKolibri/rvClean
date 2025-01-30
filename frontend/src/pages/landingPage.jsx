import Footer from "../containers/LandingPageContainer/Footer/footer";
import Home from "../containers/LandingPageContainer/Home/home";
import ImportantElements from "../containers/LandingPageContainer/ImportantElements/importantElements";
import Location from "../containers/LandingPageContainer/Location/location";
import Navbar from "../containers/LandingPageContainer/Navbar/navbar";
import Services from "../containers/LandingPageContainer/Services/services";
import Works from "../containers/LandingPageContainer/Works/works";

import './landingPage.css';

export default function LandingPage() {

    return (
        <>
            <div>
                <Navbar />
                <div className="landing-page-container">
                    <Home />
                </div>
                <Works />
                <Services />
                <ImportantElements />
                <Location />
                <Footer />
            </div>
        </>
    )
}