import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
import { Fonts, Metrics, Colors } from "../../Themes";

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  inputStyle: {
    borderColor: Colors.greys,
    justifyContent: "center",
    borderRadius:7,
    alignSelf: "center",
    marginTop: 10,
    width: Metrics.WIDTH * 0.8
  },
  inputmain: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    justifyContent: "center",
    color: Colors.black,
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.8,
    backgroundColor: "rgba(255,255,255,0.4)"
  }, 
  signInbtn: {
    backgroundColor: "#1481E0",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 7,
    height:50,
    width: Metrics.WIDTH * 0.8,
    marginTop: 35
  },
  buttongetstarted: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize:18,
    color: Colors.snow
  },
  form: {
    backgroundColor: Colors.snow,
    flex:1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  title:{ 
    fontSize: Fonts.moderateScale(24), 
    textAlign:'center', 
    color:'#717171', 
    padding:10, 
  }
});
export default styles;
