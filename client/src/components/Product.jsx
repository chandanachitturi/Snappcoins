import React , {useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import Loader from "./Loader";

function Product(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        setImageSrc(
            props.img
                ? `${process.env.REACT_APP_URL}/api/merchandise/img${props.img}`
                : "assets/img/items/default-prod.png"
        );
    }, [props.img]);

    console.log(imageSrc)
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="strip">
                <figure >
                    {!imageLoaded && <div > <Loader /> </div>}<Link to="#modal-dialog" className={`btn_1 modal_popup lazy ${imageLoaded ? "" : "visually-hidden"} `}>Snapp Now!</Link>
                    <img src={imageSrc} data-src="img/items/item-12.jpg" className={`lazy ${imageLoaded ? "" : "visually-hidden"}`} alt="" width="533" height="400" onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)} />
                    <Link to="detail-page.html" className="strip_info">
                        <div className="item_title">
                            <span className="badge bg-voilet">{props.price} snapps</span>
                        </div>
                    </Link>
                </figure >
                <ul>
                    <li>
                        <Link to="author.html" className="author">
                            <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                <figure>
                                    <img src="assets/img/items/default-prof.png" data-src="img/avatar2.jpg" alt="" className="lazy" width="100" height="100" /></figure>
                            </div>
                            <h6 className="">{props.title}</h6>
                        </Link>
                    </li>
                    <li></li>
                    <li>
                        <Link to="#0" className="wish_bt"></Link><i class="bi bi-stack"></i> {props.count}
                    </li>
                </ul>
                <ul>
                    <li className="">{props.desc.slice(0,20) + "..."}</li>
                    <li className="text-uppercase link">{props.brand}</li>
                </ul>
            </div>
        </div>
    )
}


export default Product;