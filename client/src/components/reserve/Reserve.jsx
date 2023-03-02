import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const Reserve = ({setOpen, hotelId}) => {
    const [selectedRooms,setSelectedRooms] = useState([]);
    const { data, loading, error } = useFetch(`hotels/room/${hotelId}`)

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="rClose" 
                onClick={() => setOpen(false)}/>
                <span>Select your rooms:</span>
                {data.map(item=>(
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">Max People: <b>{item.maxPeople}</b></div>
                            <div className="rPrice">{item.price}</div>
                            {item.roomNumbers.map((roomNumber) => (
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input type="select" value={roomNumber._id} onChange={handleSelect}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Reserve;