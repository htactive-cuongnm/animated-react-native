import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Fade extends Component {
  state = {
    fadeValue: new Animated.Value(0),
  };

  _start = () => {
    this.setState({fadeValue: new Animated.Value(0)}, () => {
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: 1000,
      }).start();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.fadeValue,
            height: 250,
            width: 200,
            margin: 5,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#347a2a',
          }}>
          <Text>{Math.random()}</Text>
          {/* <Image
            style={[{width: '100%', height: 250}]}
            source={require('../../assets/cat3.jpg')}
          /> */}
        </Animated.View>
        <TouchableOpacity style={styles.btn} onPress={() => this._start()}>
          <Text style={styles.textBtn}>Find Radom</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {},
  btn: {
    backgroundColor: '#480032',
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item1: {
    backgroundColor: 'red',
    padding: 20,
    width: 100,
    margin: 10,
  },

  textBtn: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
