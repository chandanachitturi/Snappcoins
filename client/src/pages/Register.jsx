import React from 'react';
import {Link} from 'react-router-dom' ;
const Register =() =>{
return(
    <>
    <div id="register_bg">

{/* <div id="preloader"><div data-loader="circle-side"></div></div> */}

<nav id="menu" class="fake_menu"></nav>

<div id="login">
    <aside>
        <figure>
            <Link to="/" class="logo_account">
                <img src="assets/img/logo.svg" alt="" width="140" height="35" class="dark" />
                <img src="assets/img/logo-light-mode.svg" alt="" width="140" height="35" class="light" />
            </Link>
        </figure>
        <div class="access_social">
                <Link to="#0" class="social_bt facebook">Register with Facebook</Link>
                <Link to="#0" class="social_bt google">Register with Google</Link>
            </div>
        <div class="divider"><span>Or</span></div>
        <form autocomplete="off">
            <div class="form-group mb-3">
                <input class="form-control" type="text" placeholder="Username" />
                <i class="icon_pencil-edit"></i>
            </div>
            <div class="form-group mb-3">
                <input class="form-control" type="email" placeholder="Email" />
            </div>
            <div class="form-group mb-3">
                <input class="form-control" type="password" id="password1" placeholder="Password" />
            </div>
            <div class="form-group">
                <input class="form-control" type="password" id="password2" placeholder="Confirm Password" />
            </div>
            <div id="pass-info" class="clearfix"></div>
            <Link to="/login" class="btn_1 rounded full-width">Register Now!</Link>
            <div class="text-center add_top_10">Already have an acccount? <strong><Link to="/login">Sign In</Link></strong></div>
        </form>
        <div class="copy">© 2023 <Link to="/">Snappcoins</Link></div>
    </aside>
</div>
</div>
    </>
)}
export default Register;