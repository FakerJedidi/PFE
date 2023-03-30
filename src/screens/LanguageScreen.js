import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, Pressable, Image} from 'react-native';



export default function LanguageScreen({navigation}) {
  return (
    <ImageBackground source={require('../../assets/bg.png')}style={styles.container}>
    <View style={styles.View}>
    <Text style={styles.titre}>Choisissez votre langue pour</Text>
    <Text style={styles.lastWord}>commencer</Text>
    </View>
    <View style={styles.btn1}>
     <Pressable style={styles.button} onPress={() => navigation.navigate("License", { language: "french" })}>
      <Text style={styles.text}>Francais</Text>

     </Pressable>
     <Image source={require('../../assets/france.png')} style={styles.flag}/>
    </View>

    <View style={styles.btn2}>
     <Pressable style={styles.button} onPress={() => navigation.navigate("License", { language: "english" })}>
      <Text style={styles.text}>English</Text>
     </Pressable>
     <Image source={require('../../assets/English.png')} style={styles.flag}/>
    </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Time Track</Text>
        <Text style={styles.footerText}>© Time Track 2023 V 1.01</Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  btn1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,

    
  },
  btn2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  text:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginRight: '50%',
  },
  flag: {
    width: 40,
    height: 30,
  },
  titre: {
    textAlign: 'center',
    fontSize: 23,
    letterSpacing: 0.25,
    color:'white',
  },
  lastWord: {
    textAlign: 'center',
    fontSize: 23,
    letterSpacing: 0.25,
    color:'white',
  },
  View:{
    paddingBottom:60,
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