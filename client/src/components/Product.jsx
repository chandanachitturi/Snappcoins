import React from "react";
import {Link} from 'react-router-dom' ;

function Product(props) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
                <figure> <Link to="#modal-dialog" className="btn_1 modal_popup">Snapp Now!</Link>
                    <img src="img/items/item-1-placeholder.png" data-src="img/items/item-12.jpg" className="lazy" alt="" width="533" height="400" />
                    <Link to="detail-page.html" className="strip_info">
                        <div className="item_title">
                            <span className="badge bg-primary">3.25  snapps</span>
                        </div>
                    </Link>
                </figure>
                <ul>
                    <li>
                        <Link to="author.html" className="author">
                            <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                <figure>
                                    <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" className="lazy" width="100" height="100" /></figure>
                            </div>
                            <h6>JBL Pods</h6>
                        </Link>
                    </li>
                    <li>
                        <Link to="#0" className="wish_bt"><i className="bi bi-heart-fill"></i></Link> 50
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Product;