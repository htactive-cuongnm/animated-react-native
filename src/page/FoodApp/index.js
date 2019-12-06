import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  Platform,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Container, Icon, Right, Left, Title, Body} from 'native-base';
import styles from './styles';
import {Metrics, Fonts, Colors, Images} from '../../Themes';

import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar,
} from '../../components/react-native-scrollable-tab-view';

var AllCategoriesData = [
  {
    id: 1,
    FoodImg: Images.ic_food_six,
    FoodRecipeName: 'American Best Seller',
    FoodName: 'Social Brunch Cafe',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '1.25 KM',
  },
  {
    id: 2,
    FoodImg: Images.FoodRecipes_seaven,
    FoodRecipeName: 'Free Delivery',
    FoodName: 'Fish N Chips .Co',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '3.04 KM',
  },
  {
    id: 3,
    FoodImg: Images.FoodRecipes_nine,
    FoodRecipeName: 'Healthy Food',
    FoodName: 'Organic Salad',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '1.25 KM',
  },
  {
    id: 4,
    FoodImg: Images.FoodRecipes_eight,
    FoodRecipeName: 'American Best Seller',
    FoodName: 'Cocobolo Poolside Bar + Grill',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '2.25 KM',
  },
  {
    id: 5,
    FoodImg: Images.FoodRecipes_five,
    FoodRecipeName: 'Free Delivery',
    FoodName: 'Fish N Chips .Co',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '5.25 KM',
  },
  {
    id: 6,
    FoodImg: Images.FoodRecipes_one,
    FoodRecipeName: 'Healthy Food',
    FoodName: 'Organic Salad',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '3.25 KM',
  },
];

var AllCategoriesDataSnacks = [
  {
    id: 1,
    FoodImg: Images.ic_food_one,
    FoodRecipeName: 'American Best Seller',
    FoodName: 'Social Brunch Cafe',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '1.25 KM',
  },
  {
    id: 2,
    FoodImg: Images.ic_food_three,
    FoodRecipeName: 'Free Delivery',
    FoodName: 'Fish N Chips .Co',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '3.04 KM',
  },
  {
    id: 3,
    FoodImg: Images.ic_food_five,
    FoodRecipeName: 'Healthy Food',
    FoodName: 'Organic Salad',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '1.25 KM',
  },
  {
    id: 4,
    FoodImg: Images.FoodRecipes_eight,
    FoodRecipeName: 'American Best Seller',
    FoodName: 'Cocobolo Poolside Bar + Grill',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '2.25 KM',
  },
  {
    id: 5,
    FoodImg: Images.FoodRecipes_five,
    FoodRecipeName: 'Free Delivery',
    FoodName: 'Fish N Chips .Co',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '5.25 KM',
  },
  {
    id: 6,
    FoodImg: Images.FoodRecipes_one,
    FoodRecipeName: 'Healthy Food',
    FoodName: 'Organic Salad',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '3.25 KM',
  },
];

var AllCategoriesDataDishes = [
  {
    id: 1,
    FoodImg: Images.ic_food_two,
    FoodRecipeName: 'American Best Seller',
    FoodName: 'Social Brunch Cafe',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '1.25 KM',
  },
  {
    id: 2,
    FoodImg: Images.ic_food_four,
    FoodRecipeName: 'Free Delivery',
    FoodName: 'Fish N Chips .Co',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '3.04 KM',
  },
  {
    id: 3,
    FoodImg: Images.ic_food_six,
    FoodRecipeName: 'Healthy Food',
    FoodName: 'Organic Salad',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '1.25 KM',
  },
  {
    id: 4,
    FoodImg: Images.FoodRecipes_eight,
    FoodRecipeName: 'American Best Seller',
    FoodName: 'Cocobolo Poolside Bar + Grill',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '2.25 KM',
  },
  {
    id: 5,
    FoodImg: Images.FoodRecipes_five,
    FoodRecipeName: 'Free Delivery',
    FoodName: 'Fish N Chips .Co',
    HotelOpenClose: 'OPEN',
    backgroundColor: '#00c853',
    CafeDuration: '5.25 KM',
  },
  {
    id: 6,
    FoodImg: Images.FoodRecipes_one,
    FoodRecipeName: 'Healthy Food',
    FoodName: 'Organic Salad',
    HotelOpenClose: 'CLOSED',
    backgroundColor: '#ff3d00',
    CafeDuration: '3.25 KM',
  },
];

export default class FoodApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: AllCategoriesData,
      dataSourceOne: AllCategoriesDataSnacks,
      dataSourceTwo: AllCategoriesDataDishes,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('OverView');
    return true;
  };

  _renderRow(rowData) {
    const {item} = rowData;
    return (
      <View style={styles.MainRenderView}>
        <TouchableOpacity
          style={styles.FoodImg}
          onPress={() => this.props.navigation.navigate('OrderDetails')}>
          <Image source={item.FoodImg} style={styles.FoodImg} />
          <LinearGradient
            colors={['transparent', 'black']}
            style={styles.linearView}>
            <View
              style={{
                position: 'absolute',
                bottom: Metrics.HEIGHT * 0.03,
                left: Metrics.HEIGHT * 0.025,
              }}>
              <Text style={styles.FoodRecipeName}>{item.FoodRecipeName}</Text>
              <Text style={styles.FoodName}>{item.FoodName}</Text>
              <TouchableOpacity
                style={[
                  styles.OpenCloseBG,
                  {backgroundColor: item.backgroundColor},
                ]}>
                <Text style={styles.HotelOpenCloseText}>
                  {item.HotelOpenClose}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  right: Metrics.HEIGHT * 0.04,
                  bottom: -2,
                }}>
                <Text style={styles.CafeDurationText}>{item.CafeDuration}</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Container>
          <Header
            containerStyle={{backgroundColor: '#ad1f1f'}}
            leftComponent={{
              icon: 'menu',
              color: '#fff',
              onPress: () => {
                alert('sda');
              },
            }}
            centerComponent={{text: 'Home', style: {color: '#fff'}}}
            rightComponent={{icon: 'search', color: '#fff'}}
          />
          <ScrollableTabView
            initialPage={0}
            tabBarUnderlineStyle={styles.tabUnderLine}
            tabBarBackgroundColor={'transparent'}
            tabBarActiveTextColor={'black'}
            tabBarInactiveTextColor={'black'}
            tabBarTextStyle={styles.tabText}
            style={{
              backgroundColor: '#ebebeb',
            }}
            renderTabBar={() => <ScrollableTabBar />}>
            <View tabLabel="TOP-VIEW">
              <View
                style={{
                  backgroundColor: '#fff',
                }}>
                <FlatList
                  style={{marginTop: Metrics.HEIGHT * 0.02}}
                  data={this.state.dataSource}
                  renderItem={this._renderRow.bind(this)}
                  enableEmptySections
                  pageSize={4}
                />
              </View>
            </View>
            <View tabLabel="TOP-LIKE">
              <View
                style={{
                  backgroundColor: '#fff',
                }}>
                <FlatList
                  style={{marginTop: Metrics.HEIGHT * 0.02}}
                  data={this.state.dataSourceOne}
                  renderItem={this._renderRow.bind(this)}
                  enableEmptySections
                  pageSize={4}
                />
              </View>
            </View>
            <View tabLabel="TOP-SHARE">
              <View
                style={{
                  backgroundColor: '#fff',
                }}>
                <FlatList
                  style={{marginTop: Metrics.HEIGHT * 0.02}}
                  data={this.state.dataSourceTwo}
                  renderItem={this._renderRow.bind(this)}
                  enableEmptySections
                  pageSize={4}
                />
              </View>
            </View>
          </ScrollableTabView>
        </Container>
      </View>
    );
  }
}
