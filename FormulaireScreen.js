import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function FormulaireScreen() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [ensegne, setEnsegne] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = () => {
    if (!nom || !prenom || !email || !telephone || !ensegne) {
      setErrorMessage('Tous les champs sont obligatoires');
      return;
    }
    
    // Implement your form submission logic here
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Téléphone:', telephone);
    console.log('Enseigne:', ensegne);
    
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNom}
        value={nom}
      />
      <Text style={styles.label}>Prénom *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrenom}
        value={prenom}
      />
      <Text style={styles.label}>Adresse email *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Téléphone *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTelephone}
        value={telephone}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Enseigne *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEnsegne}
        value={ensegne}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button
        title="Envoyer"
        onPress={handleFormSubmit}
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
