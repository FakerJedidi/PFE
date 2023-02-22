import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LanguageScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Button 
        title='Navigate with french language'
        onPress={() => navigation.navigate('License', {Language:"french"})}
      />
      <Button 
        title='Navigate with english language'
        onPress={() => navigation.navigate('License', {Language:"english"})}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});