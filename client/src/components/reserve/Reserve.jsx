import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reserve = ({setOpen, hotelId}) => {
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark}/>
            </div>
        </div>
    )
};

export default Reserve;