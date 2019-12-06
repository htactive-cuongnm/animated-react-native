import React, {Component} from 'react';
import {
  View,
  Animated,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  Easing,
} from 'react-native';
import {Images, Metrics, Fonts, Colors} from '../../../Themes/';
import {Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rating from 'react-native-rating';

const FoodDetailsOne =
  'http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-egsalad.jpg';

const FoodDetailsTwo =
  'http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-fc.jpg';

const FoodDetailsThree =
  'http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-kai.jpg';

const FoodDetailsFour =
  'http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-perrys.jpg';

const FoodDetailsFive =
  'http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-tejas.jpg';

const FoodDetailsSix =
  'http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg';

var FoodDetails = [
  {
    id: 1,
    Foodimg: {uri: FoodDetailsOne},
    is_Favorite: true,
    rating: 4,
    FoodName: 'egsalad',
  },
  {
    id: 2,
    Foodimg: {uri: FoodDetailsTwo},
    is_Favorite: false,
    rating: 4,
    FoodName: 'Cocobolo Poolside Bar + Grill',
  },
  {
    id: 3,
    Foodimg: {uri: FoodDetailsThree},
    is_Favorite: false,
    rating: 4,
    FoodName: 'Steak Salad',
  },
  {
    id: 4,
    Foodimg: {uri: FoodDetailsFour},
    is_Favorite: false,
    rating: 4,
    FoodName: 'perrys',
  },
  {
    id: 5,
    Foodimg: {uri: FoodDetailsFive},
    is_Favorite: true,
    rating: 4,
    FoodName: 'Stuffed Trout',
  },
  {
    id: 6,
    Foodimg: {uri: FoodDetailsSix},
    is_Favorite: false,
    rating: 4,
    FoodName: 'Carpet Bagger Appetizer',
  },
];
export class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [1, 2, 3, 4, 5, 8, 9, 0],
      indexScroll: null,
      GridList: true,
      MenuList: false,
      dataSource: FoodDetails,
    };
  }

  _renderRowGrid = rowData => {
    const {item} = rowData;
    return (
      <View style={styles.listMainviewBg}>
        <View style={styles.FoodimgGrid}>
          <Image source={item.Foodimg} style={styles.FoodimgGrid} />
          {item.is_Favorite === true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridRecommended(item.id);
              }}
              style={styles.hearticon}>
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{alignSelf: 'flex-end', top: 5, right: 10}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridRecommended(item.id);
              }}>
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{alignSelf: 'flex-end', top: 5, right: 10}}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ProductDetails')}>
          <Text style={styles.FoodDetailsText}>{item.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: Metrics.HEIGHT * 0.01,
              marginLeft: Metrics.HEIGHT * 0.01,
            }}>
            <Rating
              initial={item.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350,
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStarGrid}
              editable={false}
            />
          </View>
          <Text style={styles.reviewText}>238 reviews</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderRowMenu = rowData => {
    const {item} = rowData;
    return (
      <View style={styles.mainListRenderRow}>
        <View style={styles.Foodimg}>
          <Image source={item.Foodimg} style={styles.Foodimg} />
          {item.is_Favorite === true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1(item.id);
              }}
              style={styles.hearticon}>
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{alignSelf: 'flex-end', top: 5, right: 10}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1(item.id);
              }}>
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{alignSelf: 'flex-end', top: 5, right: 10}}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ProductDetails')}>
          <Text style={styles.FoodDetailsText}>{item.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: Metrics.HEIGHT * 0.01,
              marginBottom: Metrics.HEIGHT * 0.01,
            }}>
            <Rating
              initial={item.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350,
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStar}
              editable={false}
            />
            <Text style={styles.reviewText}>238 reviews</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          containerStyle={{backgroundColor: '#ad1f1f'}}
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'SEARCH', style: {color: '#fff'}}}
          rightComponent={{icon: 'search', color: '#fff'}}
        />
        <View
          style={{
            backgroundColor: '#f5f5f5',
            height: 50,
          }}>
          <View style={styles.FilterMainBg}>
            <FontAwesome
              name="filter"
              size={20}
              color="#c2c4ca"
              style={{
                alignSelf: 'center',
                marginLeft: 20,
              }}
            />
            <Text style={styles.filterText}>Filter</Text>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  GridList: true,
                  MenuList: false,
                })
              }
              style={{
                alignSelf: 'center',
                marginLeft: 10,
              }}>
              {this.state.GridList ? (
                <Entypo name="grid" size={25} color="#262628" />
              ) : (
                <Entypo name="grid" size={25} color="#c2c4ca" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({
                  MenuList: true,
                  GridList: false,
                })
              }
              style={{
                alignSelf: 'center',
                marginLeft: 10,
              }}>
              {this.state.MenuList ? (
                <Entypo name="list" size={25} color="#262628" />
              ) : (
                <Entypo name="list" size={25} color="#c2c4ca" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Animated.ScrollView style={{flex: 1}}>
          {this.state.MenuList ? (
            <FlatList
              data={this.state.dataSource}
              renderItem={data => this._renderRowMenu(data)}
              keyExtractor={item => item.id}
            />
          ) : null}
          {this.state.GridList ? (
            <FlatList
              contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}
              data={this.state.dataSource}
              renderItem={data => this._renderRowGrid(data)}
              keyExtractor={item => item.id}
            />
          ) : null}
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}

export default list;
