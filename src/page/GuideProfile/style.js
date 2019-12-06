import {Platform, StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Themes';

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: Colors.snow,
  },

  HeaderBg: {
    backgroundColor: '#e91e63',
  },

  left: {
    flex: 1,
  },

  body: {
    flex: 3,
  },

  right: {
    flex: 1,
  },

  headertitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(20),
  },

  guideProfile: {
    height: Metrics.HEIGHT * 0.35,
    width: Metrics.WIDTH,
  },

  guideName: {
    color: '#000000',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(22),
  },

  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  cityText: {
    color: '#000000',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(16),
  },

  ratingStar: {
    height: 17,
    width: 17,
    marginLeft: 10,
  },

  infoView: {
    paddingHorizontal: Metrics.WIDTH * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  verifiedText: {
    color: '#00C853',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
  },

  infoText: {
    color: '#263238',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
  },

  progressBarMainView: {
    marginVertical: Metrics.WIDTH * 0.06,
    marginHorizontal: Metrics.WIDTH * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progressBarView: {
    backgroundColor: Colors.snow,
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#bec1c2',
    width: Metrics.WIDTH * 0.45,
    padding: 10,
    flexDirection: 'row',
  },

  progressTitle: {
    color: '#757575',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
  },

  progressText: {
    color: '#212121',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(22),
  },
});

export default styles;
