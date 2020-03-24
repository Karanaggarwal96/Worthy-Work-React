import React,{Component} from 'react'
import classes from './Login.module.css';
//import './fontAwesome.css'
class Login extends Component{

 render(){
        return(
<React.Fragment>
<div className={classes.container} id="container">

	<div className={classes.signincontainer}>
		<form action="#">
             <br></br>
			<br></br>
			<h1>Sign in</h1>
		
			<span>or use your account</span>
			<br></br>
			<br></br>
			<br></br>
			<input type="email" placeholder="Email" name="email"/>
			<input type="password" placeholder="Password" name="password" />
			<a href="#">Forgot your password?</a>
			<button >Sign In</button>
		</form>
	</div>
	<div className={classes.overlaycontainer}>
		<div className={classes.overlay}>
			
		

			<h1  className={classes.tag} >Welcome Back!</h1>
				<p className={classes.tag1}>To keep connected with us please login with your personal info</p>
				

		</div>
	</div>
</div>


</React.Fragment>
        )
    }
}

export default Login;

