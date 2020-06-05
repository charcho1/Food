import { useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState ('');
    //the default usestate is a blank because the user hasn't entered anything
    //to handle the rsults we get from the yelp api, we define a new state called results. then initialized as an empty array
    // because we expect results to have all different objects that we get from the yelp api (including rating, price, business etc)
    const searchApi = async(searchTerm) => {
        try{
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term:searchTerm,
                location: 'vancouver'
                
            }
        });
        setResults(response.data.businesses);
    }catch(err) {
        setErrorMessage('Something went wrong');
    }
    };
        /*new fn called searchapi where when called, 
        yelp.get('search') is done, which will concatenate on the yelp site
        response.data.businesses is the json results file we get from yelp
        
        once the results from this search come back, a variable named response
        will be defined. 
        
        the response.data.businesses is the property we are concerned about
        We set response.data.business as setresults
        
        params is being passed as another argument which will be applied  to our response/results from yelp
        
        Lecture 97: but we now want the default term to be searchTerm, not a default blank defined at
        useState. so we define it search term. But if we just do 
        */ 
       //asynchronous operation so need a promis
        //the try...catch is a pair in async fn where it asks the computer to try
        //one thing  and if it doesnt work, you throw an error via catch
    useEffect (()=>{
        searchApi('');
    }, []);
    /*above: We want to pass in a second arg of an empty array such that the function is run once!*/
    return [searchApi, results, errorMessage];
    /*these are the 3 things we need in our searchscreen js so we export as array*/    

};