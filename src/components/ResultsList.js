import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'; 
/*^we import a function from react navigation that returns a new version with the navigation prop added in*/
import ResultsDetail from './ResultsDetail';
const ResultsList = ({title, results, navigation }) => {//import navigation from search screen
    return <View style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
        <FlatList
            horizontal = {true}
            data = {results}
            showsHorizontalScrollIndicator={false} //hides scrollbar
            keyExtractor={(result) => result.id} 
            renderItem={({item})=> {
                return (
                    <TouchableOpacity onPress ={() => navigation.navigate('ResultsShow',{ id:item.id})}>
                        
                    <ResultsDetail result = {item}/>
                    </TouchableOpacity>
                )

            }}
        />
    </View>
};
/*{title} receives title prop from the SearchScreen (=parent) into the ResultsList (child)
Then we style the titles using the const styles below
the results from search screen is passed down to results list

flatlist: data is the results, keyextractor prop is a function which will be
passed with every object in results which is associated with an identifier
In the case of yelp, each result has a property called id which is unique
so we assign this to the key extractor function

return item.name = restaurant

return <resultsDetail uses RD as an object. We definea property named result as ={item}
and then pass this property onto resultsdetail 

<TouchableOpacity onPress ={() => navigation.navigate('ResultsShow'),{ id:item.id}}>
This shows 2 args. First allows navigation to diff page. Second allows 
*/

const styles = StyleSheet.create ({
    title: {
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:5,
    },
    container: {marginBottom:10}

});
export default withNavigation(ResultsList);
//we export ResultsList such that it has direct access to navigation without passing down from parent