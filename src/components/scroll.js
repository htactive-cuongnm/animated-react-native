import React, {Component} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {Header} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';

const Spinner = require('react-native-spinkit');
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 25 : 25;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [],
      isLoading: false,
      scrollY: new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      isPaging: false,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    try {
      const api = await fetch(
        'http://www.json-generator.com/api/json/get/cqZievzIde?indent=2',
      );
      const data = await api.json();
      this.setState({name: data}, () => {
        this.setState({isLoading: false});
      });
    } catch (error) {
      console.log(error);
    }
  }
  renderImageSwiper = (value, styles) => {
    return (
      <Animated.Image
        style={[
          {width: '100%', height: 250},
          {
            opacity: styles.imageOpacity,
            transform: [{translateY: styles.imageTranslate}],
          },
        ]}
        source={value}
      />
    );
  };
  handleSctoll = event => {
    if (event.nativeEvent.contentOffset.y < 150) {
      this.setState({
        isPaging: false,
      });
    } else if (event.nativeEvent.contentOffset.y > 130) {
      this.setState({
        isPaging: true,
      });
    }
  };
  _renderScrollViewContent() {
    return (
      <View>
        {!this.state.isLoading && (
          <View style={styles.scrollViewContent}>
            {this.state.name.map((items, i) => (
              <View key={i} style={styles.row}>
                <View
                  style={{
                    width: '30%',
                  }}>
                  <Image
                    style={{width: '100%', height: 120}}
                    source={require('../../assets/Image.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '70%',
                    paddingLeft: 5,
                    backgroundColor: '#FFF',
                  }}>
                  <Text style={{fontSize: 15}}>
                    ID:{' '}
                    <Text style={{fontSize: 14, color: '#9e9e9d'}}>
                      {items.index}
                    </Text>
                  </Text>
                  <Text style={{fontSize: 15}}>
                    favoriteFruit:{' '}
                    <Text style={{fontSize: 14, color: '#9e9e9d'}}>
                      {items.favoriteFruit}
                    </Text>
                  </Text>
                  <Text style={{fontSize: 15}}>
                    company:{' '}
                    <Text style={{fontSize: 14, color: '#9e9e9d'}}>
                      {items.company}
                    </Text>
                  </Text>
                  <Text style={{fontSize: 15}}>
                    email:{' '}
                    <Text style={{fontSize: 14, color: '#9e9e9d'}}>
                      {items.email}
                    </Text>
                  </Text>
                  <ScrollView
                    horizontal={true}
                    contentContainerStyle={{flexDirection: 'row'}}>
                    {items.tags.map((r, i) => (
                      <View
                        key={i}
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 4,
                          marginTop: 4,
                          height: 25,
                          marginBottom: 4,
                          borderRadius: 5,
                          paddingHorizontal: 5,
                          borderColor: '#149399',
                          backgroundColor: '#F3FBFE',
                          flexDirection: 'row',
                        }}>
                        <Entypo name="price-tag" size={14} color="#767676" />
                        <Text style={{color: '#149399', fontSize: 16}}>
                          {r}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }

  render() {
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner
            style={styles.spinner}
            isVisible={true}
            size={50}
            type="FadingCircleAlt"
          />
        </View>
      );
    } else {
      return (
        <View style={styles.fill}>
          {!this.state.isPaging ? null : (
            <View style={{backgroundColor: 'red', width: '100%', height: 80}}>
              <Header
                leftComponent={{
                  icon: 'menu',
                  color: '#fff',
                  onPress: () => {
                    alert('sda');
                  },
                }}
                centerComponent={{text: 'Home', style: {color: '#fff'}}}
                rightComponent={{icon: 'home', color: '#fff'}}
              />
            </View>
          )}
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="rgba(0, 0, 0, 0.251)"
          />
          <Animated.ScrollView
            style={styles.fill}
            scrollEventThrottle={5}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollY,
                    },
                  },
                },
              ],
              {
                useNativeDriver: true,
                listener: event => this.handleSctoll(event),
              },
            )}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({refreshing: true});
                  setTimeout(() => this.setState({refreshing: false}), 1000);
                }}
                progressViewOffset={HEADER_MAX_HEIGHT}
              />
            }
            contentInset={{
              top: HEADER_MAX_HEIGHT,
            }}
            contentOffset={{
              y: -HEADER_MAX_HEIGHT,
            }}>
            {this._renderScrollViewContent()}
          </Animated.ScrollView>

          <Animated.View
            // pointerEvents="none"
            style={[
              styles.header,
              {transform: [{translateY: headerTranslate}]},
            ]}>
            <Swiper
              style={styles.wrapper}
              showsPagination={this.state.isPaging ? false : true}
              showsButtons={true}>
              <View style={styles.slide1}>
                {this.renderImageSwiper(require('../../assets/cat1.jpg'), {
                  imageOpacity,
                  imageTranslate,
                })}
              </View>
              <View style={styles.slide2}>
                {this.renderImageSwiper(require('../../assets/cat3.jpg'), {
                  imageOpacity,
                  imageTranslate,
                })}
              </View>
              <View style={styles.slide3}>
                {this.renderImageSwiper(require('../../assets/cat2.jpg'), {
                  imageOpacity,
                  imageTranslate,
                })}
              </View>
            </Swiper>
          </Animated.View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    margin: 10,
    flexDirection: 'row',
    borderColor: '#E9E9E9',
    //
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 56, height: 13},
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: '#D3D3D3',
  },
});
