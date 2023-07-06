import React from 'react'; 
import {Link} from 'react-router-dom' ;
const Login =() =>{
    return(
    <>
    <div id="login_bg">
	
	{/* <div id="preloader"><div data-loader="circle-side"></div></div> */}
	
	<div id="login">
		<aside>
			<figure>
				<Link to="/" class="logo_account">
					<img src="assets/img/logo.svg" alt="" width="140" height="35" class="dark" />
	                <img src="assets/img/logo-light-mode.svg" alt="" width="140" height="35" class="light" />
				</Link>
			</figure>
			  <form>
				<div class="access_social">
					<Link to="#0" class="social_bt facebook">Login with Facebook</Link>
					<Link to="#0" class="social_bt google">Login with Google</Link>
				</div>
				<div class="divider"><span>Or</span></div>
				<div class="form-group mb-3">
					<input type="email" class="form-control" name="email" id="email" placeholder="Email" />
				</div>
				<div class="form-group">
					<input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" />
				</div>
				<div class="clearfix add_bottom_30">
					<div class="checkboxes float-start">
						<label class="container_check">Remember me
						  <input type="checkbox" />
						  <span class="checkmark"></span>
						</label>
					</div>
					<div class="float-end"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
				</div>
				<Link to="/user" class="btn_1 full-width">Login</Link>
				<div class="text-center add_top_10">New to <Link to="/">SnappCoins?</Link> <strong><Link to="/register">Sign up!</Link></strong></div>
			</form>
			<div class="copy">© 2023 Snappcoins</div>
		</aside>
	</div>
	
  
</div>
    </>
        )
}
export default Login ;