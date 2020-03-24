import React,{Component} from 'react';
import classes from'./Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

class modal extends Component{
state={
    formsubmit:false
}
subHandler=()=>{
    this.setState({formsubmit:true})
}
render(){
return(
<React.Fragment>
<Backdrop  clicked={this.props.modalClosed}/>
<div className={classes.Modal} style={{ transform : this.props.show ? 'translateY(0)': 'translateY(-100vh)',
 opacity :this.props.show?'1':'0'}}>
<form >
<label>Enter Pickup Location</label>
<input type="text"/>
<label>Enter Drop Location</label>
<input type="text"/>
<label>Enter Date</label>
<input type="date"/>
<label>Contact Details</label>
<input type="text"/>
<span><label>Status</label>
<select>
    <option>Pending</option>
    <option>Confirmed</option>
    <option>Rejected</option>
</select>
</span>
<br></br>

<button type="submit" onClick={this.subHandler} sub={this.state.formsubmit}>Submit </button>
</form>

</div>
</React.Fragment>
)
}
}

export default modal;