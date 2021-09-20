import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter, Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import AuthService from "./services/auth";
import App from "./components/App/App";
import ArticlesService from "./services/articles";
import NotificationsService from "./services/notification";
import Routes from './components/Routes'
const Main = withRouter(props => (
	<App
		authService={new AuthService()}
		{...props}
		articlesService={new ArticlesService()}
		notyService={new NotificationsService()}
	/>
));

ReactDOM.render(
	<BrowserRouter>
	{/* <Router>
		<Routes />
	</Router> */}
		<Main />
	
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from '../src/components/App/App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
