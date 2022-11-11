import './list.css';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);

    return (
        <div>
        <Navbar/>
        <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                           
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    )
};

export default List;