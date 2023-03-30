import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground,Image } from 'react-native';


export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Language');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
       <Image source={require('../../assets/logoT.png')} style={styles.logo} />

      <Text style={styles.title}>Time Track</Text>
      <Text style={styles.phr}>Votre temps, notre priorité.</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '30%',
  },
  phr: {
     fontSize: 15,
     color:'white',
     marginTop:5,
  },
  logo: {
    width: 70,
    height: 80,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%',
    borderRadius:5,
    
  },
});