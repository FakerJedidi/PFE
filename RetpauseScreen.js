import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function RetpauseScreen() {
  const navigation = useNavigation();
  const [showMessage, setShowMessage] = useState(false);

  const handleConfirm = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      navigation.dispatch(StackActions.push('Percode'));
    }, 2000);
  };

  return (
    <ImageBackground source={require('../../assets/icons/bg.png')} style={styles.container}>
      <View style={styles.v1}>
        <Text style={styles.txt}>Faker, vous avez choisi</Text>
      </View>
      <View style={styles.v2}>
        <Pressable >
          <Text style={styles.txt1}>Retpause</Text>
        </Pressable>
      </View>
      <View style={styles.stat}>
        <Pressable style={styles.pes1}>
          <Text style={styles.txt2}>Annuler</Text>
        </Pressable>
        <Pressable style={styles.pes2} onPress={handleConfirm}>
          <Text style={styles.txt2}>Confirmer</Text>
        </Pressable>
      </View>
      {showMessage && (
        <View style={styles.message}>
          <Text style={styles.messageText}>Congratulation registration successful!</Text>
        </View>
      )}
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
  v1: {
    marginTop: '-20%',
  },
  txt: {
    alignItems: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  v2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: '15%',
    backgroundColor: 'white',
    paddingStart: 50,
    paddingEnd: 50,
    paddingTop: 15,
    paddingBottom: 15,
  },
  txt1: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt2: {
    alignItems: 'center',
    fontSize: 16,
    color: 'white',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    marginTop: '20%',
  },
  pes1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginRight: '50%',
    backgroundColor: 'orange',
    marginBottom: '-20%',
  },
  pes2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '-19%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginStart: '-30%',
    backgroundColor: 'green',
  },
  successContainer: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    color: 'white',
    fontSize: 90,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});
