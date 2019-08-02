import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
import { Fonts, Metrics, Colors } from "../../Themes";

const styles = StyleSheet.create({
  container: {
      flex:1
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
});
export default styles;
