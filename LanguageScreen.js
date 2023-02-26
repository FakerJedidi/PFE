import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LanguageScreen({navigation}) {

  return (
    <View style={styles.container}>
     <Button
        title="Navigate to second screen with french"
        onPress={() => navigation.navigate("License", { language: "french" })}
      />
      <Button 
        title="Navigate to second screen with english"
        onPress={() => navigation.navigate("License", { language: "english" })}
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