import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


export default function PercodeScreen() {

  const {employees } = useAppSelector(state => state.AuthData)
  console.log(employees)
  
  const tableData = [
    { firstName: 'John', lastName: 'Doe', role: 'Employé', pin: '1234', picture: '../../assets/icons/france.png' },
    { firstName: 'Jane', lastName: 'Smith', role: 'Administrateur', pin: '5678', picture: 'https://www.example.com/picture.jpg' },
    { firstName: 'Bob', lastName: 'Johnson', role: 'Employeur', pin: '9012', picture: 'https://www.example.com/picture.jpg' },
  ];

  const [pin, setPin] = useState('');
  const [dateTime, setDateTime] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (pin.length === 4) {
      handlePinSubmit();
    }
  }, [pin]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePinSubmit = () => {
    const matchedUser = tableData.find((user) => user.pin === pin);

    if (matchedUser) {
      // navigate to another page with user data
      navigation.navigate('pointage', { user: matchedUser });
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

  const renderUserData = (user) => (
    <View style={styles.userDataContainer} key={user.pin}>
      <View style={styles.userData}>
        <Text style={styles.userDataText}>{user.lastName}</Text>
        <Text style={styles.userDataText}>{user.firstName}</Text>
        <Text style={styles.userDataText}>{user.role}</Text>
        <Text style={styles.userDataText}>{user.pin}</Text>
      </View>
      <View style={styles.userPicture}>
        <ImageBackground source={{ uri: user.picture }} style={styles.userPictureBackground} />
      </View>
    </View>
  );

  return (
    <ImageBackground source={require('../../assets/icons/bg.png')} style={styles.container}>
      <Text style={styles.dateTimeText}>{dateTime}</Text>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    fontSize: 20,
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
    marginTop: 150,
  },
  dateText: {
    position: 'absolute',
    top: 50,
    left: 20,
    fontSize: 20,
    color: '#ffffff',
  },
  timeText: {
    position: 'absolute',
    top: 50,
    left: 20,
    fontSize: 20,
    color: '#ffffff',
  },
  date: {
    marginTop: 150,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

