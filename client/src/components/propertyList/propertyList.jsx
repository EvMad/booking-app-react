import { Villa, Apartment, Hotel, Resort, Feature4 } from "../../images/images.jsx";
import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css";

const PropertyList = () => {

    const { data, loading, error } = useFetch("hotels/countByType");

    const images = [{Villa, Apartment, Hotel, Resort}];

    var randomPhoto = images[Math.floor(Math.random() * images.length)];

    return (
        <div className="pList">

<div className="pListItem">
         <img src={Villa} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
         <div className="pListTitles">
             <h1>Villas</h1>
             <h2>Explore Available Villas</h2>
         </div>
         </div>

         <div className="pListItem">
         <img src={Apartment} alt="Apartment Living Room" className="pListImg" />
         <div className="pListTitles">
             <h1>Apartments</h1>
             <h2>Explore Available Apartments</h2>
         </div>
         </div>

         <div className="pListItem">
         <img src={Hotel} alt="Hotel Balcony" className="pListImg" />
         <div className="pListTitles">
             <h1>Hotels</h1>
             <h2>Explore Available Hotels</h2>
         </div>
         </div>

         <div className="pListItem">
         <img src={Resort} alt="Oceanside bungalows" className="pListImg" />
         <div className="pListTitles">
             <h1>Resorts</h1>
             <h2>Explore Available Resorts</h2>
         </div>
         </div>

       {loading ? ("loading") : (<>

       {data && images.map((img, i) => (   
       
        <div className="pListItem" key={i}>
         <img src={Feature4} alt="Villa with glass sliding doors and swimming pool" className="pListImg" />
         <div className="pListTitles">
             <h1>More...</h1>
             <h2>{data[i]?.count} {data[i]?.type}</h2>
         </div>
         </div>
         ))}
           </>
           )}
            </div>
    );
};

export default PropertyList;