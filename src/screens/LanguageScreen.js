import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, Pressable, Image} from 'react-native';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

import french from '../longuages/french.json';
import english from '../longuages/english.json';

i18n.use(initReactI18next).init({
  resources: {
    french: {
      translation: french,
    },
    english: {
      translation: english,
    },
  },
  lng: 'english',
  fallbackLng: 'english',
});

export default function LanguageScreen({ route, navigation }) {
  const { t } = useTranslation();

  const language = route.params?.language || 'english';

  i18n.changeLanguage(language);

  return (
    <ImageBackground source={require('../../assets/icons/bg.png')}style={styles.container}>
      <View style={styles.btn1}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("License", { language: "french" })}>
          <Text style={styles.text}>{t('francais')}</Text>
        </Pressable>
        <Image source={require('../../assets/icons/france.png')} style={styles.flag}/>
      </View>
      <View style={styles.btn2}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("License", { language: "english" })}>
          <Text style={styles.text}>{t('english')}</Text>
        </Pressable>
        <Image source={require('../../assets/icons/english.png')} style={styles.flag}/>   
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>votre temp</Text>
        <Text style={styles.footerText}>© All Rights Reserved</Text>
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontSize: 12,
    color: '#444',
  },
});
