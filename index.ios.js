/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import IndexPage from './components/index.js';
/**
 * API测试代码
 */
//import ApiTest from './components/test.js';
/*=======  end  =======*/
class mockTMall extends Component {
  render() {
    return (
      <Navigator
          tintColor='#cccccc'
          barTintColor='#cccccc'
          initialRoute={{ name: 'indexPage', component: IndexPage }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} {...route} navigator={navigator} />
          }}>
      </Navigator>
    );
  }
}



AppRegistry.registerComponent('mockTMall', () => mockTMall);
