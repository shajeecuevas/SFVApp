import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image } from 'react-native';

/*class SFVApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}*/

/*class Greeting extends Component {
    render() {
        return (
            <Text> Hello {this.props.name}! </Text>
        );

    }
}
*/

class SFVApp extends Component {
    render(){
        return(
            <ScrollView>

                <Image source={require('./images/Ryu.jpg')} style={{width: 193, height: 110}} />
                <Image source={require('./images/Chun-Li.jpg')} />
                <Image source={require('./images/Ken.jpg')} />
                <Image source={require('./images/Necalli.jpg')} />

            </ScrollView>

         );
    };
}

AppRegistry.registerComponent('SFVApp', () => SFVApp);