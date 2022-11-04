import { Villa } from "../../images/images.jsx";
import { Apartment } from "../../images/images.jsx";
import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src={Villa} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>579 villas</h2>
                </div>
                <div className="pListItem">
                <img src={Apartment} alt="Apartment interior with yellow sofa" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartment</h1>
                    <h2>23,564 apartments</h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PropertyList;