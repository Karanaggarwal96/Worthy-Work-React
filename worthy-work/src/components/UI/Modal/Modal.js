import React,{Component} from 'react';
import classes from'./Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'
import axios from '../../../axios-data'

class modal extends Component{
state={
    pickup:'',
    drop:'',
    contact:'',
    date:'',
    desc:'',
    formsubmit:false
}
subHandler=()=>{

      
      this.setState({formsubmit:true})
    
        const data={
        pickup:this.state.pickup,
        drop:this.state.drop,
        contact:this.state.contact,
        date:this.state.date,
        desc:this.state.desc
    }
    axios.post('/rideshare.json',data)
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    
}
render(){
return(
<React.Fragment>
<Backdrop  clicked={this.props.modalClosed}/>
<div className={classes.Modal} style={{ transform : this.props.show ? 'translateY(0)': 'translateY(-100vh)',
 opacity :this.props.show?'1':'0'}}>
<form >
<label>Enter Pickup Location</label>
<input type="text" value={this.state.pickup}  onChange={(event) => this.setState({pickup: event.target.value})}/>
<label>Enter Drop Location</label>
<input type="text" value={this.state.drop}  onChange={(event) => this.setState({drop: event.target.value})}/>
<label>Enter Date</label>
<input type="date" value={this.state.date}  onChange={(event) => this.setState({date: event.target.value})}/>
<label>Description</label>
<input type="text" value={this.state.desc}  onChange={(event) => this.setState({desc: event.target.value})}/>
<label>Contact Details</label>
<input type="text" value={this.state.contact}  onChange={(event) => this.setState({contact: event.target.value})}/>
{/* <label>Status</label>
<select value={this.state.status} onChange={(event) => this.setState({status: event.target.value})} >
    <option>Pending</option>
    <option>Confirmed</option>
    <option>Rejected</option>
</select> */}
<br></br>

<button  onClick={this.subHandler}  >Submit </button>
</form>

</div>
</React.Fragment>
)
}
}

export default modal;