import React , {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList,Image } from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null); 
    //null suggests no data has been asked to be fetched
    const id = navigation.getParam('id'); //this obtains pa
    console.log(result)
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
        /*^we want to get photos of the business the user clicks on 
    need to import yelp.js
    response.data is the response we get that we want to rerender so we use states
    so we create the const [] get state*/
    useEffect (() => {
        getResult(id);

    },[]);
   
    if (!result) {//if thre is no result returned, return nothing
        return null;
    }
    /*we then want to use useeffect such that the argument is run one time 
    by passing an empty array as the second arugment*/
;    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data = {result.photos}
                keyExtractor = {(photo)=> photo}//define photo variable as the unique url called photo (see terminal)
                renderItem={({item})=> {
                    return <Image style={style.image} source = {{uri:item}}

                   />}}
                        

            />
            
        </View>
    );
};
const style = StyleSheet.create ({
    image: {
        height: 200,
        width: 300,
    }
});

export default ResultsShowScreen;