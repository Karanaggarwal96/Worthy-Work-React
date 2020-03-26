import React,{Component} from 'react';
import classes from './PostedAd.module.css'

class PostedAd extends Component{

    render(){
        return(
            <div className={classes.tag7}>
        <h3>Rideshare</h3>
        <span><strong>Pickup Location :</strong>{this.props.pickup} ||
        <strong>Drop Location :</strong>{this.props.drop} ||    
        <strong>Date :</strong>{this.props.date} ||
        <strong>Description :</strong>{this.props.desc} ||
        <strong>Contact :</strong>{this.props.contact}   
        </span>
            </div>
        )
    }

}

export default  PostedAd;