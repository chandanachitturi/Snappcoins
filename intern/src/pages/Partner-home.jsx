import React from 'react';
const Part=() =>
{
return(
    <>


<div id="preloader"><div data-loader="circle-side"></div></div>

<header class="header_in clearfix element_to_stick" >
        <div class="layer"></div>
    <div class="container">
       <div class="logo">
            <a href="index.html">
                <img src="assets/img/logo.svg" alt="" width="170" height="35" class="dark" />
                <img src="assets/img/logo-light-mode.svg" alt="" width="170" height="35" class="light" />
            </a>
        </div>
        <ul class="top_menu drop_user">
            <li>
                <span class="color_mode_bt">
                    <input id="theme_toggle" type="checkbox" name="theme_toggle"/>
                    <label for="theme_toggle"></label>
                </span>
            </li>
            <li>
                <div class="dropdown user clearfix">
                    <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <figure><img src="assets/img/avatar1.jpg" alt="" /></figure>
                        <div class="balance">
                                <h6 class="mb-0">Junglee Rummy</h6>
                               
                            </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end animate fadeIn">
                        <div class="dropdown-menu-content">
                            <figure><img src="img/cover_small.jpg" alt="" width="300" height="138" /></figure>
                           
                           <ul>
                        <li><a href="partner-home.html" class="active"><i class="bi bi-file-earmark-arrow-up"></i>Dashboard</a></li>
                        
                        <li><a href="partner-account-settings.html"><i class="bi bi-gear"></i>Account settings</a></li>
                        <li><a href="index.html"><i class="bi bi-box-arrow-right"></i>Log out</a></li>
                    </ul>
                        </div>
                    </div>
                </div>
            
            </li>
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

    <div class="hero_single inner_pages author_page jarallax" data-jarallax>
        <img class="jarallax-img" src="img/hero_general.jpg" alt="" />
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.4)"></div>
        <div class="wave hero"></div>
    </div>

    
    <div class="container margin_30_40">
        <div class="row justify-content-center">
          
            <div class="col-lg-3">
                <div class="main_profile edit_section">
                    <div class="author">
                        <div class="author_thumb veryfied">
                            <i class="bi bi-check"></i>
                            <figure>
                                <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100" />
                            </figure>
                        </div>
                    </div>
                    <h1>@Junglee Rummy</h1>
                    <ul>
                        <li><a href="partner-home.html" class="active"><i class="bi bi-file-earmark-arrow-up"></i>Dashboard</a></li>
                        <li><a href="partner-account-settings.html"><i class="bi bi-gear"></i>Account settings</a></li>
                        <li><a href="index.html"><i class="bi bi-box-arrow-right"></i>Log out</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-9 ps-lg-5">
                <div class="tabs_detail">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a id="tab-A" href="#pane-A" class="nav-link active" data-bs-toggle="tab" role="tab">Buy Snappcoins</a>
                        </li>
                        <li class="nav-item">
                            <a id="tab-B" href="#pane-B" class="nav-link" data-bs-toggle="tab" role="tab">Purchase History</a>
                        </li>
                       
                    </ul>
                    <div class="tab-content" role="tablist">
                        <div id="pane-A" class="card tab-pane fade show active" role="tabpanel">
                            <div class="card-header" role="tab" id="heading-A">
                                <h5>
                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-A">
                                        Buy SnappCoins
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-A" class="collapse" role="tabpanel">
                                <div class="row mt-lg-5 mt-3">
                               
                                
                <div class="main_title version_2">
                    <span><em></em></span>
                    <h2>Buy Snappcoins</h2>
                </div>

                <div class="row">
                    <div class="col-md-6">
                         <div class="form-group">
                            <label>Enter Amount</label>
                            <input type="text" class="form-control" placeholder="$1000" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                           <label>Collect Snappcoins</label>
                           <div class="box_bid">
                    
                    
                    <div class="item_meta"> <h3 class=""><strong>500 snappcoins</strong></h3>
                       
                    </div>
                  
                </div>
                        </div>
                        
                        
                    </div>
                </div>
                
                <hr class="mt-3 mb-5" />
                <h6>Notifications</h6>
                <div class="row">
                     <div class="col-md-12">
                         <div class="form-group switch_wrapper">
                            <label>Set Reminders</label>
                            <p class="mb-0">Ea quo utroque forensibus eloquentiam</p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" role="switch" checked="checked" />
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
             
                
            
                <div class="text-center form-group"><a href="#" class="btn_1 medium pulse_bt">Continue to Payment Gateway</a></div>
                
                                </div>
          
                                
                                
                            </div>
                        </div>
                    
                        <div id="pane-B" class="card tab-pane fade" role="tabpanel">
                            <div class="card-header" role="tab" id="heading-B">
                                <h5>
                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-B">
                                       Purchase History
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-B" class="collapse" role="tabpanel">
                                <div class="row mt-lg-5 mt-3">
                                    
                                     <aside class="col-lg-12">
                <div class="widget search_blog">
                    <div class="form-group">
                        <input type="text" name="search" id="search" class="form-control" placeholder="Terms..." />
                        <span><input type="submit" value="Search" /></span>
                    </div>
                </div>
                
                <div class="widget">
                   
                    <ul class="comments-list">
                        <li>
                            <div class="alignleft">
                                <a href="#0"><img src="img/blog-5.jpg" alt="" /></a>
                            </div>
                            <small>11.08.2022</small>
                            <h3><a href="#" title="">#ID 20220325</a></h3>
                            <span class="badge bg-warning text-light">Pending</span>
                        </li>
                        <li>
                            <div class="alignleft">
                                <a href="#0"><img src="img/blog-6.jpg" alt="" /></a>
                            </div>
                            <small>11.08.2022</small>
                            <h3><a href="#" title="">#ID 20220125</a></h3>
                            <span class="badge bg-success text-light">Success</span>
                        </li>
                        <li>
                            <div class="alignleft">
                                <a href="#0"><img src="img/blog-4.jpg" alt="" /></a>
                            </div>
                            <small>11.08.2022</small>
                            <h3><a href="#" title="">#ID 20220225</a></h3>
                            <span class="badge bg-success text-light">Success</span>
                        </li>
                    </ul>
                </div>
                         </aside>
  </div>
                             
                            </div>
                        </div>
                       
                        <div id="pane-C" class="card tab-pane fade" role="tabpanel">
                       
                            <div id="collapse-C" class="collapse" role="tabpanel">
                                <div class="follow_list mt-lg-3">
                                    <ul>
                                        <li>
                                            <div class="author">
                                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
                                                    <figure>
                                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100" /></figure>
                                                </div>
                                                <div>
                                                    <h6>@George_lucas</h6>
                                                    <a href="#0">Unfollow</a>
                                                </div>
                                            </div>
                                            <div class="thumbs_artwork">
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_1.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_2.jpg" alt="" class="lazy img-fluid" width="220" height="170"/>
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_3.jpg" alt="" class="lazy img-fluid" width="220" height="170"/>
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_4.jpg" alt="" class="lazy img-fluid" width="220" height="170"/>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="author">
                                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
                                                    <figure>
                                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
                                                </div>
                                                <div>
                                                    <h6>@Monica_claus</h6>
                                                    <a href="#0">Unfollow</a>
                                                </div>
                                            </div>
                                            <div class="thumbs_artwork">
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_5.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_6.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_7.jpg" alt="" class="lazy img-fluid" width="220" height="170"/>
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_8.jpg" alt="" class="lazy img-fluid" width="220" height="170"/>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="author">
                                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
                                                    <figure>
                                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar3.jpg" alt="" class="lazy" width="100" height="100" /></figure>
                                                </div>
                                                <div>
                                                    <h6>@Frederick</h6>
                                                    <a href="#0">Unfollow</a>
                                                </div>
                                            </div>
                                            <div class="thumbs_artwork">
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_9.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_10.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_11.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_12.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>

                        <div id="pane-D" class="card tab-pane fade" role="tabpanel">
                     
                            <div id="collapse-D" class="collapse" role="tabpanel">
                                <div class="follow_list mt-lg-3">
                                    <ul>
                                        <li>
                                            <a href="#0" class="author">
                                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
                                                    <figure>
                                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100" />
                                                    </figure>
                                                </div>
                                                <h6>@George_lucas</h6>
                                            </a>
                                            <div class="thumbs_artwork">
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_1.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_2.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_3.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_4.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#0" class="author">
                                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
                                                    <figure>
                                                        <img src="img/avatar-placeholder.png" data-src="img/avatar2.jpg" alt="" class="lazy" width="100" height="100" /></figure>
                                                </div>
                                                <h6>@Monica_claus</h6>
                                            </a>
                                            <div class="thumbs_artwork">
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_5.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_6.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_7.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_8.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#0" class="author">
                                                <div class="author_thumb veryfied"><i class="bi bi-check"></i>
                                                    <figure>
                                                        <img src="assets/img/avatar-placeholder.png" data-src="img/avatar3.jpg" alt="" class="lazy" width="100" height="100" /></figure>
                                                </div>
                                                <h6>@Frederick</h6>
                                            </a>
                                            <div class="thumbs_artwork">
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_9.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_10.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_11.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                                <figure>
                                                    <img src="assets/img/items/item-1-placeholder.png" data-src="img/follow_list_pic_12.jpg" alt="" class="lazy img-fluid" width="220" height="170" />
                                                </figure>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                           
                            </div>
                        </div>
  
                    </div>
               
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
                            <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" class="lazy" /></a></li>
                            <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" class="lazy"/></a></li>
                            <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" class="lazy"/></a></li>
                            <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" class="lazy"/></a></li>
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
                <input type="text" class="form-control" placeholder="3.5 snapps" disabled />
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
            </div>
        </div>
    </form>

</div>

</>
)}
export default Part;