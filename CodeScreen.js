import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function CodeScreen({ navigation }) {
  const [licenseCode, setLicenseCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCodeChange = (text) => {
    // Remove any non-numeric characters from the text input
    text = text.replace(/[^0-9]/g, '');

    // Add a dash after every 4 digits
    if (text.length > 0) {
      text = text.match(new RegExp('.{1,4}', 'g')).join(' - ');
    }

    setLicenseCode(text);
  };

  const handleFormSubmit = () => {
    if (licenseCode.replace(/[^0-9]/g, '').length !== 16) {
      setErrorMessage('Le code de licence doit comporter 16 chiffres');
      return;
    }

    // Implement your form submission logic here
    console.log('Code de licence:', licenseCode.replace(/[^0-9]/g, ''));

    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Code de licence</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleCodeChange}
        value={licenseCode}
        maxLength={25}
        keyboardType="numeric"
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button
        title="Valider"
        onPress={() => navigation.navigate('PercodeScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
