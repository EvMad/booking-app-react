import './hotel.css';
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";

const Hotel = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                </div>
            </div>
        </div>
    )
};

export default Hotel;