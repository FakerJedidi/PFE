import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function Pause() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
             </View>
      <View style={styles.signature}>
        <Text style={styles.signatureText}>Signature:</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signature: {
    height: 50,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  signatureText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
