import axios from 'axios';
export default axios.create ({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer T9yajrVhAvIY-Y6Oy6OOJfZv8I_RMbtxSMKKxvmz5hnH8zSmKJ707mleo4J-nHWo2YcouUFYeeuTf-UWdycb8FFtWAM1Eoltn0Ga5Dz5WNcUgYAIPVvakmXfFjyvXnYx'
    }
});
//baseURL: the root URL you want to make the request to

