import React from 'react';
const Partner=() =>
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
                            <figure><img src="assets/img/cover_small.jpg" alt="" width="300" height="138" /></figure>
                            
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
                    <img src="img/logo-placeholder.png" data-src="img/logo.svg" alt="" width="120" height="30" class="dark lazy" />
                    <img src="img/logo-placeholder.png" data-src="img/logo-light-mode.svg" alt="" width="120" height="30" class="light lazy" />
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
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.4)">
        </div>
        <div class="wave hero"></div>
    </div>
    

    <div class="container margin_30_40">
        <div class="row">
            <div class="col-lg-3">
                <div class="main_profile edit_section">
                    <div class="author">
                        <div class="author_thumb veryfied">
                            <i class="bi bi-check"></i>
                            <figure>
                                <img src="img/avatar-placeholder.png" data-src="img/avatar1.jpg" alt="" class="lazy" width="100" height="100"/>
                            </figure>
                        </div>
                    </div>
                    <h1>@Junglee Rummy</h1>
                    <ul>
                        <li><a href="partner-home.html" ><i class="bi bi-file-earmark-arrow-up"></i>Dashboard</a></li>
                        <li><a href="author-edit-profile.html"><i class="bi bi-person"></i>Edit profile</a></li>
                        <li><a href="partner-account-settings.html" class="active"><i class="bi bi-gear"></i>Account settings</a></li>
                        <li><a href="index.html"><i class="bi bi-box-arrow-right"></i>Log out</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-9 ps-lg-5">
                <div class="main_title version_2">
                    <span><em></em></span>
                    <h2>Account Settings</h2>
                </div>

                <div class="row">
                    <div class="col-md-6">
                         <div class="form-group">
                            <label>Change Password</label>
                            <input type="text" class="form-control" placeholder="e.g. Abstract modern art" />
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label>Repeat Password</label>
                            <input type="text" class="form-control" placeholder="e.g. Abstract modern art" />
                        </div>
                    </div>
                </div>
                <hr class="mt-3 mb-5" />
                <h6>Settings</h6>
                <div class="row">
                     <div class="col-md-6">
                         <div class="form-group switch_wrapper">
                            <label>Reminders</label>
                            <p class="mb-0">Ea quo utroque forensibus eloquentiam</p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" role="switch" checked="checked" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group switch_wrapper">
                            <label>Promote</label>
                            <p class="mb-0">Ea quo utroque forensibus eloquentiam</p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" role="switch" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group switch_wrapper">
                            <label>Disable Profile Temporarily</label>
                            <p class="mb-0">Ea quo utroque forensibus eloquentiam</p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" role="switch" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group switch_wrapper">
                            <label>Newsletter</label>
                            <p class="mb-0">Ea quo utroque forensibus eloquentiam</p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" role="switch" />
                            </div>
                        </div>
                    </div>
                </div>
                

                
            
                <p class="text-end mt-4"><a href="#0" class="btn_1">Save changes</a></p>
                
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
                            <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" class="lazy" /></a></li>
                            <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" class="lazy" /></a></li>
                            <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" class="lazy" /></a></li>
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
</>
)}
export default Partner;