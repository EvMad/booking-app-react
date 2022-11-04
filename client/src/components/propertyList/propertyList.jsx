import { Villa } from "../../images/images.jsx";
import { Apartment } from "../../images/images.jsx";
import { Hotel } from "../../images/images.jsx";
import { Resort } from "../../images/images.jsx";
import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src={Villa} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>9579 villas</h2>
                </div>
                </div>
                <div className="pListItem">
                <img src={Apartment} alt="Apartment interior with yellow sofa" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>23,564 apartments</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={Hotel} alt="Hotel room balcony view" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>576,284 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={Resort} alt="Maldives resort bungalows on water" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>76,549 resorts</h2>
                </div>
            </div>
            
        </div>
    );
};

export default PropertyList;