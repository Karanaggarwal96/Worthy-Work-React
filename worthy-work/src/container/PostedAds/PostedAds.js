import React,{Component} from 'react';
//import classes from './PostedAds.module.css'
import PostedAd from  '../PostedAd/PostedAd'
import axios from '../../axios-data'
class PostedAds extends Component{
    state={
        ridedata:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/rideshare.json')
        .then(res=>{
           const fetchedride=[]
            for(let key in res.data){
                fetchedride.push({
                  ...res.data[key],
                  id:key
                })
           }

            this.setState({loading:false,ridedata:fetchedride});
           
        })
        .catch(err=>{
            this.setState({loading:false})
        })
    }
    render(){
        return(
            <div>
                {this.state.ridedata.map(ride=>(
                        <PostedAd pickup={ride.pickup} drop={ride.drop} date={ride.date} desc={ride.desc} contact={ride.contact} key={ride.id}/>
                ))}
            </div>
        )
    }

}

export default  PostedAds;