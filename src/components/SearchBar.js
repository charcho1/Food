import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
//feather refers to the name given to icon (refr to the expo website)
//notice we imported TextInput instead of just text
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
             style={styles.inputStyle} size={30}
             value={term}
             onChangeText={newTerm=>onTermChange(newTerm)}
             onEndEditing={() => onTermSubmit}/>
        </View>
    );
    //name = "search" refers to the name of the icon within the feather "font"
    //placeholder = Search is the greyed out search word
    //when user changes text, we put the 
    //this is the component the user sees
    //onendediting tells the machine when the person hits enter or checkmark, the machine
    //should runt he search
};
const styles = StyleSheet.create ({
    background:{
        marginTop:10,
        backgroundColor: '#fff',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom:10
        
    },
    inputStyle:{
        fontSize:18,
        flex:1,
        //this inputstle helps us see the boundaries of the textinput
    },
    iconStyle: {
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
    //flex direction is important to put the placeholder right next to 
    //the magnifying glass
    //alignself allows the magnifying glass to be in the center
    //you don't want to align the parent to center because this will
    //collapse the searchbar, allowing less space for the user to click
});
//background color uses hexcode: #fff is white and #000 is black
//showing icons: go here https://expo.github.io/vector-icons/
export default SearchBar;