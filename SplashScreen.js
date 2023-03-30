import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';


export default function SplashScreen({navigation}) {
  const image = {uri : "https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg"};
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Language');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground source={image} style={styles.container}>
      <Text style={styles.title}>Time Track</Text>
      <Text style={styles.phr}>Votre temps, notre priorité.</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>votre temp</Text>
        <Text style={styles.footerText}>© All Rights Reserved</Text>
      </View>
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
  },
  phr: {
     fontSize: 15,
     color:'white',
     marginTop:5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,},
    
    footerText: {
      fontSize: 12,
      color: '#444',
    },
});