import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import axios from "axios";
import Pagination from '../components/Pagination';
import Header from './Header';
import Filter from './Filter';

const Catalog = (props) => {
	const [products, setProducts] = useState([])
	const [perpage, setPerpage] = useState([]);


	const pageHandler = (pageNumber) => {

		const startIndex = (pageNumber - 1) * 3;
		const endIndex = pageNumber * 3;
		console.log(startIndex);
		console.log(endIndex);
		setPerpage(products.slice(startIndex, endIndex));
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response_prod = await axios.get('http://localhost:5000/api/merchandise/getall');
				//const total = response_prod.headers.get("x-total-count");
				setProducts(response_prod.data.merchandises);
				setPerpage(response_prod.data.slice(0, 9));
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);



	return (
		<>
			<Header />
			<main>
				{/* <div class="container mx-5 my-3 text-center">
					<div class="row">
						<div className='col-6 d-flex justify-content-start'>
							<div class="dropdown">
								<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown button
								</button>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Action</a></li>
									<li><a class="dropdown-item" href="#">Another action</a></li>
									<li><a class="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</div>
						</div>
						<div class="col-6 d-flex justify-content-end">
							<div class="search_bar_list">
								<input type="text" class="form-control" placeholder="Search again..." />
							</div>
						</div>
					</div>
				</div> */}

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
							<a href="#0" class="open_filters btn_filters"><i class="bi bi-filter"></i><span>Filters</span></a>
							<div class="search_bar_list">
								<input type="text" class="form-control" placeholder="Search again..." />
							</div>
							<a class="btn_search_mobile btn_filters" data-bs-toggle="collapse" href="#collapseSearch"><i class="bi bi-search"></i></a>
						</div>
					</div>
					<div class="collapse" id="collapseSearch">
						<div class="search_bar_list">
							<input type="text" class="form-control" placeholder="Search again..." />
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

						< Filter />

						<div className="col-lg-9">
							<div className='row'>
								{products.map((product) => <Product price={product.price} desc={product.description} brand={product.brand} title={product.title} count={product.count} />)}
							</div>
							<div className='text-center'>
								<div class="pagination_fg mb-4">
									<a href="#">«</a>
									<a href="#" class="active">1</a>
									<a href="#">2</a>
									<a href="#">3</a>
									<a href="#">4</a>
									<a href="#">5</a>
									<a href="#">»</a>
								</div>
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
