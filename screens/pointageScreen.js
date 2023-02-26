import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function SplashScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button 
            title='arrivée'
            onPress={() => navigation.navigate('Arrivee')}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='Depart'
            onPress={() => navigation.navigate('Depart')}
            style={styles.button}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button 
            title='depart en pause'
            onPress={()=>navigation.navigate('Pause')}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='retour de pause'
            onPress={() => navigation.navigate("Retpause")}
            style={styles.button}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  button: {
    flex: 1,
  },
});
