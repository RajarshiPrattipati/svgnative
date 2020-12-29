import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';


var imgurl =   require('./baby.jpeg');

//import Logo from "./logo.svg";


export default class App extends Component {

  state = {
    imgid : 3,
  };


  render()
  {
    const { imgid } = this.state
    
    const imgurl1= require('./baby.jpeg')
    const imgurl2= require('./baby2.jpeg')
    const imgurl3= require('./baby3.jpeg')
    var img;


    //Choose image
    switch(imgid)
    {
      case 1:
      {
        img = imgurl1;
        break;
      }
      case 2:
      {
        img = imgurl2;
        break;
      }
      default:
        {
          img = imgurl3;
          break;
        }

    }
  return (
    
    //Main View
    <View
    style={[
      StyleSheet.absoluteFill,
      { alignItems: 'center', justifyContent: 'center' },
    ]}
  >

    <Svg height="100%" width="100%" viewBox="0 0 100 100">
    <Defs>
    <ClipPath id="clip">
      <Circle cx="50" cy="50" r="25" />
    </ClipPath>
    </Defs>
      <Circle
        cx="50"
        cy="50"
        r="25"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
      <Image
      width="90%"
      height="50%"
    preserveAspectRatio="xMidYMid slice"
    opacity="1"
    href={img}
    clipPath="url(#clip)"
  />
  
  
  <Path  x="50" y="50" transform="rotate(270)" fill={imgid==1?"blue":"none"} stroke="blue" d="M 23,-20 A32,32 0,0,0 -23,-20 L -40,-30 A42,42 0,0,1 -14,-47 A17,17 0,0,0 14,-47 A42,42 0,0,1 40,-30 Z" onPressIn={() => this.setState({imgid :1})}/>

       <Path  x="50" y="50" transform="rotate(90)" fill={imgid==3?"blue":"none"} stroke="blue" d="M 23,-20 A32,32 0,0,0 -23,-20 L -40,-30 A42,42 0,0,1 -14,-47 A17,17 0,0,0 14,-47 A42,42 0,0,1 40,-30 Z" onPressIn={() =>  this.setState({imgid :3})}/>
       <Path  x="50" y="70"  transform="rotate(180)" fill={imgid==2?"blue":"none"} stroke="blue" d="M 23,-20 A32,32 0,0,0 -23,-20 L -40,-30 A42,42 0,0,1 -14,-47 A17,17 0,0,0 14,-47 A42,42 0,0,1 40,-30 Z" onPressIn={() =>  this.setState({imgid :2})}/>
       
    </Svg>
    
  </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

