import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
import { Fonts, Metrics, Colors } from "../../Themes";

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  secondaryContainer:{
    flexDirection:'row', 
    marginTop:10
  },
  tabUnderLine:{
    backgroundColor: '#1481E0'
  },
  tabUnderLineTrans:{
    backgroundColor: 'transparent'
  },
  tabText:{
    fontSize: Fonts.moderateScale(14),
  },
  rowContainer:{
    margin:20, 
    borderBottomWidth:0.5, 
    borderColor:'lightgrey'
  },
  outerCircle:{ 
    width: 20, 
    height:20, 
    borderRadius:10, 
    backgroundColor:'#83E06D', 
    justifyContent:'center', 
    alignItems:'center' 
  },
  innerCircle:{ 
    width: 10, 
    height:10, 
    borderRadius:5, 
    backgroundColor:'white' 
  },
  marker:{
    marginLeft:8, 
    fontSize:9, 
    color:'#1481E0'
  },
  secondaryCircle:{ 
    width: 20, 
    height:20, 
    borderRadius:10, 
    backgroundColor:'#E0716D', 
    justifyContent:'center', 
    alignItems:'center' 
  },
  timeInfo:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    margin:20
  },
  timeHint:{
    fontSize:8
  },
  time:{
    fontSize:12
  },

});
export default styles;
