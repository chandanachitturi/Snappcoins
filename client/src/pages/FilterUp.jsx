import React from "react";

function FilterUp() {
    return (
        <div className="filters_full version_2">
            <div className="container clearfix">
                <div className="pb-3 clearfix">
                    <div className="custom_select">
                        <select name="sort" id="sort">
                            <option value="popularity" selected="selected">Sort by Popularity</option>
                            <option value="rating">Sort by Newness</option>
                            <option value="date">Sort by Trending</option>
                        </select>
                    </div>
                    <a href="#0" className="open_filters btn_filters"><i className="bi bi-filter"></i><span>Filters</span></a>
                    <div className="search_bar_list">
                        <input type="text" className="form-control" placeholder="Search again..." />
                    </div>
                    <a className="btn_search_mobile btn_filters" data-bs-toggle="collapse" href="#collapseSearch"><i className="bi bi-search"></i></a>
                </div>
            </div>
            <div className="collapse" id="collapseSearch">
                <div className="search_bar_list">
                    <input type="text" className="form-control" placeholder="Search again..." />
                </div>
            </div>
        </div>
    )
}

export default FilterUp;