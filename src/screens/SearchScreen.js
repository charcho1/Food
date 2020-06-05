import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'; //scrollview allows user to scroll if too much content in one screen
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term,setTerm] =useState ('');
    const [searchApi, results, errorMessage] = useResults();
    //we are calling the 3 variables from useresults in hooks folder
    const filterResultsByPrice = (price) => {
        return results.filter (result => {
            return result.price === price;
        })
    };
    /*
    {{navigation}}: pulls the navigation obj to be passed down to child cmpnt
    
    above, we are creating a function that sorts results by price
    price === '$'||'$$'||'$$$'
    for every result in results array, this fucntion will return the price if the price
    we input is equal to the results.price. If this is true, return the results set
     */
    return (
        <>
            <SearchBar 
            term = {term} 
            onTermChange ={setTerm}
            onTermSubmit ={()=>searchApi(term)}/>
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <ScrollView>
            <ResultsList 
                results ={filterResultsByPrice('$')} 
                title ="Cost Effective"
                />
            <ResultsList results ={filterResultsByPrice('$$')}title = "Bit Pricier"
                />
            <ResultsList results ={filterResultsByPrice('$$$')}title = "Big Spender"
             />
            </ScrollView>
        </>
        /*the setterm and search api pass in a function to theseonTerm stuff */
    );
};
//term = the term we use to do the search

//and we do a callback onto the SB component

//when the term changes, we want to set the new term such tath

//term: the term that is used to search yelp

//<searchBar term is where we pass down term and setTerm to the serchbar component

/*scrollview: allows you to scroll if too much stuff to display. but in smaller androdi
devices, the view expands to the screen and prevents youfrom scroling properly
so we tell it to use the screen space that's available, use {{flex:1}} to fix content being cut off
AN easier solution to this is to do <> and </> instead of view*/
const styles = StyleSheet.create ({});
export default SearchScreen;