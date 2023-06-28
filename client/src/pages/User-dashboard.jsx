import React from 'react' ;
import {Link} from 'react-router-dom';
const User =()=>{
   return(
    <>
<div id="preloader"><div data-loader="circle-side"></div></div>

<header class="header_in clearfix element_to_stick">
    <div class="layer"></div>
    <div class="container">
       <div class="logo">
            <Link to="/">
                <img src="assets/img/logo.svg" alt="" width="170" height="35" class="dark" />
                <img src="assets/img/logo-light-mode.svg" alt="" width="170" height="35" class="light" />
            </Link>
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
                    <Link to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <figure><img src="assets/img/avatar-user.jpg" alt="" /></figure>
                        <div class="balance">
                                <h6 class="mb-0">Balance</h6>
                                <span>4689  snapps</span>
                            </div>
                    </Link>
                    <div class="dropdown-menu dropdown-menu-end animate fadeIn">
                        <div class="dropdown-menu-content">
                            <figure><img src="assets/img/cover_small.jpg" alt="" width="300" height="138" /></figure>
                            <h4>@AkshayKumar</h4>
                            <p class="author_number">Ox465d53...9df5 <Link to="#0"><i class="bi bi-clipboard"></i></Link></p>
                            <div class="balance">
                                <h4>Balance</h4>
                                <span>4689  snapps</span>
                            </div>
                            <ul>
                                <li><Link to="#"><i class="bi bi-person"></i>My profile</Link></li>
                                <li><Link to="#"><i class="bi bi-pen"></i>Edit profile</Link></li>
                                <li><Link to="#"><i class="bi bi-gear"></i>Account</Link></li>
                                <li><Link to="#"><i class="bi bi-image"></i>My items</Link></li>
                                <li><Link to="/"><i class="bi bi-box-arrow-right"></i>Log out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </li>
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

    <div class="hero_single inner_pages author_page jarallax" data-jarallax>
        <img class="jarallax-img" src="img/hero_general.jpg" alt="" />
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.4)"></div>
        <div class="wave hero"></div>
    </div>
    
    
    <div class="container margin_30_40">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6">
                <div class="main_profile">
                    <div class="author">
                        <div class="author_thumb veryfied">
                            <i class="bi bi-check"></i>
                            <figure>
                                <img src="assets/img/avatar-user.jpg" data-src="img/avatar-user.jpg" alt="" class="lazy" width="100" height="100" />
                            </figure>
                        </div>
                    </div>
                    <h1>@AkshayKumar</h1>
                    <p class="author_number">Ox465d53...9df5 <Link to="#0"><i class="bi bi-clipboard"></i></Link></p>
                   <h2><span class="badge bg-primary d-block">4689 <small>snapps</small></span></h2>
                    <p>Member since March 28 2023</p>
                   
                    <hr/>
                    
                    <ul>
                        <li>Redeemed <span class="badge bg-success">120</span></li>
                        <li>Pending Orders <span class="badge bg-warning">56</span></li>
                       </ul>
                    
                    <small>Member since March 28 2023</small>
               
                </div>
            </div>
            <div class="col-lg-9 ps-lg-5">
                <div class="tabs_detail">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <Link id="tab-A" href="#pane-A" class="nav-link active" data-bs-toggle="tab" role="tab">Recommended</Link>
                        </li>
                    
                        <li class="nav-item">
                            <Link id="tab-B" href="#pane-B" class="nav-link" data-bs-toggle="tab" role="tab">Transaction History</Link>
                        </li>
                    
                    </ul>
                    <div class="tab-content" role="tablist">
                        <div id="pane-A" class="card tab-pane fade show active" role="tabpanel">
                            <div class="card-header" role="tab" id="heading-A">
                                <h5>
                                    <Link class="collapsed" data-bs-toggle="collapse" href="#collapse-A">
                                        Recommended
                                    </Link>
                                </h5>
                            </div>
                            <div id="collapse-A" class="collapse" role="tabpanel">
                                <div class="row mt-lg-5 mt-3">
                                     <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div class="strip">
                            <figure> <Link to="#modal-dialog" class="btn_1 modal_popup">Snapp Now!</Link>
                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-1.jpg" class="lazy" alt="" width="533" height="400" />
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
                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-4.jpg" class="lazy" alt="" width="533" height="400" />
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
                                <img src="assets/img/items/item-1-placeholder.png" data-src="img/items/item-11.jpg" class="lazy" alt="" width="533" height="400" />
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
                                </div>
    
                            </div>
                        </div>
                       
                        <div id="pane-B" class="card tab-pane fade" role="tabpanel">
                            <div class="card-header" role="tab" id="heading-B">
                                <h5>
                                    <Link class="collapsed" data-bs-toggle="collapse" href="#collapse-B">
                                       Transaction History
                                    </Link>
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
                                <Link to="#0"><img src="assets/img/blog-5.jpg" alt="" /></Link>
                            </div>
                            <small>11.08.2022</small>
                            <h3><Link to="#" title="">#ID 20220325</Link></h3>
                            <span class="badge bg-warning text-light">In Transit</span>
                        </li>
                        <li>
                            <div class="alignleft">
                                <Link to="#0"><img src="img/blog-6.jpg" alt="" /></Link>
                            </div>
                            <small>11.08.2022</small>
                            <h3><Link to="#" title="">#ID 20220125</Link></h3>
                            <span class="badge bg-success text-light">Delivered</span>
                        </li>
                        <li>
                            <div class="alignleft">
                                <Link to="#0"><img src="assets/img/blog-4.jpg" alt="" /></Link>
                            </div>
                            <small>11.08.2022</small>
                            <h3><Link to="#" title="">#ID 20220225</Link></h3>
                            <span class="badge bg-success text-light">Delivered</span>
                        </li>
                    </ul>
                </div>
             
            </aside>
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
export default User ;