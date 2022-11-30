import useFetch from "../../hooks/useFetch.js";
import "./featured.css";
import { Chicago, NYC, Tokyo } from "../../images/images.jsx";



const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

    return (
        <div className="featured">
    {loading ? ( "Loading please wait" ) : (
        <>        <div className="featuredItem">
        <img src={Chicago} alt="Chicago skyline at sunset" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[0]} properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src={NYC} alt="Manhattan skyline" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data[1]} properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src={Tokyo} alt="Tokyo Skyline at night" className="featuredImg" />
        <div className="featuredTitles">
            <h1>London</h1>
            <h2>{data[2]} properties</h2>
        </div>
    </div></>
    )}
        </div>
    );
};

export default Featured;