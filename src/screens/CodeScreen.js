import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function CodeScreen({ navigation }) {
  const image = require('../../assets/bg.png');

  const [licenseCode, setLicenseCode] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCodeChange = (index, text) => {
    // Remove any non-numeric characters from the text input
    text = text.replace(/[^0-9]/g, '');

    // Ensure input is within the allowed length of 4 digits
    if (text.length > 4) {
      text = text.substring(0, 4);
    }

    const newLicenseCode = [...licenseCode];
    newLicenseCode[index] = text;
    setLicenseCode(newLicenseCode);

    // Move focus to next input field when current input is filled
    if (text.length === 4 && index < 3) {
      const nextInput = inputRefs[index + 1];
      nextInput.focus();
    }
  };

  const inputRefs = [];
  const handleRef = (ref) => inputRefs.push(ref);

  const handleFormSubmit = () => {
    const code = licenseCode.join('');
    if (code !== '1111111111111111' && code !== '0000000000000000') {
      setErrorMessage('Code de licence invalide');
      return;
    }

    // Implement your form submission logic here
    console.log('Code de licence:', code);

    setErrorMessage('');
    navigation.navigate('Precode');
  };

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label}>    Entrer votre Code de licence</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleCodeChange(0, text)}
            value={licenseCode[0]}
            maxLength={4}
            keyboardType="numeric"
            ref={handleRef}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleCodeChange(1, text)}
            value={licenseCode[1]}
            maxLength={4}
            keyboardType="numeric"
            ref={handleRef}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleCodeChange(2, text)}
            value={licenseCode[2]}
            maxLength={4}
            keyboardType="numeric"
            ref={handleRef}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleCodeChange(3, text)}
            value={licenseCode[3]}
            maxLength={4}
            keyboardType="numeric"
            ref={handleRef}
          />
        </View>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <View style={styles.press}>
          <Pressable onPress={handleFormSubmit}>
            <Text style={styles.txt}>       Envoyer</Text>
          </Pressable>
        </View>
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
    padding: 30,
    marginTop:100,
  },
  label: {
    marginTop: 50,
    fontSize: 20,
    fontStyle: 'oblique',
    fontWeight: 'bold',
    color:'white',
    letterSpacing: 0.25,
    
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 60,
    marginHorizontal: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  press: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    backgroundColor:'#32CD32',
    marginStart:'50%',
    marginEnd:20,
    marginTop:25,
    
  },
  txt: {
    fontStyle: 'normal',
    alignItems:'center',
    color:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
