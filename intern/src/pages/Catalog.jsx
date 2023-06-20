import React from 'react';
import {Link} from 'react-router-dom' ;
const Catalog =()=>{
   return(
    <>

	
	<div id="preloader"><div data-loader="circle-side"></div></div>
			
	<header class="header_in clearfix">
	    <div class="layer"></div>
	    <div class="container">
	       <div class="logo">
	            <Link to="/">
	                <img src="assets/img/logo.svg" alt="" width="170" height="35" class="dark" />
	                <img src="assets/img/logo-light-mode.svg" alt="" width="170" height="35" class="light" />
	            </Link>
	        </div>
	        <ul class="top_menu">
	        	<li>
	        		<span class="color_mode_bt">
	        			<input id="theme_toggle" type="checkbox" name="theme_toggle"/>
						<label for="theme_toggle"></label>
	        		</span>
				</li>
	            <li><Link to="/login" class="btn_access">Log In</Link></li>  <li><Link to="/connect" class="btn_access">Connect Snappcoins</Link></li>
	        </ul>
	        <Link to="#0" class="open_close">
	            <i class="bi bi-list"></i><span>Menu</span>
	        </Link>
	        <nav class="main-menu">
	            <div id="header_menu">
	                <Link to="#0" class="open_close">
	                    <i class="bi bi-x"></i>
	                </Link>
	                <Link to="/" class="logo_menu">
	                	<img src="assets/img/logo-placeholder.png" data-src="img/logo.svg" alt="" width="120" height="30" class="dark lazy" />
	                	<img src="assets/img/logo-placeholder.png" data-src="img/logo-light-mode.svg" alt="" width="120" height="30" class="light lazy" />
	                </Link>
	            </div>
	            <ul>
	                <li class="submenu">
	                    <Link to="/" class="show-submenu">Home</Link></li>
	                <li class="submenu"><Link to="/catalog" class="show-submenu">Explore</Link></li>
	                </ul>
	        </nav>
	    </div>
	</header>
	<main>

	    <div class="filters_full version_2">
	        <div class="container clearfix">
	            <div class="pb-3 clearfix">
	                <div class="custom_select">
	                    <select name="sort" id="sort">
	                        <option value="popularity" selected="selected">Sort by Popularity</option>
	                        <option value="rating">Sort by Newness</option>
	                        <option value="date">Sort by Trending</option>
	                    </select>
	                </div>
	                <Link to="#0" class="open_filters btn_filters"><i class="bi bi-filter"></i><span>Filters</span></Link>
	                <div class="search_bar_list">
	                    <input type="text" class="form-control" placeholder="Search again..."/>
	                </div>
	                <Link class="btn_search_mobile btn_filters" data-bs-toggle="collapse" to="#collapseSearch"><i class="bi bi-search"></i></Link>
	            </div>
	        </div>
	        <div class="collapse" id="collapseSearch">
	            <div class="search_bar_list">
	                <input type="text" class="form-control" placeholder="Search again..." />
	            </div>
	        </div>
	        
	    </div>
	    

	    <div class="container margin_30_40">
	        <div class="page_header">
	            <div class="breadcrumbs">
	                <ul>
	                    <li><Link to="#">Home</Link></li>
	                    <li><Link to="#">Category</Link></li>
	                    <li>Page active</li>
	                </ul>
	            </div>
	            <h1>All:</h1><span> 814 found</span>
	        </div>

	        <div class="row">

	            <aside class="col-lg-3" id="sidebar_fixed">
	                <div class="filter_col">
	                    <div class="inner_bt"><Link to="#" class="open_filters"><i class="bi bi-x"></i></Link></div>
	                    <div class="filter_type">
	                        <h4><Link to="#filter_1" data-bs-toggle="collapse" class="opened">Categories</Link></h4>
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
	                        <h4><Link to="#filter_3" data-bs-toggle="collapse" class="closed">Snapps</Link></h4>
	                        <div class="collapse" id="filter_3">
	                            <div class="range_input">Price range from 0 to <span></span>  snapps</div>
	                            <div class="mb-4"><input type="range" min="1" max="5" step="0.2" value="4" data-orientation="horizontal" /></div>
	                        </div>
	                    </div>
	      
	                
	                 
	                    <div class="buttons">
	                        <Link to="#0" class="btn_1 full-width outline">Filter</Link>
	                    </div>
	                </div>
	            </aside>

	            <div class="col-lg-9">
	                <div class="row">
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="img/items/item-1-placeholder.png" data-src="img/items/item-11.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="img/items/item-1-placeholder.png" data-src="img/items/item-12.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                 
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="img/items/item-1-placeholder.png" data-src="img/items/item-13.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                   
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="img/items/item-1-placeholder.png" data-src="img/items/item-2.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="img/items/item-1-placeholder.png" data-src="img/items/item-3.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="img/items/item-1-placeholder.png" data-src="img/items/item-4.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-5.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-6.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-7.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-8.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100"/></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-9.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                    
	                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
	                        <div class="strip">
	                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
	                                <img src="assets/img/items/item-1-placeholder.png" data-src="assets/img/items/item-10.jpg" class="lazy" alt="" width="533" height="400" />
	                                <Link to="detail-page.html" class="strip_info">
	                                    <div class="item_title">
	                                       
	                                       <span class="badge bg-primary">3.25  snapps</span>
	                                    </div>
	                                </Link>
	                            </figure>
	                            <ul>
	                                <li>
	                                    <Link to="author.html" class="author">
	                                        <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                            <figure>
	                                                <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                        </div>
	                                        <h6>JBL Pods</h6>
	                                    </Link>
	                                </li>
	                                <li>
	                                    <Link to="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></Link> 50
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>

	                <div class="pagination_fg mb-4">
	                    <Link to="#">«</Link>
	                    <Link to="#" class="active">1</Link>
	                    <Link to="#">2</Link>
	                    <Link to="#">3</Link>
	                    <Link to="#">4</Link>
	                    <Link to="#">5</Link>
	                    <Link to="#">»</Link>
	                </div>

	            </div>
	   
	        </div>
	    </div>
	   
	</main>


	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-6">
					<h3>Quick Links</h3>
					<div class="links">
						<ul>
							<li><Link to="/catalog">Explore</Link></li>
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/register">Register</Link></li>
													</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<h3>Snappcoins</h3>
					<div class="links">
						<ul>
							<li><Link to="/connect">Connect Wallet</Link></li>
							<li><Link to="help.html">Faq</Link></li>
							<li><Link to="become-partner.html">Become a Partner</Link></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<h3>Resources</h3>
					<div class="links">
						<ul>
							<li><Link to="#">Community</Link></li>
							<li><Link to="#">How it Works</Link></li>
							<li><Link to="#">Latest Products</Link></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<h3>Keep in touch</h3>						
					<div id="newsletter">
							<div id="message-newsletter"></div>
							<form method="post" name="newsletter_form" id="newsletter_form">
								<div class="form-group">
									<input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="Your email" />
									<button type="submit" id="submit-newsletter"><i class="bi bi-chevron-right"></i></button>
								</div>
							</form>
						</div>
						<div class="follow_us">
							<ul>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" class="lazy" /></Link></li>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" class="lazy" /></Link></li>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" class="lazy" /></Link></li>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" class="lazy" /></Link></li>
							</ul>
						</div>
					
				</div>
			</div>
		
			<hr />
			<div class="row add_bottom_25">
				<div class="col-md-6">
					<ul class="footer-selector clearfix">
						<li>
							<div class="styled-select lang-selector">
								<select>
									<option value="English" selected>English</option>
									<option value="French">French</option>
									<option value="Spanish">Spanish</option>
									<option value="Russian">Russian</option>
								</select>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-md-6">
					<ul class="additional_links">
						<li><Link to="#">Terms and conditions</Link></li>
						<li>© 2023 Snappcoins</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	

	<div id="toTop"></div>
	

    <div id="modal-dialog" class="zoom-anim-dialog mfp-hide">
        <div class="modal_header">
            <h3>Snapp Now!</h3>
        </div>
        <form>
            <div class="sign-in-wrapper">
                <p>You are about to purchase <strong>"Amazing Art" #304</strong> from <strong>George Lucas</strong></p>
                <div class="form-group"> <label>Redeem With</label>
                    <input type="text" class="form-control" placeholder="3.5 snapps" disabled />
                </div>
           
                <ul>
                    <li>
                        Your balance <span>8.498  snapps</span>
                    </li>
                    <li>
                        Service fee 1.5%<span>0.125  snapps</span>
                    </li>
                
                </ul>
                <div class="text-center"> <input type="submit" class="btn_1 full-width mb-2" formaction="detail-page.html" value="Snapp It!" />
                    <input type="submit" value="Cancel" class="btn_1 full-width outline" />
                </div>
            </div>
        </form>
        
    </div>
    
    
    
    
    </>
   ) 
}
export default Catalog ;
