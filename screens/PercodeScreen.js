import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput,Button } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function PrecodeScreen({navigation}) {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const [value, setValue] = useState('');

  const handlePress = (number) => {
    // Handle button press by adding the number to the value
    setValue(`${value}${number}`);
  };

  const handleDelete = () => {
    // Handle delete button press by removing the last character from the value
    setValue(value.slice(0, -1));
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <TouchableWithoutFeedback onPress={() => handlePress(1)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>1</Text>
            </View> 
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handlePress(2)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>2</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handlePress(3)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>3</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.row}>
          <TouchableWithoutFeedback onPress={() => handlePress(4)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>4</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handlePress(5)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>5</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handlePress(6)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>6</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.row}>
          <TouchableWithoutFeedback onPress={() => handlePress(7)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>7</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handlePress(8)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>8</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handlePress(9)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>9</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.row}>
          <TouchableWithoutFeedback onPress={() => handlePress('')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}></Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handlePress(0)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>0</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleDelete}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>DEL</Text>
              </View>
      </TouchableWithoutFeedback>
    </View>
    <Button
        title="pointage "
        onPress={() => navigation.navigate("pointage")}
      />
  </View>

</View>

    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 24,
    marginBottom: 20,
    },
    keyboard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    },
    row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    },
    button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    },
    buttonText: {
    fontSize: 20,
    },
    });