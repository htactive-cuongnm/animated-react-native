import React, {Component} from 'react';
import {
  Platform,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  View,
  Text,
  Image,
  Easing,
} from 'react-native';
import {Content, Header, Left, Right, Body, Title, Row} from 'native-base';
import {Metrics, Fonts, Colors, Images} from '../../Themes';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rating from 'react-native-rating';
import ProgressCircle from 'react-native-progress-circle';
import Modal from 'react-native-modal';
const traveling_profile =
  'http://antiquerubyreact.aliansoftware.net/all_live_images/ic_traveling_profile.jpg';

var ScreenName = '';

export default class GuideProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {isFunciton: false};
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);

    const {navigation} = this.props;
    ScreenName = navigation.getParam('screenName');
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate(ScreenName);
    return true;
  };

  renderModal = () => {
    return (
      <View
        style={{
          width: '90%',
          height: 440,
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderRadius: 15,
          alignItems: 'center',
          padding: 20,
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#E9E9E9',
            top: -50,
            //
            borderRadius: 100,
            paddingBottom: 5,
            backgroundColor: '#FFFFFF',
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOpacity: 0.8,
            elevation: 6,
            shadowRadius: 15,
            shadowOffset: {width: 1, height: 13},
          }}>
          <View
            Title="icon"
            style={{
              width: 90,
              height: 90,
              backgroundColor: '#ad1f1f',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}>
            <AntDesign name="setting" size={30} color={'#fff'} />
          </View>
        </View>
        <View
          Title="header"
          style={{
            width: '100%',
            position: 'absolute',
            top: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25}}>Settings</Text>
        </View>
        <View
          Title="content"
          style={{
            width: '100%',
            position: 'absolute',
            top: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
            }}>
            You can settings all in this popup and check your setting
          </Text>
        </View>
        <View
          Title="button"
          style={{
            width: '100%',
            position: 'absolute',
            top: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({isFunciton: !this.state.isFunciton});
            }}
            style={[
              styles.progressBarView,
              {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: 0,
              },
            ]}>
            <View
              style={{
                width: '97%',
                height: '85%',
                borderRadius: 5,
                margin: 10,
                justifyContent: 'center',
                backgroundColor: '#ad1f1f',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.progressTitle,
                  {
                    textAlign: 'center',
                    flexDirection: 'row',
                    color: '#fff',
                  },
                ]}>
                LOG-OUT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          Title="button"
          style={{
            width: '100%',
            position: 'absolute',
            top: 255,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({isFunciton: !this.state.isFunciton});
            }}
            style={[
              styles.progressBarView,
              {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: 0,
              },
            ]}>
            <View
              style={{
                width: '97%',
                height: '85%',
                borderRadius: 5,
                margin: 10,
                justifyContent: 'center',
                backgroundColor: '#ad1f1f',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.progressTitle,
                  {
                    textAlign: 'center',
                    flexDirection: 'row',
                    color: '#fff',
                  },
                ]}>
                EDIT-PROFILE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          Title="button"
          style={{
            width: '100%',
            position: 'absolute',
            top: 310,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({isFunciton: !this.state.isFunciton});
            }}
            style={[
              styles.progressBarView,
              {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: 0,
              },
            ]}>
            <View
              style={{
                width: '97%',
                height: '85%',
                borderRadius: 5,
                margin: 10,
                justifyContent: 'center',
                backgroundColor: '#ad1f1f',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.progressTitle,
                  {
                    textAlign: 'center',
                    flexDirection: 'row',
                    color: '#fff',
                  },
                ]}>
                SETTINGS-APP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          Title="button"
          style={{
            width: '100%',
            position: 'absolute',
            top: 365,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({isFunciton: !this.state.isFunciton});
            }}
            style={[
              styles.progressBarView,
              {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: 0,
              },
            ]}>
            <View
              style={{
                width: '97%',
                height: '85%',
                borderRadius: 5,
                margin: 10,
                justifyContent: 'center',
                backgroundColor: '#ad1f1f',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.progressTitle,
                  {
                    textAlign: 'center',
                    flexDirection: 'row',
                    color: '#fff',
                  },
                ]}>
                CLOSE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainview}>
        <Content style={{backgroundColor: Colors.snow}}>
          <Image
            source={{uri: traveling_profile}}
            style={styles.guideProfile}
          />

          <View style={{padding: Metrics.WIDTH * 0.04}}>
            <Text style={styles.guideName}>Ludwig Berthoven</Text>
            <View style={styles.ratingView}>
              <Text style={styles.cityText}>Mexico City, Mexico</Text>
              <Rating
                initial={5}
                onChange={rating => {
                  this.setState({
                    rating: rating,
                  });
                }}
                selectedStar={Images.starFilled1}
                unselectedStar={Images.starEmpty1}
                config={{
                  easing: Easing.inOut(Easing.ease),
                  duration: 350,
                }}
                starStyle={styles.ratingStar}
                containerStyle={{
                  marginTop: 5,
                  flexDirection: 'row',
                }}
                editable={false}
              />
            </View>
            <Text style={styles.cityText}>Member Since July 2013</Text>
          </View>

          <View style={{height: 1, backgroundColor: '#BDBDBD'}} />

          <View style={styles.infoView}>
            <Text style={styles.verifiedText}>Verified ID</Text>
            <AntDesign name="check" color="#00C853" size={20} />
          </View>

          <View style={{height: 1, backgroundColor: '#BDBDBD'}} />

          <View style={styles.infoView}>
            <Text style={styles.infoText}>Email Address</Text>
            <Text style={styles.infoText}>ludwig@email.com</Text>
          </View>

          <View style={{height: 1, backgroundColor: '#BDBDBD'}} />

          <View style={[styles.infoView, {alignItems: 'center'}]}>
            <Text style={styles.infoText}>Setting</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({isFunciton: !this.state.isFunciton});
              }}
              style={styles.progressBarView}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text
                  style={[
                    styles.progressTitle,
                    {
                      textAlign: 'center',
                      flexDirection: 'row',
                    },
                  ]}>
                  functions
                  <AntDesign
                    name={this.state.isFunciton ? 'shrink' : 'arrowsalt'}
                    size={20}
                  />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Modal
            style={{justifyContent: 'center', alignItems: 'center'}}
            backdropColor="black"
            onBackdropPress={() => {
              this.setState({isFunciton: false});
            }}
            onBackButtonPress={() => {
              this.setState({isFunciton: false});
            }}
            isVisible={this.state.isFunciton}>
            {this.renderModal()}
          </Modal>

          <View style={{height: 1, backgroundColor: '#BDBDBD'}} />

          <View style={styles.infoView}>
            <Text style={styles.infoText}>Phone Number</Text>
            <Text style={styles.infoText}>+41 5678 4325</Text>
          </View>

          <View style={{height: 1, backgroundColor: '#BDBDBD'}} />

          <View style={styles.progressBarMainView}>
            <View style={styles.progressBarView}>
              <ProgressCircle
                percent={75}
                radius={30}
                borderWidth={5}
                color="#448AFF"
                shadowColor="#E1E7E9"
                bgColor="#fff"
              />

              <View style={{justifyContent: 'center', paddingLeft: 10}}>
                <Text style={styles.progressTitle}>Accuracy</Text>
                <Text style={styles.progressText}>75%</Text>
              </View>
            </View>

            <View style={styles.progressBarView}>
              <ProgressCircle
                percent={50}
                radius={30}
                borderWidth={5}
                color="#F9CE1D"
                shadowColor="#E1E7E9"
                bgColor="#fff"
              />

              <View style={{justifyContent: 'center', paddingLeft: 10}}>
                <Text style={styles.progressTitle}>Response Rate</Text>
                <Text style={styles.progressText}>50%</Text>
              </View>
            </View>
          </View>

          <View style={styles.progressBarMainView}>
            <View style={styles.progressBarView}>
              <ProgressCircle
                percent={89}
                radius={30}
                borderWidth={5}
                color="#E91E63"
                shadowColor="#E1E7E9"
                bgColor="#fff"
              />

              <View style={{justifyContent: 'center', paddingLeft: 10}}>
                <Text style={styles.progressTitle}>Behaviour</Text>
                <Text style={styles.progressText}>89%</Text>
              </View>
            </View>

            <View style={styles.progressBarView}>
              <ProgressCircle
                percent={80}
                radius={30}
                borderWidth={5}
                color="#00C853"
                shadowColor="#E1E7E9"
                bgColor="#fff"
              />

              <View style={{justifyContent: 'center', paddingLeft: 10}}>
                <Text style={styles.progressTitle}>Recommended</Text>
                <Text style={styles.progressText}>80%</Text>
              </View>
            </View>
          </View>
        </Content>
      </View>
    );
  }
}
