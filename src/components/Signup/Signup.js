// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// class Signup extends React.Component {
// 	state = {
// 		name: "",
// 		email: "",
// 		password: "",
// 		password_confirmation: "",
// 		errors: ""
// 	};

// 	handleInputChange = event => {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		});
// 	};

// 	handleFormSubmit = async event => {
// 		event.preventDefault();
// 		// validation by indicative package
// 		try {
// 			const user = await this.props.registerUser(this.state);
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
// 					<h5 className="text-uppercase text-center">Register</h5>
// 					<br />
// 					<br />
// 					<form className="form-type-material" onSubmit={this.handleFormSubmit}>
// 						<div className="form-group">
// 							<input
// 								name="name"
// 								onChange={this.handleInputChange}
// 								type="text"
// 								className="form-control"
// 								placeholder="Username"
// 							/>
// 							{this.state.errors["name"] && (
// 								<small className="text-danger">
// 									{this.state.errors["name"]}
// 								</small>
// 							)}
// 						</div>
// 						<div className="form-group">
// 							<input
// 								name="email"
// 								onChange={this.handleInputChange}
// 								type="email"
// 								className="form-control"
// 								placeholder="Email address"
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
// 								onChange={this.handleInputChange}
// 								type="password"
// 								className="form-control"
// 								placeholder="Password"
// 							/>
// 							{this.state.errors["password"] && (
// 								<small className="text-danger">
// 									{this.state.errors["password"]}
// 								</small>
// 							)}
// 						</div>
// 						<div className="form-group">
// 							<input
// 								name="password_confirmation"
// 								onChange={this.handleInputChange}
// 								type="password"
// 								className="form-control"
// 								placeholder="Password (confirm)"
// 							/>
// 						</div>
// 						<br />
// 						<button
// 							className="btn btn-bold btn-block btn-primary"
// 							type="submit"
// 						>
// 							Register
// 						</button>
// 					</form>
// 					<hr className="w-30" />
// 					<p className="text-center text-muted fs-13 mt-20">
// 						Already have an account?
// 						<Link to="/login">Sign in</Link>
// 					</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// Signup.displayName = "Signup";

// Signup.propTypes = {
// 	registerUser: PropTypes.func.isRequired,
// 	setAuthUser: PropTypes.func.isRequired
// };

// export default Signup;

// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUp() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
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
import Navbar2 from '../Navbar/Navbar2'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive new tech information, special offers and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}