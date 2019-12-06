import {Platform, StyleSheet, Dimensions, I18nManager} from 'react-native';
import {Images, Metrics, Fonts, Colors} from '../../Themes/';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },

  HeaderBg: {
    backgroundColor: '#ff3d00',
  },

  leftheader: {
    flex: 1,
  },

  body: {
    flex: 3,
  },

  right: {
    flex: 1,
  },

  HederText: {
    color: '#ffffff',
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(17),
      },
      android: {
        fontSize: Fonts.moderateScale(18),
      },
    }),

    fontFamily: Fonts.type.robotoRegular,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },

  MainRenderView: {
    backgroundColor: '#fff',
  },

  FoodImg: {
    width: Metrics.WIDTH * 0.93,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.35,
      },
      android: {
        height: Metrics.HEIGHT * 0.33,
      },
    }),
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 2,
    marginBottom: Metrics.HEIGHT * 0.02,
  },

  linearView: {
    width: Metrics.WIDTH * 0.93,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.35,
      },
      android: {
        height: Metrics.HEIGHT * 0.33,
      },
    }),
    position: 'absolute',
    top: 0,
    borderRadius: 2,
    marginBottom: Metrics.HEIGHT * 0.02,
  },

  FoodRecipeName: {
    color: '#fff',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(15),
  },

  FoodName: {
    color: '#fff',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(20),
    width: Metrics.WIDTH * 0.9,
    marginTop: Metrics.HEIGHT * 0.01,
  },

  TimeText: {
    color: '#fff',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(12),
    textAlign: 'center',
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  FoodFavorite: {
    height: Metrics.HEIGHT * 0.05,
    width: Metrics.WIDTH * 0.05,
    resizeMode: 'contain',
    marginTop: -Metrics.HEIGHT * 0.02,
  },

  tabUnderLine: {
    backgroundColor: 'black',
    height: 2,
  },

  tabText: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
  },

  OpenCloseBG: {
    height: Metrics.HEIGHT * 0.05,
    width: Metrics.HEIGHT * 0.14,
    borderRadius: Metrics.HEIGHT * 0.05,
    marginTop: Metrics.HEIGHT * 0.015,
    justifyContent: 'center',
  },

  HotelOpenCloseText: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    textAlign: 'center',
    alignSelf: 'center',
    color: '#fff',
  },

  CafeDurationText: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(12),
    color: '#fff',
  },
});

export default styles;
