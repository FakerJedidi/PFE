import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground, Image, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function PointageScreen({ navigation, route }) {
  const image = require('../../assets/bg.png'); // replace with your image file path
  
  return (
    <ImageBackground source={image} style={styles.container}>
    <View>
    <Text style={styles.title}> Bienvenue, Faker</Text>
    </View>
    <View style={styles.All}>
      <View style={styles.pres1}>
        <Pressable onPress={() => navigation.navigate('Arrivee')}>
          <Text style={styles.txt}>Arrivee</Text>
        </Pressable>
      </View>
      <View style={styles.pres2}>
        <Pressable onPress={() => navigation.navigate('Pause')}>
          <Text style={styles.txt}>Pause</Text>
        </Pressable>
      </View>
      <View style={styles.pres3}>
        <Pressable onPress={() => navigation.navigate('Retpause')}>
          <Text style={styles.txt}>Retpause</Text>
        </Pressable>
      </View>
      <View style={styles.pres4}>
        <Pressable onPress={() => navigation.navigate('Depart')}>
          <Text style={styles.txt}>Depart</Text>
        </Pressable>
      </View>
    </View>
    <View style={styles.footer}>
        <Text style={styles.footerText}>Time Track</Text>
        <Text style={styles.footerText}>© Time Track 2023 V 1.01</Text>
      </View>
        <StatusBar style="auto" />
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
  All:{
    marginTop:80,
  },
  pres1:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginRight:'50%',
    backgroundColor:'orange',
    marginBottom:'-20%',
   
  },
  pres2:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginStart:'50%',
    backgroundColor:'green',
    
  },
  pres3:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginRight:'50%',
    marginBottom:'-20%',
    backgroundColor:'red',
    
  },
  pres4:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginStart:'50%',
    backgroundColor:'yellow',
  },
  txt:{
    textAlign: 'center',
    fontSize: 23,
    letterSpacing: 0.25,
    fontWeight:'bold',
  },
  title :{
    fontSize: 30,
    color: 'white',
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
