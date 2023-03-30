import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PrecodeScreen() {
  const tableHead = ['Nom Prénom', 'Role', 'Pin', 'Picture'];
  const tableData = [
    ['John Doe', 'Employé', '1234', '../../assets/icons/france.png'],
    ['Jane Smith', 'Administrateur', '5678', 'https://www.example.com/picture.jpg'],
    ['Bob Johnson', 'Employeur', '9012', 'https://www.example.com/picture.jpg'],
  ];

  const [pin, setPin] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (pin.length === 4) {
      handlePinSubmit();
    }
  }, [pin]);

  const handlePinSubmit = () => {
    if (pin === '1234' || pin === '5678' || pin === '9012') { // replace with the correct PIN
      // navigate to another page with table data
      navigation.navigate('pointage', { tableData });
    } else {
      console.log('PIN is incorrect.');
    }
  };

  const handleNumberPress = (number) => {
    if (pin.length < 4) {
      setPin(pin + number);
    }
  };

  const renderNumberButton = (number) => (
    <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress(number)}>
      <Text style={styles.numberButtonText}>{number}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../../assets/bg.png')}style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Enter your PIN"
        keyboardType="numeric"
        value={pin}
        onChangeText={(text) => setPin(text)}
      />
      <View style={styles.numericKeyboard}>
        <View style={styles.numericKeyboardRow}>
          {renderNumberButton('1')}
          {renderNumberButton('2')}
          {renderNumberButton('3')}
        </View>
        <View style={styles.numericKeyboardRow}>
          {renderNumberButton('4')}
          {renderNumberButton('5')}
          {renderNumberButton('6')}
        </View>
        <View style={styles.numericKeyboardRow}>
          {renderNumberButton('7')}
          {renderNumberButton('8')}
          {renderNumberButton('9')}
        </View>
        <View style={styles.numericKeyboardRow}>
          <View style={styles.emptyButton}></View>
          {renderNumberButton('0')}
          <TouchableOpacity style={styles.deleteButton} onPress={() => setPin(pin.slice(0, -1))}>
            <Text style={styles.deleteButtonText}>DEL</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tableContainer}>
        {/*
          render table data here
        */}
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  numericKeyboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:150,
  },
  numericKeyboardRow: {
    flexDirection: 'row',
  },
  emptyButton: {
    width: 70,
  },
  numberButton: {
    width: 70,
    height: 70,
    backgroundColor: '#f2f2f2',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  numberButtonText: {
    fontSize: 32,
    color: '#000000',
  },
  deleteButton: {
    width: 70,
    height: 70,
    backgroundColor: '#ff4444',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  deleteButtonText: {
    fontSize: 24,
    color: '#ffffff',
  },
  tableContainer: {
    flex: 2,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 15,
    marginTop: 40,
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