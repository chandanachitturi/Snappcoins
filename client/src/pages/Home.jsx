import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Product from '../components/Product';
import Loader from '../components/Loader';
import ImgLoader from '../components/ImgLoader';
import FullpageLoader from '../components/FullpageLoader';
import CarouselPro from '../components/CarouselPro';
const Home = () => {
	const [products, setProducts] = useState([])
	// const [searchLoad, setSearchLoad] = useState(false)
	const [productsLoaded, setLoaded] = useState(false)
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [searchTerm_home, setSearchTerm_home] = useState('')
	// const [search_filter, setSearchFilter] = useState([])
	const navigate = useNavigate();
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoaded(false)
				const response_prod = await axios.get('http://localhost:5000/api/merchandise/gethome');
				//const total = response_prod.headers.get("x-total-count");
				setProducts(response_prod.data.merchandises);
				setLoaded(true)
				setFeaturedProducts(response_prod.data.featured_products);
				// setSearchLoad(false)
				// const search_filter_prod = await axios.get("http://localhost:5000/api/merchandise/getall", { params: { searchTerm: searchTerm_home } })
				// setSearchFilter(search_filter_prod.data.merchandises);
				// setSearchLoad(true)
				console.log("hitted")
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();


	}, [searchTerm_home]);



	return (
		<>


			{/* <div id="preloader"><div data-loader="circle-side"></div></div> */}

			<header className="header clearfix element_to_stick">
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

						<li className='d-inline'><Link to="connect" className="btn_access">Connect Snappcoins</Link></li>
						<li className=''><div className="nice-select" >
							<div className="btn_access">
								<span className="current">Login</span></div>
							<ul className="list">
								<li className="option"><Link >Merchant</Link></li>
								<li className="option"><Link >Gamer</Link></li>
							</ul>

						</div> </li>

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
								<img src="https://distil.in/demo/snappcoins/img/logo.svg" data-src="assets/img/logo.svg" alt="" width="120" height="30" className="dark lazy" />
								<img src="https://distil.in/demo/snappcoins/img/logo-placeholder.png" data-src="assets/img/logo-light-mode.svg" alt="" width="120" height="30" className="light lazy" />
							</Link>
						</div>
						<ul>
							<li className="submenu">
								<Link to="/" className="show-submenu">Home</Link></li>
							<li className="submenu"><Link to="catalog" className="show-submenu">Explore</Link></li>
						</ul>
					</nav>
				</div>
			</header>


			<main>

				<div className="hero_single version_2 ">
					<div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
						<div className="container">
							<div className="row justify-content-center text-center">
								<div className="col-lg-7">
									<h1>Discover, Collect,<br />and Redeem Snapps!</h1>
									<p>The Largest Redemption Platform for Gamers</p>
									<form method="post" action="catalog" className=''>
										<div className="row g-0 custom-search-input mx-auto">
											<div className="col-md-9 position-relative">
												<div className="form-group">
													<input className="form-control" type="text" placeholder="Search item..." value={searchTerm_home} onChange={(e) => { setSearchTerm_home(e.target.value) }} />
												</div>
												{/* Search menu */}
													{/* {searchTerm_home ? <div className='position-absolute start-50 translate-middle-x col-12 br-none'>
														{searchLoad ? <div class="list-group text-start">
															{
																search_filter.slice(0,4).map((product) =>
																	<button type="button" className="btn btn-lg list-group-item list-group-item-action lt br-none" onClick={(e) => {
																		setSearchTerm_home(e.target.innerHTML)
																		navigate("/catalog", { state: { searchTerm_home: e.target.innerHTML } })
																	}} aria-current="true">
																		{product.title}
																	</button>

																)
															}

														</div> : <div className='d-flex justify-content-center bg-white'><Loader /></div>}
													</div>
													: "" } */}
											</div>
											<div className="col-md-3">
												<input type='submit' value="Find" onClick={(e) => {
													e.preventDefault();
													navigate("/catalog", { state: { searchTerm_home: searchTerm_home } })
												}} />

											</div>
										</div>
										<div className="search_trends text-center" style={{ display: "flex", justifyContent: "center" }}>
											<h5 className='d-inline'>Trending :</h5>
											<ul className='d-inline' style={{ listStyleType: "none", marginLeft: "0px" }}>
												<div className='d-flex justify-content-start'>
													<li><Link to="#0">Art ,</Link></li>
													<li><Link to="#0">Games ,</Link></li>
													<li><Link to="#0">Photo</Link></li>
												</div>
											</ul>
										</div>

									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="wave hero"></div>
				</div>


				<div className="container margin_90_90">
					<div className="main_title center">
						<span><em></em></span>
						<h2>Featured Products</h2>
						<p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
					</div>


					<div id='carouselItems' className="carousel slide carousel-fade" data-bs-ride="carousel">
						<div className='carousel-inner'>
							{featuredProducts.map((product, index) => {
								return <CarouselPro index={index} price={product.price} desc={product.description} brand={product.brand} title={product.title} count={product.count} img={product.image} userid={product.userid} genre={product.category} />
							})}
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselItems" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselItems" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>

					<p className="text-center mt-4"><Link to="/catalog"> <a className="btn_1 medium pulse_bt">Start Redeeming</a></Link></p>
				</div>


				<div className="bg_gray">
					<div className="container margin_120_90">
						<div className="main_title version_2">
							<span><em></em></span>
							<h2>Weekly Top Games</h2>
							<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
							<Link to="#0">View All <i className="bi bi-arrow-right"></i></Link>
						</div>


						<div className="row author_list">
							<div className="col-lg-4 col-md-6" >
								<Link to="author.html" className="author">
									<strong>1</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar1.jpg" data-src="assets/img/avatar1.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Junglee Rummy</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6" >
								<Link to="author.html" className="author">
									<strong>2</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar2.jpg" data-src="assets/img/avatar2.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Callbreak</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6" >
								<Link to="author.html" className="author">
									<strong>3</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar3.jpg" data-src="assets/img/avatar3.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Ludo King</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6">
								<Link to="author.html" className="author">
									<strong>4</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar4.jpg" data-src="assets/img/avatar4.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Cricket League</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6" >
								<Link to="author.html" className="author">
									<strong>5</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar5.jpg" data-src="assets/img/avatar5.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Evony</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6">
								<Link to="author.html" className="author">
									<strong>6</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar6.jpg" data-src="assets/img/avatar6.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Coin Master</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6" >
								<Link to="author.html" className="author">
									<strong>7</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar7.jpg" data-src="assets/img/avatar7.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Free Fire Max</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6" >
								<Link to="author.html" className="author">
									<strong>8</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar8.jpg" data-src="assets/img/avatar8.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Klondike Adventures</h6>

									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6" >
								<Link to="author.html" className="author">
									<strong>9</strong>
									<div className="author_thumb veryfied">
										<i className="bi bi-check"></i>
										<figure>
											<img src="https://distil.in/demo/snappcoins/img/avatar9.jpg" data-src="assets/img/avatar9.jpg" alt="" className="lazy" width="100" height="100" />
										</figure>
									</div>
									<div>
										<h6>Airforce Royale</h6>

									</div>
								</Link>
							</div>
						</div>



						<div className="banner mt-5 lazy" data-bg="url(img/banner_bg.jpg)" data-cue="slideInUp">
							<div className="d-flex align-items-center opacity-mask justify-content-between p-5" data-opacity-mask="rgba(0, 0, 0, 0.2)">
								<strong><div>
									<small>Join Snappcoins</small>
									<h3>Become a Partner</h3>
									<p>Showcase your games and attract loyal fans!</p>
								</div></strong>
								<div><Link to="become-partner.html" className="btn_1 medium pulse_bt">Join Now</Link></div>
							</div>

						</div>


					</div>

				</div>


				<div className="container margin_120_90">
					<div className="main_title version_2">
						<span><em></em></span>
						<h2>New Items</h2>
						<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
						<Link to="catalog">View All <i className="bi bi-arrow-right"></i></Link>
					</div>


					{productsLoaded ? <div className='row d-flex justify-content-center '>
						{
							products.map((product) => {
								return <Product price={product.price} desc={product.description} brand={product.brand} title={product.title} count={product.count} img={product.image} userid={product.userid} genre={product.category} />
							})
						}

					</div> : <div className='d-flex row justify-content-center align-items-center m-5 p-5'> <Loader /> </div>}
					<p className="text-center mt-4" ><Link to="/catalog" className="btn_1 gradient pulse_bt">View New Items</Link></p>
				</div>


				<div className="bg_gray">
					<div className="container margin_120_90">
						<div className="main_title center mb-5">
							<span><em></em></span>
							<h2>Create Your Account & Start Snapping!</h2>
							<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
						</div>
						<div className="row justify-content-md-center how_2">
							<div className="col-lg-5 text-center">
								<figure className="mb-5">
									<img src="https://distil.in/demo/snappcoins/img/web_wireframe.svg" data-src="img/web_wireframe.svg" alt="" className="img-fluid lazy" width="360" height="380" />
								</figure>
							</div>
							<div className="col-lg-5">
								<ul>
									<li >
										<h3><span>#01.</span> Set up your Snappcoins account</h3>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
									</li>
									<li >
										<h3><span>#02.</span> Check your Snapp balance</h3>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
									</li>
									<li >
										<h3><span>#03.</span> Use your Snapps & redeem!</h3>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
									</li>
								</ul> <p className="add_top_30" ><Link to="/register" className="btn_1">Join Now!</Link></p>
							</div>

						</div>
					</div>

				</div>


				<div className="container margin_120_90">
					<div className="main_title version_2">
						<span><em></em></span>
						<h2>Latest News</h2>
						<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
						<Link to="#0">View All <i className="bi bi-arrow-right"></i></Link>
					</div>


					<div className="row">
						<div className="col-lg-4" >
							<article className="blog">
								<figure>
									<Link to="blog-post.html"><img src="assets/img/item-blog-placeholder.png" data-src="assets/img/blog-5.jpg" alt="" className="lazy" width="800" height="533" />
									</Link>
								</figure>
								<div className="post_info">
									<small>Category - 20 Nov. 2021</small>
									<h2><Link to="blog-post.html">Ea exerci option hendrerit</Link></h2>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="assets/img/avatar-placeholder.png" data-src="assets/img/avatar2.jpg" className="lazy" alt="" width="68" height="68" /></div> Admin
										</li>
										<li><i className="bi bi-chat"></i>20</li>
									</ul>
								</div>
							</article>

						</div>
						<div className="col-lg-4" >
							<article className="blog">
								<figure>
									<Link to="blog-post.html"><img src="assets/img/item-blog-placeholder.png" data-src="assets/img/blog-4.jpg" alt="" className="lazy" width="800" height="533" />
									</Link>
								</figure>
								<div className="post_info">
									<small>Category - 20 Nov. 2021</small>
									<h2><Link to="blog-post.html">At usu sale dolorum offendit</Link></h2>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="assets/img/avatar-placeholder.png" data-src="assets/img/avatar2.jpg" className="lazy" alt="" width="68" height="68" /></div> Admin
										</li>
										<li><i className="bi bi-chat"></i>20</li>
									</ul>
								</div>
							</article>

						</div>
						<div className="col-lg-4">
							<article className="blog">
								<figure>
									<Link to="blog-post.html"><img src="assets/img/item-blog-placeholder.png" data-src="assets/img/blog-6.jpg" alt="" className="lazy" width="800" height="533" />
									</Link>
								</figure>
								<div className="post_info">
									<small>Category - 20 Nov. 2021</small>
									<h2><a to="blog-post.html">Iusto nominavi petentium in</a></h2>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="assets/img/avatar-placeholder.png" data-src="assets/img/avatar2.jpg" className="lazy" alt="" width="68" height="68" /></div> Admin
										</li>
										<li><i className="bi bi-chat"></i>20</li>
									</ul>
								</div>
							</article>

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
									<li><Link to="catalog">Explore</Link></li>
									<li><Link to="login">Login</Link></li>
									<li><Link to="register">Register</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<h3>Snappcoins</h3>
							<div className="links">
								<ul>
									<li><Link to="/connect">Connect Wallet</Link></li>
									<li><Link to="/help">Faq</Link></li>
									<li><Link to="/partner">Become a Partner</Link></li>
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
									<li>
										<Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/twitter_icon.svg" alt="" className="lazy" /></Link>
									</li>
									<li>
										<Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/facebook_icon.svg" alt="" className="lazy" /></Link>
									</li>
									<li>
										<Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/instagram_icon.svg" alt="" className="lazy" /></Link>
									</li>
									<li>
										<Link to="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/youtube_icon.svg" alt="" className="lazy" /></Link>
									</li>
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
								<li><a to="#">Terms and conditions</a></li>
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
							<input type="text" className="form-control" placeholder="3.25 snapps" disabled />
						</div>
						<div className="form-group">
							<label>Enter quantity <small>(10 available)</small></label>
							<input type="text" className="form-control" />
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
						<div className="text-center">
							<input type="submit" value="Place a bid" className="btn_1 full-width mb-2" />
							<input type="submit" value="Cancel" className="btn_1 full-width outline" />
						</div>
					</div>
				</form>

			</div>
		</>
	)
}
export default Home;
