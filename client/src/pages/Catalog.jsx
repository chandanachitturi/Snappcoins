import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import useFetch from "../hooks/useFetch";



const Catalog = (props) => {
	const [products, setProducts] = useState([]);

	const productConfig = {
		url: '/merchandise/getall',
		method: 'get',
	};

	const fetchProd = useFetch();
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const productData = await fetchProd(productConfig);
			setProducts(productData.merchandises);
		  } catch (err) {
			console.log(err);
		  }
		};
	  
		fetchData();
	  }, []);
	  


	return (
		<>


			<header className="header_in clearfix">
				<div className="layer"></div>
				<div className="container">
					<div className="logo">
						<Link to="/">
							<img src="assets/img/logo.svg" alt="" width="170" height="35" className="dark" />
							<img src="assets/img/logo-light-mode.svg" alt="" width="170" height="35" className="light" />
						</Link>
					</div>
					<ul className="top_menu">
						<li>
							<span className="color_mode_bt">
								<input id="theme_toggle" type="checkbox" name="theme_toggle" />
								<label for="theme_toggle"></label>
							</span>
						</li>
						<li><Link to="/login" className="btn_access">Log In</Link></li>  <li><Link to="/connect" className="btn_access">Connect Snappcoins</Link></li>
					</ul>
					<Link to="#0" className="open_close">
						<i className="bi bi-list"></i><span>Menu</span>
					</Link>
					<nav className="main-menu">
						<div id="header_menu">
							<Link to="#0" className="open_close">
								<i className="bi bi-x"></i>
							</Link>
							<Link to="/" className="logo_menu">
								<img src="assets/img/logo-placeholder.png" data-src="img/logo.svg" alt="" width="120" height="30" className="dark lazy" />
								<img src="assets/img/logo-placeholder.png" data-src="img/logo-light-mode.svg" alt="" width="120" height="30" className="light lazy" />
							</Link>
						</div>
						<ul>
							<li className="submenu">
								<Link to="/" className="show-submenu">Home</Link></li>
							<li className="submenu"><Link to="/catalog" className="show-submenu">Explore</Link></li>
						</ul>
					</nav>
				</div>
			</header>
			<main>

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
							<Link to="#0" className="open_filters btn_filters"><i className="bi bi-filter"></i><span>Filters</span></Link>
							<div className="search_bar_list">
								<input type="text" className="form-control" placeholder="Search again..." />
							</div>
							<Link className="btn_search_mobile btn_filters" data-bs-toggle="collapse" to="#collapseSearch"><i className="bi bi-search"></i></Link>
						</div>
					</div>
					<div className="collapse" id="collapseSearch">
						<div className="search_bar_list">
							<input type="text" className="form-control" placeholder="Search again..." />
						</div>
					</div>

				</div>


				<div className="container margin_30_40">
					<div className="page_header">
						<div className="breadcrumbs">
							<ul>
								<li><Link to="#">Home</Link></li>
								<li><Link to="#">Category</Link></li>
								<li>Page active</li>
							</ul>
						</div>
						<h1>All:</h1><span> 814 found</span>
					</div>

					<div className="row">

						<aside className="col-lg-3" id="sidebar_fixed">
							<div className="filter_col">
								<div className="inner_bt"><Link to="#" className="open_filters"><i className="bi bi-x"></i></Link></div>
								<div className="filter_type">
									<h4><Link to="#filter_1" data-bs-toggle="collapse" className="opened">Categories</Link></h4>
									<div className="collapse show" id="filter_1">
										<ul>
											<li>
												<label className="container_check">Art <small>112</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_check">Electronics <small>90</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_check">Stationary <small>140</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_check">Music <small>43</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_check">Wellness <small>23</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
										</ul>
									</div>

								</div>


								<div className="filter_type">
									<h4><Link to="#filter_3" data-bs-toggle="collapse" className="closed">Snapps</Link></h4>
									<div className="collapse" id="filter_3">
										<div className="range_input">Price range from 0 to <span></span>  snapps</div>
										<div className="mb-4"><input type="range" min="1" max="5" step="0.2" value="4" data-orientation="horizontal" /></div>
									</div>
								</div>



								<div className="buttons">
									<Link to="#0" className="btn_1 full-width outline">Filter</Link>
								</div>
							</div>
						</aside>

						<div className="col-lg-9">
							<div className="row">
								{products}
								{products.map((product) => {
									<Product key={product.id} {...product} />
								})}
							</div>

							<div className="pagination_fg mb-4">
								<Link to="#">«</Link>
								<Link to="#" className="active">1</Link>
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
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<h3>Quick Links</h3>
							<div className="links">
								<ul>
									<li><Link to="/catalog">Explore</Link></li>
									<li><Link to="/login">Login</Link></li>
									<li><Link to="/register">Register</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<h3>Snappcoins</h3>
							<div className="links">
								<ul>
									<li><Link to="/connect">Connect Wallet</Link></li>
									<li><Link to="help.html">Faq</Link></li>
									<li><Link to="become-partner.html">Become a Partner</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<h3>Resources</h3>
							<div className="links">
								<ul>
									<li><Link to="#">Community</Link></li>
									<li><Link to="#">How it Works</Link></li>
									<li><Link to="#">Latest Products</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<h3>Keep in touch</h3>
							<div id="newsletter">
								<div id="message-newsletter"></div>
								<form method="post" name="newsletter_form" id="newsletter_form">
									<div className="form-group">
										<input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
										<button type="submit" id="submit-newsletter"><i className="bi bi-chevron-right"></i></button>
									</div>
								</form>
							</div>
							<div className="follow_us">
								<ul>
									<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" className="lazy" /></Link></li>
									<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" className="lazy" /></Link></li>
									<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" className="lazy" /></Link></li>
									<li><Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" className="lazy" /></Link></li>
								</ul>
							</div>

						</div>
					</div>

					<hr />
					<div className="row add_bottom_25">
						<div className="col-md-6">
							<ul className="footer-selector clearfix">
								<li>
									<div className="styled-select lang-selector">
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
						<div className="col-md-6">
							<ul className="additional_links">
								<li><Link to="#">Terms and conditions</Link></li>
								<li>© 2023 Snappcoins</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>


			<div id="toTop"></div>


			<div id="modal-dialog" className="zoom-anim-dialog mfp-hide">
				<div className="modal_header">
					<h3>Snapp Now!</h3>
				</div>
				<form>
					<div className="sign-in-wrapper">
						<p>You are about to purchase <strong>"Amazing Art" #304</strong> from <strong>George Lucas</strong></p>
						<div className="form-group"> <label>Redeem With</label>
							<input type="text" className="form-control" placeholder="3.5 snapps" disabled />
						</div>

						<ul>
							<li>
								Your balance <span>8.498  snapps</span>
							</li>
							<li>
								Service fee 1.5%<span>0.125  snapps</span>
							</li>

						</ul>
						<div className="text-center"> <input type="submit" className="btn_1 full-width mb-2" formaction="detail-page.html" value="Snapp It!" />
							<input type="submit" value="Cancel" className="btn_1 full-width outline" />
						</div>
					</div>
				</form>

			</div>




		</>
	)
}
export default Catalog;
