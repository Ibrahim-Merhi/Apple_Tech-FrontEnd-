// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// class Login extends React.Component {
// 	state = {
// 		email: "",
// 		password: "",
// 		errors: ""
// 	};

// 	handleInputChange = event => {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		});
// 	};

// 	handleSubmit = async event => {
// 		event.preventDefault();
// 		try {
// 			const user = await this.props.loginUser(this.state);
// 			this.props.setAuthUser(user);
// 		} catch (errors) {
// 			this.setState({ errors });
// 		}
// 	};

// 	render() {
// 		return (
// 			<div
// 				className="mh-fullscreen bg-img center-vh p-20"
// 				style={{
// 					backgroundImage: `url(${
// 						process.env.PUBLIC_URL
// 					}/assets/img/bg-girl.jpg)`
// 				}}
// 			>
// 				<div
// 					className="card card-shadowed p-50 w-400 mb-0"
// 					style={{ maxWidth: "100%" }}
// 				>
// 					<h5 className="text-uppercase text-center">Login</h5>
// 					<br />
// 					<br />
// 					<form onSubmit={this.handleSubmit}>
// 						<div className="form-group">
// 							<input
// 								name="email"
// 								type="text"
// 								className="form-control"
// 								placeholder="Username"
// 								onChange={this.handleInputChange}
// 							/>
// 							{this.state.errors["email"] && (
// 								<small className="text-danger">
// 									{this.state.errors["email"]}
// 								</small>
// 							)}
// 						</div>
// 						<div className="form-group">
// 							<input
// 								name="password"
// 								type="password"
// 								className="form-control"
// 								placeholder="Password"
// 								onChange={this.handleInputChange}
// 							/>
// 							{this.state.errors["password"] && (
// 								<small className="text-danger">
// 									{this.state.errors["password"]}
// 								</small>
// 							)}
// 						</div>
// 						<div className="form-group flexbox py-10">
// 							<label className="custom-control custom-checkbox">
// 								<input
// 									type="checkbox"
// 									className="custom-control-input"
// 									defaultChecked
// 								/>
// 								<span className="custom-control-indicator" />
// 								<span className="custom-control-description">Remember me</span>
// 							</label>
// 							<Link className="text-muted hover-primary fs-13" to="#">
// 								Forgot password?
// 							</Link>
// 						</div>
// 						<div className="form-group">
// 							<button
// 								className="btn btn-bold btn-block btn-primary"
// 								type="submit"
// 							>
// 								Login
// 							</button>
// 						</div>
// 					</form>
// 					<hr className="w-30" />
// 					<p className="text-center text-muted fs-13 mt-20">
// 						Don't have an account? <Link to="/signup">Sign up</Link>
// 					</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// Login.displayName = "Login";

// Login.propTypes = {
// 	errors: PropTypes.objectOf(PropTypes.string)
// };

// export default Login;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';
import Navbar2 from '../Navbar/Navbar2'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© 2021 Copyright  '}
      <Link color="inherit" href="https://material-ui.com/">
      IBRAHIM MERHI
      </Link>{' '}
     
      
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://wallpaperaccess.com/full/3016328.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div>
    <Navbar2 />
    <Grid container component="main" className={classes.root} style={{marginTop: "4.5%"}}>
      
      
      <CssBaseline />
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}  style={{backgroundColor : "purple"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              
              
              
            >
              SIGN IN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color: "purple"}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2"  style={{color: "purple"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}