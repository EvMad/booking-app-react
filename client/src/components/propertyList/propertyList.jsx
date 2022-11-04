import { Villa } from "../../images/images.jsx";
import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src={Villa} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
            </div>
        </div>
    );
};

export default PropertyList;