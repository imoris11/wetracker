import { StyleSheet, Platform } from 'react-native';
import { Fonts, Metrics, Colors } from '../Themes';

module.exports = StyleSheet.create({

  headerSec: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
    paddingTop: 0,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {},
      android: {
				marginTop: Fonts.moderateScale(25)
			}
    }),
		elevation: 0
  },
	left: {
		flex: 0.5,
		backgroundColor: 'transparent',
  },
	backArrow: {
    width:30,
		justifyContent: 'center',
		alignItems: 'center'
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	textTitle: {
    color: "#000",
    fontSize: Fonts.moderateScale(20),
    marginTop: 5,
    fontWeight:'bold',
    alignSelf: 'center',
	  //////fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
	right: {
    flex: 0.5
  },
  mainText:{
    color: "#0691ce",
    fontSize: Fonts.moderateScale(17),
    height: (Metrics.HEIGHT * 0.05),
    width: (Metrics.WIDTH),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    top:(Metrics.HEIGHT * 0.44),
  },

  headerIcon:{
    color: '#0067C1'
  }
});
