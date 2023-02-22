import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button 
        title='navigate to second screen'
        onPress={() => navigation.navigate('Language')}
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