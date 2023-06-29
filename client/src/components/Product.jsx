import React from "react";
import {Link} from 'react-router-dom' ;

function Product(props) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="strip">
                <figure> <Link to="#modal-dialog" className="btn_1 modal_popup">Snapp Now!</Link>
                    <img src="img/items/item-1-placeholder.png" data-src="img/items/item-12.jpg" className="lazy" alt="" width="533" height="400" />
                    <Link to="detail-page.html" className="strip_info">
                        <div className="item_title">
                            <span className="badge bg-primary">{ props.price} snapps</span>
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
                            <h6>{props.title}</h6>
                        </Link>
                    </li>
                    <li></li>
                    <li>
                        <Link to="#0" className="wish_bt"></Link><i class="bi bi-stack"></i> {props.count}
                    </li>
                </ul>
                <ul>
                    <li>{props.desc}</li>
                    <li>{props.brand}</li>
                </ul>
            </div>
        </div>
    )
}


export default Product;