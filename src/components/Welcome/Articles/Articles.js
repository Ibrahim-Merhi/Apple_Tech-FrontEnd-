import React from "react";
import Banner from "../../Banner/Banner";
import Article from "../../Article/Article";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NewsCardDemo from '../../Cardtest/Cardtest'
import CardPost from '../../Cardtest/CardPost'
import Navbar from "../../Navbar/Navbar";
import Footer from '../../Footer/Footer'
const Articles = ({ articles, handlePagination, nextUrl, previousUrl }) => {
	return (
		<React.Fragment>
			<Navbar/>
			<Banner
				backgroundImage="url(assets/img/bg-gift.jpg)"
				title="Welcome to Apple Tech"
				paragraph="Hope we can help you with your problem."
			/>
			<main className="main-content bg-gray">
				<div className="row">
					<div className="col-12 col-lg-6 offset-lg-3" style={{ marginLeft: "0",
   								 maxWidth: "100%",
  								  flex: "unset"}}>
						{articles &&
							articles.map((article, i) => (
								<div key={article.id}>
									<Article article={article} />
									<hr />
								</div>
							))}
							<CardPost />
							
						<nav className="flexbox mb-50 mt-50">
							
						</nav>
					</div>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

Articles.propTypes = {
	articles: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired
		})
	),
	handlePagination: PropTypes.func.isRequired,
	nextUrl: PropTypes.string,
	prevUrl: PropTypes.string
};

Articles.defaultProps = {
	articles: [],
	nextUrl: null,
	prevUrl: null
};

export default Articles;
