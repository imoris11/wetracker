import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
import { Fonts, Colors } from "../../Themes";

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowtxt:{
    color: Colors.black,
    fontSize: Fonts.moderateScale(16),
    backgroundColor: 'transparent',
    marginLeft: Fonts.moderateScale(15),
    textAlign: 'center',
    //////fontFamily: Fonts.type.sfuiDisplayLight,
  },
  icons:{
    color:'#1481E0', 
    fontSize:30
  },
});
export default styles;
