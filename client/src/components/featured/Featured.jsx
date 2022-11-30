import useFetch from "../../hooks/useFetch.js";
import "./featured.css";
import { Chicago, NYC, Tokyo } from "../../images/images.jsx";



const Featured = () => {

    const { data, loading, error } = useFetch("");

    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={Chicago} alt="Chicago skyline at sunset" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Chicago</h1>
                    <h2>LakeShore Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={NYC} alt="Manhattan skyline" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>New York</h1>
                    <h2>Manhattan Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Tokyo} alt="Tokyo Skyline at night" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Tokyo</h1>
                    <h2>Mt. Fuji Properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;