import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating}, Stars, {result.review_count}</Text>
    </View>
};
/* to put in image, we assign source then pass an object (outer = js expression and inner = object)
uri: the source of image (which is result.image_url)
*/

const styles = StyleSheet.create ({
    container: {marginLeft:15
    },

image:{
    width: 250,
     height: 120,
    borderRadius:4,
    marginBottom:5,
},
name: {
    fontWeight:'bold',
    
}
});

export default ResultsDetail;