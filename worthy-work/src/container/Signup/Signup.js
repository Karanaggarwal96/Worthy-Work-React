
import React,{Component} from 'react'
import classes from './Signup.module.css';

class Signup extends Component{

 render(){
        return(
<React.Fragment>
<div className={classes.container} id="container">

	<div className={classes.signincontainer}>
		<form action="#">
			<br></br>
            <h1>Create Your Account</h1>
		
			<span>or use your account</span>
			<br></br>
			
            <input type="name" placeholder="Name" name="name"/>
			<input type="email" placeholder="Email" name="email"/>
			<input type="password" placeholder="Password" name="password" />
			<a href="#">Forgot your password?</a>
			<button >Sign In</button>
		</form>
	</div>
	<div className={classes.overlaycontainer}>
		<div className={classes.overlay}>
			
		

			<h1  className={classes.tag} >Hello, Friend!</h1>
				<p className={classes.tag1}>Enter your personal details and start journey with us</p>
				

		</div>
	</div>
</div>


</React.Fragment>
        )
    }
}

export default Signup;

