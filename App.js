import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
 
 //stacknavigator: shows diff screens and shows header on top of each screen


//the "key" aka the lhs of the :, can be named anything
const Navigator = createStackNavigator ({
  Search:SearchScreen,
  ResultsShow: ResultsShowScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'Business Search'
 
  }
    }  //2nd object with severaloptions inside. Initialroutename = default route
    //defaultnavscreen is options being used for a given screen
);
 
export default createAppContainer(Navigator);
//RN will always display app.js on the initial screen and must always export a react component  
//Createappcontainer: creates this react component 


