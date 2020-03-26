import React,{Component} from 'react';
import classes  from './rideshare.module.css'
import Modal from '../../components/UI/Modal/Modal'
class rideshare extends Component{
state={
    clicked:false
}   
 
clickHandler=()=>{

    this.setState({clicked:true})
}
clickCancelHandler=()=>{
    this.setState({clicked:false})
}

render(){
   
    return(
<div>
        <h1>Welcome to Rideshare!</h1>
        <br></br>
        <button className={classes.tag} onClick={this.clickHandler}>Post Ad</button>
        <Modal   show={this.state.clicked} modalClosed={this.clickCancelHandler}/>
      
</div>

    )
}


} 


export default rideshare;