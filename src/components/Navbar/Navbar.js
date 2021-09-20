import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
	return (
		<nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
			<div className="container">
				<div className="topbar-left">
					<button className="topbar-toggler">☰</button>
					<Link className="topbar-brand" to="/">
						<img
							className="logo-default"
							src={`${process.env.PUBLIC_URL}/assets/img/logo3.png`}
							alt="logo"
						/>
						<img
							className="logo-inverse"
							src={`${process.env.PUBLIC_URL}/assets/img/logo-light3.png`}
							alt="logo"
						/>
					</Link>
				</div>
				<div className="topbar-right">
					<ul className="topbar-nav nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/blogPage">
								Blogs
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/QA">
								Q/A
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/aboutUs">
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contactUs">
								Contact us
							</Link>
						</li>
						
						{props.authUser && (
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Hey {props.authUser && props.authUser.user.name}!
									<i className="fa fa-caret-down" />
								</Link>
								<div className="nav-submenu">
									<Link className="nav-link" to="/user/articles">
										My articles
									</Link>
									<Link
										className="nav-link"
										to="/"
										onClick={props.removeAuthUser}
									>
										Logout
									</Link>
								</div>
							</li>
						)}
						{!props.authUser && (
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
						)}
						
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.displayName = "Navbar";

Navbar.propTypes = {
	className: PropTypes.string
};

export default Navbar;
