import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import { Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Welcome from "../Welcome/Welcome";
import SingleArticle from "../SingleArticle/SingleArticle";
import CreateArticle from "../CreateArticle/CreateArticle";
import Footer from "../Footer/Footer";
import Auth from "../Auth";
import RedirectIfAuth from "../RedirectIfAuth";
import UserArticles from "../UserArticles/UserArticles";
import Routes from '../Routes'
import Blogpage from '../../Pages/Blogpage/Blogpage'
import Blogdetail from '../../Pages/Blogdetails/Blogdetails'
import Article from '../Welcome/Articles/Articles'
import Contactus from '../../Pages/ContactUS/Contactus'
import Aboutus from '../../Pages/AboutUs/Aboutus'
import QuestionAnswer from '../../Pages/Question&Answer/QA'
import { DefaultLayout } from "../../layouts";
import BlogOverview from "../../views/BlogOverview";
import UserProfileLite from "../../views/UserProfileLite";
import AddNewPost from "../../views/AddNewPost";
import BlogPosts from "../../views/BlogPosts";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
class App extends Component {
	state = {
		authUser: null,
		articles: []
	};

	componentWillMount() {
		const user = localStorage.getItem("user");
		if (user) {
			this.setState({ authUser: JSON.parse(user) });
		}
	}

	setAuthUser = authUser => {
		this.setState(
			{
				authUser
			},
			() => {
				localStorage.setItem("user", JSON.stringify(authUser));
				this.props.notyService.success("Successfully logged in!");
				this.props.history.push("/");
			}
		);
	};

	removeAuthUser = () => {
		localStorage.removeItem("user");
		this.props.notyService.success("Successfully logged out!");
		this.setState({ authUser: null });
	};

	setArticles = articles => {
		this.setState({ articles });
	};

	render() {
		const { location } = this.props;
		return (<React.Fragment>
			{/* {location.pathname !== "/login" && location.pathname !== "/signup" && (
				<Navbar
					authUser={this.state.authUser}
					removeAuthUser={this.removeAuthUser}
				/>
			)} */}
			<RedirectIfAuth
				path="/login"
				component={Login}
				props={{
					setAuthUser: this.setAuthUser,
					loginUser: this.props.authService.loginUser
				}}
				isAuthenticated={this.state.authUser !== null}
			/>
			<RedirectIfAuth
				path="/signup"
				component={Signup}
				props={{
					setAuthUser: this.setAuthUser,
					registerUser: this.props.authService.registerUser
				}}
				isAuthenticated={this.state.authUser !== null}
			/>
			<Route
				
				exact
				path="/"
				component={Article}
			/>
			<Route
				exact
				path="/blogPage"
				component={Blogpage}
				
			/>
			<Route
				exact
				path="/blogPage/blogDetail"
				component={Blogdetail}
				
			/>
			<Route
				exact
				path="/contactUs"
				component={Contactus}
				
			/>
			<Route
				exact
				path="/aboutUs"
				component={Aboutus}
				
			/>
			<Route
				exact
				path="/QA"
				component={QuestionAnswer}
				
			/>
			<Route
				exact
				path="/dashboard/blog-overview"
				layout= {DefaultLayout}
   				 component= {BlogOverview}
			/>
			<Route
				exact
				path="/dashboard/user-profile-lite"
				layout= {DefaultLayout}
   				 component= {UserProfileLite}
			/>
			<Route
				exact
				path="/dashboard/add-new-post"
				layout= {DefaultLayout}
   				 component= {AddNewPost}
			/>
			<Route
				exact
				path="/dashboard/blog-posts"
				layout= {DefaultLayout}
   				 component= {BlogPosts}
			/>
			<Auth
				path="/articles/create"
				component={CreateArticle}
				props={{
					getArticleCategories: this.props.articlesService
						.getArticleCategories,
					createArticle: this.props.articlesService.createArticle,
					token: this.state.authUser ? this.state.authUser.token : null,
					notyService: this.props.notyService
				}}
				isAuthenticated={this.state.authUser !== null}
			/>
			<Auth
				path="/user/articles"
				component={UserArticles}
				props={{
					getUserArticles: this.props.articlesService.getUserArticles,
					setArticles: this.setArticles,
					token: this.state.authUser ? this.state.authUser.token : null,
					deleteArticle: this.props.articlesService.deleteArticle
				}}
				isAuthenticated={this.state.authUser !== null}
			/>
			<Auth
				path="/article/edit/:slug"
				component={CreateArticle}
				props={{
					getArticleCategories: this.props.articlesService
						.getArticleCategories,
					createArticle: this.props.articlesService.createArticle,
					token: this.state.authUser ? this.state.authUser.token : null,
					articles: this.state.articles,
					updateArticle: this.props.articlesService.updateArticle
				}}
				isAuthenticated={this.state.authUser !== null}
			/>
			<Route
				path="/article/:slug"
				exact
				render={props => (
					<SingleArticle
						{...props}
						articles={this.state.articles}
						getArticle={this.props.articlesService.getArticle}
					/>
				)}
			/>
			{/* {location.pathname !== "/login" && location.pathname !== "/signup" && (
				<Footer />
			)} */}
		</React.Fragment>
	);
}
}
App.displayName = "App";

App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	authService: PropTypes.objectOf(PropTypes.func).isRequired,
	articlesService: PropTypes.objectOf(PropTypes.func).isRequired
};
export default App;
