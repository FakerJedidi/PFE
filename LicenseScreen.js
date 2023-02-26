import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LicenseScreen({navigation,route}) {
  let language = route.params.language;
  let greeting = language === "french" ? "Bonjour" : "Hello";
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        title="je n'ai pas de code licence "
        onPress={() => navigation.navigate("Formulaire")}
      />
       <Button
        title="j'ai un code licence "
        onPress={() => navigation.navigate("Code")}
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