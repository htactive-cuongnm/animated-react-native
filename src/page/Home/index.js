import React, {Component} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  Text,
  Image,
  View,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles, HEADER_MAX_HEIGHT, HEADER_SCROLL_DISTANCE} from './styles';
import {Metrics, Colors, Fonts, Images} from '../../Themes';

const Spinner = require('react-native-spinkit');

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
      RecentPlayed: [
        {
          id: 1,
          RecentPlayedTitle: 'Sub Pop Radio',
          RecentPlayedname: 'Bonus Episode: Aftermath in Ocilla',
          Img: Images.RecentPlayed_one,
        },
        {
          id: 2,
          RecentPlayedTitle: 'Playing with Science',
          RecentPlayedname: 'Baseball:Physics at the Plate',
          Img: Images.RecentPlayed_two,
        },
        {
          id: 3,
          RecentPlayedTitle: 'Sub Pop Radio',
          RecentPlayedname: 'Bonus Episode: Aftermath in Ocilla',
          Img: Images.RecentPlayed_one,
        },
        {
          id: 4,
          RecentPlayedTitle: 'Playing with Science',
          RecentPlayedname: 'Baseball:Physics at the Plate',
          Img: Images.RecentPlayed_two,
        },
        {
          id: 5,
          RecentPlayedTitle: 'Sub Pop Radio',
          RecentPlayedname: 'Bonus Episode: Aftermath in Ocilla',
          Img: Images.RecentPlayed_one,
        },
      ],
      FeaturedNews: [
        {
          id: 1,
          RecentPlayedTitle: 'Fox News Talk',
          RecentPlayedname: 'Fox News Sunday with Chris Wallace',
          Img: Images.Featured_News_one,
        },
        {
          id: 2,
          RecentPlayedTitle: 'BBC World Service News',
          RecentPlayedname: 'The Compass',
          Img: Images.Featured_News_two,
        },
        {
          id: 3,
          RecentPlayedTitle: 'Sub Pop Radio',
          RecentPlayedname: 'Bonus Episode: Aftermath in Ocilla',
          Img: Images.Featured_News_one,
        },
        {
          id: 4,
          RecentPlayedTitle: 'Fox News Talk',
          RecentPlayedname: 'Fox News Sunday with Chris Wallace',
          Img: Images.Featured_News_two,
        },
        {
          id: 5,
          RecentPlayedTitle: 'Sub Pop Radio',
          RecentPlayedname: 'Bonus Episode: Aftermath in Ocilla',
          Img: Images.Featured_News_one,
        },
      ],
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
            <View style={styles.mainsubview}>
              <ScrollView>
                <View>
                  <ScrollView
                    style={styles.myrecipesbg}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {this.state.RecentPlayed.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          style={styles.RecentPlayedBG}
                          onPress={() =>
                            this.props.navigation.navigate('RadioDetails')
                          }>
                          <Image source={item.Img} style={styles.ImageBG} />
                          <Text style={styles.RecentPlayedTitleText}>
                            {item.RecentPlayedTitle}
                          </Text>
                          <Text style={styles.RecentPlayednameText}>
                            {item.RecentPlayedname}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
            {this.state.name.map((items, i) => (
              <View key={i} style={styles.row}>
                <View
                  style={{
                    width: '30%',
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: 120,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                    }}
                    source={require('../../../assets/Image.jpg')}
                  />
                </View>
                <View
                  style={{
                    width: '70%',
                    paddingLeft: 5,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    backgroundColor: '#FFF',
                  }}>
                  <Text style={styles.ListName}>Lady killer</Text>
                  <Text numberOfLines={2} style={styles.ListDet}>
                    All the projects consists of seve sub folders e.g. index.js
                    , style.js, ControlPanel.js , Tablist.js, tabliststyle.js.
                    The .js files are separated in their particular folder,
                    according to their types for ease of understanding the
                    structure.
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
            <View
              style={{backgroundColor: '#ad1f1f', width: '100%', height: 80}}>
              <Header
                containerStyle={{backgroundColor: '#ad1f1f'}}
                leftComponent={{
                  icon: 'menu',
                  color: '#fff',
                  onPress: () => {
                    alert('sda');
                  },
                }}
                centerComponent={{text: 'HOME', style: {color: '#fff'}}}
                rightComponent={{icon: 'search', color: '#fff'}}
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
            style={[
              styles.header,
              {transform: [{translateY: headerTranslate}]},
            ]}>
            <Swiper
              style={{color: 'red'}}
              activeDotColor={'#ad1f1f'}
              dotColor={'#fff'}
              showsPagination={this.state.isPaging ? false : true}>
              <View style={styles.slide1}>
                {this.renderImageSwiper(require('../../../assets/cat1.jpg'), {
                  imageOpacity,
                  imageTranslate,
                })}
              </View>
              <View style={styles.slide2}>
                {this.renderImageSwiper(require('../../../assets/cat3.jpg'), {
                  imageOpacity,
                  imageTranslate,
                })}
              </View>
              <View style={styles.slide3}>
                {this.renderImageSwiper(require('../../../assets/cat2.jpg'), {
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
