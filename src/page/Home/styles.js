import {Platform, StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Themes/';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 25 : 25;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

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
    backgroundColor: '#cc4747',
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
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 56, height: 13},
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
  },
  ListName: {
    color: '#262628',
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.7,
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.7,
      },
    }),
    marginTop: Metrics.HEIGHT * 0.02,
  },

  ListDet: {
    color: '#4a4a4a',
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    width: Metrics.WIDTH * 0.6,
    marginTop: Metrics.HEIGHT * 0.01,
  },

  ListMin: {
    color: '#c2c4ca',
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(12),
    marginTop: Metrics.HEIGHT * 0.01,
  },
  //
  mainView: {
    flex: 1,
    backgroundColor: Colors.snow,
  },

  HeaderBg: {
    backgroundColor: '#cc0001',
    borderBottomWidth: 1,
  },

  left: {
    flex: 1,
    marginLeft: 5,
  },

  body: {
    flex: 3,
  },

  right: {
    flex: 1,
    marginRight: 5,
    flexDirection: 'row',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(20),
    textAlign: 'left',
    alignSelf: 'flex-start',
  },

  mainsubview: {
    flex: 1,
    backgroundColor: '#fff',
  },

  TitleText: {
    color: '#4e4e4e',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.025,
    marginTop: Metrics.HEIGHT * 0.025,
  },

  FeaturedNewsText: {
    color: '#4e4e4e',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.025,
    marginTop: Metrics.HEIGHT * 0.035,
  },

  myrecipesbg: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },

  RecentPlayedBG: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    width: Metrics.WIDTH * 0.45,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: Metrics.HEIGHT * 0.025,
    marginBottom: Metrics.HEIGHT * 0.02,
    borderRadius: 3,
  },

  ImageBG: {
    width: Metrics.WIDTH * 0.45,
    backgroundColor: '#000000',
    height: Metrics.HEIGHT * 0.2,
    borderRadius: 3,
  },

  RecentPlayedTitleText: {
    color: '#1d262a',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.HEIGHT * 0.017,
    marginLeft: Metrics.HEIGHT * 0.015,
  },

  RecentPlayednameText: {
    color: '#626262',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.HEIGHT * 0.013,
    marginLeft: Metrics.HEIGHT * 0.015,
    marginBottom: Metrics.HEIGHT * 0.015,
  },

  AdsBG: {
    width: Metrics.WIDTH,
    backgroundColor: '#37474f',
    alignSelf: 'center',
    height: Metrics.HEIGHT * 0.1,
    justifyContent: 'center',
  },

  AdsText: {
    color: '#7e939e',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(16),
    textAlign: 'center',
  },
});

export {styles, HEADER_MAX_HEIGHT, HEADER_SCROLL_DISTANCE};
