import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://worthyworks-f757b.firebaseio.com/'
})


export default instance;