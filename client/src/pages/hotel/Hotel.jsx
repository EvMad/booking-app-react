import './hotel.css';
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>567 Grand Ave Los Angeles</span>
                    </div>
                    <span className="hotelDistance">Excellent Location - .5mi from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $200 at this property and get a free airport taxi</span>
                </div>
            </div>
        </div>
    )
};

export default Hotel;