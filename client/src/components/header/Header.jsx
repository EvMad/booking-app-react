import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
           <div className="headerContainer">
           <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBinoculars} />
                <span>Attractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>
                </div>
                </div>
                <h1 classname="headerTitle">A Lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking account</p>
                <button className="headerBtn">Sign In / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem"></div>
                </div>
                </div>
                </div>
         
    
    )
};

export default Header;