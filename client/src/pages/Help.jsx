import React from 'react' ;
import {Link} from 'react-router-dom'; 
const Help=()=>{
    return (
    <>
    <React.Fragment>
    <div>
	
	<div id="preloader">
        <div data-loader="circle-side">
            </div>
            </div>
				
    <header class="header clearfix element_to_stick">
	    <div class="layer"></div>
	    <div class="container">
	       <div class="logo">
	            <Link href='/'>
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
	            <li><link to="login.html" class="btn_access">Log In</link></li>  <li><link to="connect-wallet.html" class="btn_access">Connect Snappcoins</link></li>
	        </ul>
	    
	        <Link href="#0" class="open_close">
	            <i class="bi bi-list"></i><span>Menu</span>
	        </Link>
	        <nav class="main-menu">
	            <div id="header_menu">
	                <Link to="#0" class="open_close">
	                    <i class="bi bi-x"></i>
	                </Link>
	                <Link to="/" class="logo_menu">
	                	<img src="assets/img/logo-placeholder.png" data-src="assets/img/logo.svg" alt="" width="120" height="30" class="dark lazy"/>
	                	<img src="assets/img/logo-placeholder.png" data-src="assets/img/logo-light-mode.svg" alt="" width="120" height="30" class="light lazy"/>
	                </Link>
	            </div>
	            <ul>
	                <li class="submenu">
	                    <Link to="/" class="show-submenu">Home</Link></li>
	                <li class="submenu"><Link href="/catalog" class="show-submenu">Explore</Link></li>
	                </ul>
	        </nav>
	    </div>
	</header>
<main>
        <div class="hero_single inner_pages background-image" data-background="url(assets/img/hero_general.jpg)">
	        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
	            <div class="container">
	                <div class="row justify-content-center">
	                    <div class="col-xl-8 col-lg-10 col-md-8">
	                        <h1 class="slide-animated one">Help and support</h1>
	                        <p class="slide-animated two">Search questions or useful articles</p>
	                        <form class="slide-animated three">
	                            <div class="search_bar">
	                                <input type="text" class="form-control" placeholder="What are you looking for?" />
	                                <input type="submit" value="Search" />
	                            </div>
	                        </form>
	                    </div>
	                </div>
	                
	            </div>
	        </div>
	        <div class="wave hero"></div>
	    </div>
       <div class="container margin_60_90">
	        <div class="main_title center">
	            <span><em></em></span>
	            <h2>Select a topic</h2>
	            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
	        </div>
	        <div class="row">
	            <div class="col-lg-4 col-md-6">
	                <Link class="box_topic" to="#0">
	                	<span><i class="bi bi-wallet2"></i></span>
	                    <h3>Payments</h3>
	                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
	                </Link>
	            </div>
	            <div class="col-lg-4 col-md-6">
	                <Link class="box_topic" to="#0">
	                    <span><i class="bi bi-cloud-arrow-up"></i></span>
	                    <h3>Submission</h3>
	                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</p>
	                </Link>
	            </div>
	            <div class="col-lg-4 col-md-6">
	                <Link class="box_topic" to="#0">
	                    <span><i class="bi bi-question-lg"></i></span>
	                    <h3>General help</h3>
	                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
	                </Link>
	            </div>
	            <div class="col-lg-4 col-md-6">
	                <Link class="box_topic" to="#0">
	                    <span><i class="bi bi-globe"></i></span>
	                    <h3>International</h3>
	                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex.</p>
	                </Link>
	            </div>
	            <div class="col-lg-4 col-md-6">
	                <Link class="box_topic" to="#0">
	                    <span><i class="bi bi-check-circle"></i></span>
	                    <h3>Requirements</h3>
	                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
	                </Link>
	            </div>
	            <div class="col-lg-4 col-md-6">
	                <Link class="box_topic" to="#0">
	                    <span><i class="bi bi-chat-left-text"></i></span>
	                    <h3>Reviews</h3>
	                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
	                </Link>
	            </div>
	        </div>
           <div class="main_title version_2 mt-5">
	                <span><em></em></span>
	                <h2>Popular articles</h2>
	                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
	            </div>
	            <div class="list_articles add_bottom_25 clearfix">
	                <ul>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Et dicit vidisse epicurei pri</Link></li>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Ad sit virtute rationibus efficiantur</Link></li>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Partem vocibus omittam pri ne</Link></li>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Case debet appareat duo cu</Link></li>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Impedit torquatos quo in</Link></li>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Nec omnis alienum no</Link></li>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Quo eu soleat facilisi menandri</Link></li>
	                    <li><Link to="#0"><i class="bi bi-file-earmark-text"></i>Et dicit vidisse epicurei pri</Link></li>
	                </ul>
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
							<li><Link to="connect-wallet.html">Connect Wallet</Link></li>
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
									<input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="Your email"/>
									<button type="submit" id="submit-newsletter"><i class="bi bi-chevron-right"></i></button>
								</div>
							</form>
						</div>
						<div class="follow_us">
							<ul>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" class="lazy"/></Link></li>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" class="lazy"/></Link></li>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" class="lazy"/></Link></li>
								<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" class="lazy"/></Link></li>
							</ul>
						</div>
					
				</div>
			</div>
			
			<hr/>
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
    </div>
</React.Fragment>
    </>
    )
}


export default Help ;
