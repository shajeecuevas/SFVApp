import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image, StyleSheet, TouchableHighlight } from 'react-native';

class SFVApp extends Component {
    constructor(props) {
        super(props);

        this.fighters = [
            {
                name: "Ryu",
                description: "fuck this nikky",
                image: require('./images/Ryu.jpg'),
            },
            {
                name: "Chun-Li",
                image: require('./images/Chun-Li.jpg'),
            },
            {
                name: "Ken",
                image: require('./images/Ken.jpg'),
            },
            {
                name: "Necalli",
                image: require('./images/Necalli.jpg'),
            },
            {
                name: "Bison (Dictator)",
                image: require('./images/Bison.jpg'),
            },
            {
                name: "Dhalsim",
                image: require('./images/Dhalsim.jpg'),
            },
            {
                name: "Zangief",
                image: require('./images/Zangief.jpg'),
            },
            {
                name: "Birdie",
                image: require('./images/Birdie.jpg'),
            },
            {
                name: "R.Mika",
                image: require('./images/RMika.jpg'),
            },
            {
                name: "Vega (Claw)",
                image: require('./images/Vega.jpg'),
            },
            {
                name: "Karin",
                image: require('./images/Karin.jpg'),
            },
            {
                name: "Charlie",
                image: require('./images/Charlie.jpg'),
            }
        ];

        this.state = {
            selectedIndex: null
        }
    }

    imageClicked(index) {
        this.setState({selectedIndex: index});
    }

    render(){
        let text;

        let fighters = this.fighters.map((fighter, index) => {
            //let style = this.state.selectedIndex === index ? styles.large : styles.medium;
            let style;
            if (this.state.selectedIndex === index) {
                text = (
                    <View style={styles.text}>
                        <Text style={styles.name}> {fighter.name} </Text>
                        <Text style={styles.description}> {fighter.description} </Text>
                    </View>
                )
                style = styles.medium;
            } else {
                style = styles.medium;
            }

            return (
                <TouchableHighlight key={index} onPress={() => this.imageClicked(index)}>
                    <Image style={style} source={fighter.image} />
                </TouchableHighlight>
            );
        });

        return(
            <ScrollView>
                <View style={styles.portraits}>
                    { fighters }
                </View>
                { text }
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
  portraits: {
    //display: 'flex',
    flexDirection: 'row',
    justifyContent:  'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  medium: {
    width: 80,
    height: 80
  },
  large: {
    width: 130,
    height: 130
  },
  text: {
    marginTop: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
  }
});

AppRegistry.registerComponent('SFVApp', () => SFVApp);