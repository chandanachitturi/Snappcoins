import React from 'react'; 
const Fun =() =>{
    return(
        <>
        
	
	<div id="preloader"><div data-loader="circle-side"></div></div>
				
	<header class="header clearfix element_to_stick">
	    <div class="layer"></div>
	    <div class="container">
	       <div class="logo">
	            <a href="index.html">
	                <img src="assets/img/logo.svg" alt="" width="170" height="35" class="dark" />
	                <img src="assets/img/logo-light-mode.svg" alt="" width="170" height="35" class="light" />
	            </a>
	        </div>
	        <ul class="top_menu">
	        	<li>
	        		<span class="color_mode_bt">
	        			<input id="theme_toggle" type="checkbox" name="theme_toggle"/>
						<label for="theme_toggle"></label>
	        		</span>
				</li>
	            <li><a href="login.html" class="btn_access">Log In</a></li>  <li><a href="connect-wallet.html" class="btn_access">Connect Snappcoins</a></li>
	        </ul>
	        <a href="#0" class="open_close">
	            <i class="bi bi-list"></i><span>Menu</span>
	        </a>
	        <nav class="main-menu">
	            <div id="header_menu">
	                <a href="#0" class="open_close">
	                    <i class="bi bi-x"></i>
	                </a>
	                 <a href="index.html" class="logo_menu">
	                	<img src="assets/img/logo-placeholder.png" data-src="img/logo.svg" alt="" width="120" height="30" class="dark lazy" />
	                	<img src="assets/img/logo-placeholder.png" data-src="img/logo-light-mode.svg" alt="" width="120" height="30" class="light lazy" />
	                </a>
	            </div>
	            <ul>
	                <li class="submenu">
	                    <a href="index.html" class="show-submenu">Home</a></li>
	                <li class="submenu"><a href="catalog.html" class="show-submenu">Explore</a></li>
	                </ul>
	        </nav>
	    </div>
	</header>

	
	<main>

	    <div class="hero_single version_2 jarallax" data-jarallax-video="mp4:./video/intro_blue1.mp4,webm:./video/intro_blue.webm,ogv:./video/intro_blue.ogv">
	        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
	            <div class="container">
	                <div class="row justify-content-center text-center">
	                    <div class="col-lg-7">
	                        <h1>Discover, Collect,<br />and Redeem Snapps!</h1>
	                        <p>The Largest Redemption Platform for Gamers</p>
	                        <form method="post" action="catalog.html" >
	                            <div class="row g-0 custom-search-input mx-auto">
	                                <div class="col-md-9">
	                                    <div class="form-group">
	                                        <input class="form-control" type="text" placeholder="Search item..." />
	                                    </div>
	                                </div>
	                                <div class="col-md-3">
	                                    <input type="submit" value="Find" />
	                                </div>
	                            </div>
	                            <div class="search_trends">
	                                <h5>Trending:</h5>
	                                <ul>
	                                    <li><a href="#0">Art</a></li>
	                                    <li><a href="#0">Games</a></li>
	                                    <li><a href="#0">Photo</a></li>
	                                </ul>
	                            </div>
	                        </form>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="wave hero"></div>
	    </div>
	    

	    <div class="container margin_90_90">
	        <div class="main_title center">
	            <span><em></em></span>
	            <h2>Featured Products</h2>
	            <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
	        </div>
	    

	        <div class="owl-carousel owl-theme featured_carousel" data-cue="slideInUp">
	            <div class="item">
	                <div class="strip">
	                    <figure> 
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-1.jpg" class="owl-lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="owl-lazy" width="100" height="100" />
	                                    </figure>
	                                </div>
	                                <h6>JBL Noise Cancellation Pods</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul> 
	                </div>
	            </div>
	           
	            <div class="item">
	                <div class="strip">
	                    <figure> 
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-3.jpg" class="owl-lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar3.jpg" alt="" class="owl-lazy" width="100" height="100" />
	                                    </figure>
	                                </div>
	                                  <h6>Noise 6S Smartwatch</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	           
	            <div class="item">
	                <div class="strip">
	                    <div data-countdown="2022/03/15" class="countdown"></div>
	                    <figure> 
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-4.jpg" class="owl-lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                                
	                                <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="owl-lazy" width="100" height="100" />
	                                    </figure>
	                                </div>
	                                <h6>John Player Wayfarer</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            
	            <div class="item">
	                <div class="strip">
	                    <figure> 
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-5.jpg" class="owl-lazy" alt="" width="533" height="400" />
	                        <a href="author.html" class="author">
	                        </a>
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar4.jpg" alt="" class="owl-lazy" width="100" height="100" />
	                                    </figure>
	                                </div>
	                                <h6>@Tomas_Clue</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            
	            <div class="item">
	                <div class="strip">
	                    <figure> 
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-6.jpg" class="owl-lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="owl-lazy" width="100" height="100" />
	                                    </figure>
	                                </div>
	                                <h6>@Pixel_inc</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	       
	            <div class="item">
	                <div class="strip">
	                    <figure> 
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-7.jpg" class="owl-lazy" alt="" width="598" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar3.jpg" alt="" class="owl-lazy" width="100" height="100" />
	                                    </figure>
	                                </div>
	                                <h6>@Marc_Osl</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	          
	        </div>
	     
	        <p class="text-center mt-4" data-cue="slideInUp"><a href="catalog.html" class="btn_1 medium pulse_bt">Start Redeeming</a></p>
	    </div>
	

	    <div class="bg_gray">
	        <div class="container margin_120_90">
	            <div class="main_title version_2">
	                <span><em></em></span>
	                <h2>Weekly Top Games</h2>
	                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
	                <a href="#0">View All <i class="bi bi-arrow-right"></i></a>
	            </div>
	           

	            <div class="row author_list">
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>1</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Junglee Rummy</h6>
	                            
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>2</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Callbreak</h6>
	                           
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>3</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar3.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Ludo King</h6>
	                            
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>4</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar4.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Cricket League</h6>
	                           
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>5</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar5.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Evony</h6>
	                     
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>6</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar6.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Coin Master</h6>
	                          
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>7</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar7.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Free Fire Max</h6>
	                          
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>8</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar8.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Klondike Adventures</h6>
	                            
	                        </div>
	                    </a>
	                </div>
	                <div class="col-lg-4 col-md-6" data-cue="slideInUp">
	                    <a href="author.html" class="author">
	                        <strong>9</strong>
	                        <div class="author_thumb veryfied">
	                            <i class="bi bi-check"></i>
	                            <figure>
	                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar9.jpg" alt="" class="lazy" width="100" height="100" />
	                            </figure>
	                        </div>
	                        <div>
	                            <h6>Airforce Royale</h6>
	                       
	                        </div>
	                    </a>
	                </div>
	            </div>
	           
            

	            <div class="banner mt-5 lazy" data-bg="url(img/banner_bg.jpg)" data-cue="slideInUp">
	            	<div class="d-flex align-items-center opacity-mask justify-content-between p-5" data-opacity-mask="rgba(0, 0, 0, 0.2)">
						<strong><div>
							<small>Join Snappcoins</small>
							<h3>Become a Partner</h3>
							<p>Showcase your games and attract loyal fans!</p>
						</div></strong>
						<div><a href="become-partner.html" class="btn_1 medium pulse_bt">Join Now</a></div>
					</div>
					
	            </div>
	          

	        </div>
	   
	    </div>
	  

	    <div class="container margin_120_90">
	        <div class="main_title version_2">
	            <span><em></em></span>
	            <h2>New Items</h2>
	            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
	            <a href="catalog.html">View All <i class="bi bi-arrow-right"></i></a>
	        </div>
	        

	        <div class="row justify-content-center">
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="asset/img/items/item-1-placeholder.png" data-src="img/items/item-8.jpg" class="lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                             
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                </div>
	                                <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	           
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-9.jpg" class="lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar4.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                </div>
	                               <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	          
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-10.jpg" class="lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                              
	                                <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar4.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                </div>
	                               <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-11.jpg" class="lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                              
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar3.jpg" alt="" class="lazy" width="100" height="100" />
	                                    </figure>
	                                </div>
	                               <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	          
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-12.jpg" class="lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100" />
                                            </figure>
	                                </div>
	                                <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-6.jpg" class="lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                </div>
	                               <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	          
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-7.jpg" class="lazy" alt="" width="598" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                               
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar3.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                </div>
	                              <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	         
	            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-cue="slideInUp">
	                <div class="strip">
	                    <figure>
	                        <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-8.jpg" class="lazy" alt="" width="533" height="400" />
	                        <a href="detail-page.html" class="strip_info">
	                            <div class="item_title">
	                              
	                                 <span class="badge bg-primary">3.25  snapps</span>
	                            </div>
	                        </a>
	                    </figure>
	                    <ul>
	                        <li>
	                            <a href="author.html" class="author">
	                                <div class="author_thumb">
	                                    <figure>
	                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
	                                </div>
	                               <h6>Brand Name</h6>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#0" class="wish_bt"><i class="bi bi-heart-fill"></i></a> 50
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            
	        </div>
	        
	        <p class="text-center mt-4" data-cue="slideInUp"><a href="catalog.html" class="btn_1 gradient pulse_bt">View New Items</a></p>
	    </div>
	    

	    <div class="bg_gray">
	        <div class="container margin_120_90">
	            <div class="main_title center mb-5">
	                <span><em></em></span>
	                <h2>Create Your Account & Start Snapping!</h2>
	                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
	            </div>
	            <div class="row justify-content-md-center how_2">
	                <div class="col-lg-5 text-center">
	                    <figure class="mb-5">
	                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/web_wireframe.svg" alt="" class="img-fluid lazy" width="360" height="380" />
	                    </figure>
	                </div>
	                <div class="col-lg-5">
	                    <ul>
	                        <li data-cue="slideInUp">
	                            <h3><span>#01.</span> Set up your Snappcoins account</h3>
	                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
	                        </li>
	                        <li data-cue="slideInUp">
	                            <h3><span>#02.</span> Check your Snapp balance</h3>
	                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
	                        </li>
	                        <li data-cue="slideInUp">
	                            <h3><span>#03.</span> Use your Snapps & redeem!</h3>
	                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
	                        </li>
	                    </ul> <p class="add_top_30" data-cue="slideInUp"><a href="register.html" class="btn_1">Join Now!</a></p>
	                </div>
	                
	            </div>
	        </div>
	        
	    </div>
	  

	    <div class="container margin_120_90">
	    	<div class="main_title version_2">
	            <span><em></em></span>
	            <h2>Latest News</h2>
	            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
	            <a href="#0">View All <i class="bi bi-arrow-right"></i></a>
	        </div>
	        

	    	<div class="row">
			    <div class="col-lg-4" data-cue="slideInUp">
			        <article class="blog">
			            <figure>
			                <a href="blog-post.html"><img src="img/item-blog-placeholder.png" data-src="img/blog-5.jpg" alt="" class="lazy" width="800" height="533" />
			                </a>
			            </figure>
			            <div class="post_info">
			                <small>Category - 20 Nov. 2021</small>
			                <h2><a href="blog-post.html">Ea exerci option hendrerit</a></h2>
			                <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
			                <ul>
			                    <li>
			                        <div class="thumb"><img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" class="lazy" alt="" width="68" height="68" /></div> Admin
			                    </li>
			                    <li><i class="bi bi-chat"></i>20</li>
			                </ul>
			            </div>
			        </article>
			        
			    </div>
			    <div class="col-lg-4" data-cue="slideInUp">
			        <article class="blog">
			            <figure>
			                <a href="blog-post.html"><img src="img/item-blog-placeholder.png" data-src="img/blog-4.jpg" alt="" class="lazy" width="800" height="533" />
			                </a>
			            </figure>
			            <div class="post_info">
			                <small>Category - 20 Nov. 2021</small>
			                <h2><a href="blog-post.html">At usu sale dolorum offendit</a></h2>
			                <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
			                <ul>
			                    <li>
			                        <div class="thumb"><img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" class="lazy" alt="" width="68" height="68" /></div> Admin
			                    </li>
			                    <li><i class="bi bi-chat"></i>20</li>
			                </ul>
			            </div>
			        </article>
			        
			    </div>
			    <div class="col-lg-4" data-cue="slideInUp">
			        <article class="blog">
			            <figure>
			                <a href="blog-post.html"><img src="img/item-blog-placeholder.png" data-src="img/blog-6.jpg" alt="" class="lazy" width="800" height="533" />
			                </a>
			            </figure>
			            <div class="post_info">
			                <small>Category - 20 Nov. 2021</small>
			                <h2><a href="blog-post.html">Iusto nominavi petentium in</a></h2>
			                <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
			                <ul>
			                    <li>
			                        <div class="thumb"><img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" class="lazy" alt="" width="68" height="68" /></div> Admin
			                    </li>
			                    <li><i class="bi bi-chat"></i>20</li>
			                </ul>
			            </div>
			        </article>
			        
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
							<li><a href="catalog.html">Explore</a></li>
							<li><a href="login.html">Login</a></li>
							<li><a href="register.html">Register</a></li>
													</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<h3>Snappcoins</h3>
					<div class="links">
						<ul>
							<li><a href="connect-wallet.html">Connect Wallet</a></li>
							<li><a href="help.html">Faq</a></li>
							<li><a href="become-partner.html">Become a Partner</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<h3>Resources</h3>
					<div class="links">
						<ul>
							<li><a href="#">Community</a></li>
							<li><a href="#">How it Works</a></li>
							<li><a href="#">Latest Products</a></li>
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
				            <li>
				                <a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" class="lazy" /></a>
				            </li>
				            <li>
				                <a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" class="lazy" /></a>
				            </li>
				            <li>
				                <a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" class="lazy" /></a>
				            </li>
				            <li>
				                <a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" class="lazy" /></a>
				            </li>
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
						<li><a href="#">Terms and conditions</a></li>
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
                    <input type="text" class="form-control" placeholder="3.25 snapps" disabled />
                </div>
                <div class="form-group">
                    <label>Enter quantity <small>(10 available)</small></label>
                    <input type="text" class="form-control" />
                </div>
                <ul>
                    <li>
                        Your balance <span>8.498  snapps</span>
                    </li>
                    <li>
                        Service fee 1.5%<span>0.125  snapps</span>
                    </li>
                    <li>
                        You will pay<span>8.798  snapps</span>
                    </li>
                </ul>
                <div class="text-center">
                    <input type="submit" value="Place a bid" class="btn_1 full-width mb-2" />
                    <input type="submit" value="Cancel" class="btn_1 full-width outline" />
                </div>
            </div>
        </form>
       
    </div>
   </>
    )
}
export default Fun;