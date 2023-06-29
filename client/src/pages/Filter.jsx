import React from "react";
import { Link } from "react-router-dom";

function Filter(props) {
    return (
        <aside class="col-lg-3" id="sidebar_fixed">
            <div class="filter_col">
                <div class="inner_bt"><a href="#" class="open_filters"><i class="bi bi-x"></i></a></div>
                <div class="filter_type">
                    <h4><a href="#filter_1" data-bs-toggle="collapse" class="opened">Categories</a></h4>
                    <div class="collapse show" id="filter_1">
                        <ul>
                            <li>
                                <label class="container_check">Art <small>112</small>
                                    <input type="checkbox" />
                                        <span class="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label class="container_check">Electronics <small>90</small>
                                    <input type="checkbox" />
                                        <span class="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label class="container_check">Stationary <small>140</small>
                                    <input type="checkbox" />
                                        <span class="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label class="container_check">Music <small>43</small>
                                    <input type="checkbox" />
                                        <span class="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label class="container_check">Wellness <small>23</small>
                                    <input type="checkbox" />
                                        <span class="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filter_type">
                    <h4><a href="#filter_3" data-bs-toggle="collapse" class="closed">Snapps</a></h4>
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