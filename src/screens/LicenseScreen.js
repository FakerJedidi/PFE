import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Pressable } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function LicenseScreen({navigation,route}) {

  return (
    <ImageBackground source={require('../../assets/bg.png')}style={styles.container}>
    <View style={styles.context}>
      <Text style={styles.titre}>Avez vous un code de license </Text>
      <Text style={styles.lastWord}>pour accéder a l'application ?</Text>
    </View>
      <Pressable 
      style={({ pressed }) => [styles.pres, pressed && styles.presPressed]}
      onPress={() => navigation.navigate('Formulaire')}
      android_ripple={{ color: 'purple', radius: 125 }}
      >
        <Text style={styles.texte}>Je n'ai pas un code license</Text>
      </Pressable>
      <Pressable 
       style={({ pressed }) => [styles.pres, pressed && styles.presPressed]}
       onPress={() => navigation.navigate("Code")}
       android_ripple={{ color: 'purple', radius: 125 }}
       >
        <Text style={styles.texte}>J'ai un code license             </Text>
      </Pressable>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Time Track</Text>
        <Text style={styles.footerText}>© Time Track 2023 V 1.01</Text>
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
  pres: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    
  },
  pres1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  titre: {
    textAlign: 'center',
    fontSize: 23,
    letterSpacing: 0.25,
    color:'white',
  },
  lastWord: {
    textAlign: 'center',
    fontSize: 23,
    letterSpacing: 0.25,
    color:'white',
  },
  context: {
    paddingBottom:60,
  },
  texte: {
    fontSize: 17,
    lineHeight: 21,
    
    color: 'black',
  
  },
  presPressed: {
    backgroundColor: 'white',
  },
  header: {
   position:'absolute',
   width:'100%',
   height:100,
   backgroundColor:'green',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#2F4F4F',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontSize: 12,
    color: 'white',
  },
});