import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { FIGHTERS } from './FIGHTERS.js';
//import { Constants } from 'expo';

export class FighterView extends Component {
  random() {
    return (Math.ceil(Math.random()*8));
  }

  render() {

    let rows = [];
    let fighter = FIGHTERS[this.props.fighterIndex];
    fighter.frameData.forEach((data, i) => {
        rows.push(
          <View key={i} style={styles.tableRow}>
            <Text style={styles.tableColumn25}>{ data.name }</Text>
            <Text style={styles.tableColumn1}>{ data.active }</Text>
            <Text style={styles.tableColumn1}>{ data.block }</Text>
            <Text style={styles.tableColumn1}>{ data.recovery }</Text>
            <Text style={styles.tableColumn1}>{ data.onHit }</Text>
            <Text style={styles.tableColumn1}>{ data.onBlock }</Text>
            <Text style={styles.tableColumn1}>{ data.damage }</Text>
            <Text style={styles.tableColumn1}>{ data.stun }</Text>



          </View>
        );
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            { fighter.name } Frame Data
          </Text>
        </View>
        { rows }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#cacdd1',
    margin: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  tableRow: {
    flexDirection: 'row',
    flex: 1,
  },
  tableColumn1: {
    flex: 1,
    margin: 1,
    backgroundColor: '#cacdd1',
  },
  tableColumn25: {
    flex: 2.5,
    margin: 1,
    backgroundColor: '#cacdd1',
  }
});
