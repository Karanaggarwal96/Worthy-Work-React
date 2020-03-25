import React,{Component} from 'react';
//import classes  from './rideshare.module.css'
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
submitHandler=()=>{

    return(


        <div>
            Hi
        </div>
    )
}  
render(){
   
    return(
<div>
        <h1>Welcome to Rideshare!</h1>
        <br></br>
        <button onClick={this.clickHandler}>Post Ad</button>
        <Modal   show={this.state.clicked} modalClosed={this.clickCancelHandler}/>
        <div>
            {this.state.clicked ? this.submitHandler():null} 
        </div>
</div>

    )
}


} 


export default rideshare;