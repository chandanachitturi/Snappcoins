import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterCheck from "./FilterCheck";


function Filter(props) {
    const [isClicked, setClick] = useState(false)
    const handleCheck = function (e) {
        const filter_name = e.target.value;
        setClick(true);
    }

    return (
        <aside class="col-lg-3" id="sidebar_fixed">
            <div class="filter_col">
                <div class="inner_bt"><a href="#" class="open_filters"><i class="bi bi-x"></i></a></div>
                <div class="filter_type">
                    <h4><a href="#filter_1" data-bs-toggle="collapse" class="opened">Categories</a></h4>
                    <div class="collapse show" id="filter_1">
                        <ul>
                            {/* {props.filters.map((filter) => {
                                return <FilterCheck />
                            })} */}
                        </ul>
                    </div>
                </div>
                <div class="filter_type">
                    <h4><a href="#filter_3" data-bs-toggle="collapse" class="opened">Snapps</a></h4>
                    <div class="collapse" id="filter_3">
                        <div class="range_input">Price range from 0 to <span></span>  snapps</div>
                        <div class="mb-4"><input type="range" min="1" max="5" step="0.2" value="4" data-orientation="horizontal" /></div>
                    </div>
                </div>
                <div class="buttons">
                    <a href="#0" class="btn_1 full-width outline">Filter</a>
                </div>
            </div>
        </aside>
    )
}


export default Filter;