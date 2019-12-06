import React, {Component} from 'react';
import {View, Animated, FlatList, SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';

export class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [1, 2, 3, 4, 5, 8, 9, 0],
      indexScroll: null,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <Header
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <Animated.ScrollView>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'black',
            }}
          />
          <FlatList
            data={this.state.array}
            renderItem={({item, i}) => (
              <View
                key={i}
                style={{
                  width: '100%',
                  height: 100,
                  backgroundColor: 'red',
                  marginTop: 10,
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}

export default list;
