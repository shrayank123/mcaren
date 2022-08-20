import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Platform, ImageBackground,Image} from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

              <ImageBackground source={require('../assets/mclaren.webp')} style={styles.backgroundImage}>
              

           

              <TouchableOpacity style={styles.subButt1}>
                  <Text style={styles.subte}>          Drivers </Text>
                  <Image source={require("../assets/rci.png")} style={styles.iconImage}></Image>
              </TouchableOpacity>

              <TouchableOpacity style={styles.subButt2}>
                  <Text style={styles.subte1}>      Chasis  </Text>
                  <Image source={require("../assets/f1mc.png")} style={styles.iconImage2}></Image>
              </TouchableOpacity>
              

  
              
               
              
              </ImageBackground>
             </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
  flex: 1
},

backgroundImage:{
  flex:1


},

/*buttImage:{
flex:1,
  width:134,
  height:230,
  marginLeft:100,
  marginDown: 10*/
//},

titlepos:{
  flex: 0.1,
  justifyContent:"center",
  alignItems:"center",
},

titlefo:{
  fontSize:40,
  fontWeight:"bold",
  color:"red",
  fontFamily:'cochin'
  
},


subButt1:{
  flex: 0.25,
  marginLeft: 90,
  marginRight: 20,
  marginTop: 90,
  borderRadius: 30,
  color:'red',
  justifyContent: 'flex-start',
  fontFamily:'cochin'
},

subButt2:{
  flex: 0.25,
  marginLeft: 90,
  marginRight: 20,
  marginTop: 70,
  bottom:-120,
  borderRadius: 30,
  color:'red',
  justifyContent: 'flex-start',
  fontFamily:'cochin',
  disabled:false
},

subLitt:{
  flex:0.25,
  fontSize:10,
  color:'green',
  disabled:false,
  bottom:-50

},

subte:{
  fontSize: 30,
  fontWeight: "bold",
  color:"white",
  marginTop: 60,
  paddingLeft: 40,
  paddingBottom:100,
  fontStyle:'italic',
  justifyContent: 'alignItems',
  fontFamily:'Tahoma'

},


subte1:{
  fontSize: 30,
  fontWeight: "bold",
  color:"white",
  marginTop: 60,
  paddingLeft: 40,
  paddingBottom:100,
  fontStyle:'italic',
  justifyContent: 'alignItems',
  fontFamily:'Tahoma'

},
subti:{
  fontSize: 15,
  fontWeight: "bold",
  color:"red",
  marginTop: 120,
  marginBottom:10,
  paddingLeft: 230
  
},


iconImage: {
        position: "absolute",
        height: 160,
        width: 160,
        resizeMode: "contain",
        right: 87,
        top: -80
    },

iconImage2: {
        position: "absolute",
        height: 300,
        width: 300,
        resizeMode: "contain",
        right: 27,
        top: -20
    }
})
