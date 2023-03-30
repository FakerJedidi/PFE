import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";

import french from  './french.json';
import English from './english.json';



i18next.use(initReactI18next).init({
  lng:"en",
  resources:{
    en:English,
    fr:french,
  },
  react :{
    useSuspense:false,

  },
});


   // compatibilityJSON: 'v3',
   // resources: {
     // fr: french,
      //en: English,
   // },
    //fallbackLng: 'fr',
    //interpolation: {
     // escapeValue: false,
    //},
 // })
  


export default i18next;