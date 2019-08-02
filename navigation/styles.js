import { StyleSheet, PixelRatio, Platform } from 'react-native';
const deviceScreen = require('Dimensions').get('window')
import { Fonts, Metrics, Colors } from '../Themes';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  drawercontainer:{
    flex:1,
    padding: 0,
  },
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
    fontSize: Fonts.moderateScale(25),
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



  /*Menu Section START*/
  menuContainer:{
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    paddingTop: Fonts.moderateScale(30),
  },
  menucontrolPanel: {
    paddingTop: Fonts.moderateScale(25),
  },
  userProfiles:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    padding:20
  },
  userImageStyle:{
    width: (Metrics.WIDTH) * 0.15,
    height: (Metrics.WIDTH) * 0.15,
    borderRadius: (Metrics.WIDTH)* 0.075,
  },
  userDetailsStyle:{
    backgroundColor: 'transparent',
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  userDetailsText:{
    fontSize: Fonts.moderateScale(16),
    fontWeight: 'bold'
  },
  userid: {
    fontSize: Fonts.moderateScale(10)
  },
  deviceAdded: {
    backgroundColor: Colors.snow,
    padding:12
  },
  device: {
    padding:13,
    backgroundColor: 'rgba(0, 103, 193, 0.1)',
    borderTopWidth:0.4,
    borderColor:'lightgrey',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  inactive:{
    backgroundColor:'red'
  },
  sleeping:{
    backgroundColor:'orange'
  },
  success:{
    backgroundColor:'green'
  },
  circle: {
    width:10, 
    height:10, 
    borderRadius:5, 
  },
  addContainer:{
    backgroundColor: '#0067C1',
    padding:5,
    paddingLeft:10,
    paddingRight:10
  },
  addBorder:{
     borderBottomWidth:0.2, 
     borderColor:'lightgrey',
  },
  add:{
    color: '#0067C1',
    fontSize: Fonts.moderateScale(16),
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingTop:15,
    marginLeft: Fonts.moderateScale(15),
    textAlign: 'center',
    //////fontFamily: Fonts.type.sfuiDisplayLight,
  },
  addIcon:{
    color:'white', 
    fontSize:40, 
    fontWeight:'bold'
  },
  icons:{
    color:'#000', 
    fontSize:20
  },
  headerIcon:{
    color: '#0067C1'
  },
  menumainview:{
    backgroundColor:Colors.gray,
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowtxt:{
    color: Colors.black,
    fontSize: Fonts.moderateScale(14),
    backgroundColor: 'transparent',
    marginLeft: Fonts.moderateScale(15),
    textAlign: 'center',
    //////fontFamily: Fonts.type.sfuiDisplayLight,
  },
  notiCountSec:{
    backgroundColor: '#d9b63e',
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notiCount:{
    color: Colors.snow,
    fontSize: Fonts.moderateScale(13),
  },
  /*Menu Section END*/

  


});
