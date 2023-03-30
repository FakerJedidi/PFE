import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';


export default function FormulaireScreen() {
  const image = { uri: 'https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg' };

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
    <ImageBackground source={image} style={styles.backgroundImage}>
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
      <View style={styles.footer}>
        <Text style={styles.footerText}>votre temp</Text>
        <Text style={styles.footerText}>© All Rights Reserved</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(54, 121, 255, 0.8)',
    padding: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,},

    footerText: {
      fontSize: 12,
      color: '#444',
    },
});
