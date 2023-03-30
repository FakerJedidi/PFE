import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageScreen from "../screens/LanguageScreen";
import SplashScreen from '../screens/SplashScreen';
import LicenseScreen from "../screens/LicenseScreen";
import FormulaireScreen from "../screens/FormulaireScreen";
import CodeScreen from "../screens/CodeScreen";
import PrecodeScreen from "../screens/PrecodeScreen";
import pointageScreen from "../screens/PointageScreen";
import ArriveeScreen from "../screens/ArriveeScreen";
import DepartScreen from "../screens/DepartScreen";
import PauseScreen from "../screens/PauseScreen";
import RetpauseScreen from "../screens/RetpauseScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
       <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name="Splash"
          component={SplashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Language"
          component={LanguageScreen}
          options={{title: 'Language choice'}}
        />
        <Stack.Screen 
          name="License"
          component={LicenseScreen}
          options={{title: 'Vérify License'}}
        />
        <Stack.Screen 
          name="Formulaire"
          component={FormulaireScreen}
          options={{title: 'Form'}}
        />
        <Stack.Screen 
          name="Code"
          component={CodeScreen}
          options={{title: 'Code'}}
        />
         <Stack.Screen 
          name="Precode"
          component={PrecodeScreen}
          options={{title: 'Precode'}}
        />
        <Stack.Screen 
          name="pointage"
          component={pointageScreen}
          options={{title: 'pointage'}}
        />
         <Stack.Screen 
          name="Arrivee"
          component={ArriveeScreen}
          options={{title: 'Arrivee'}}
         />
          <Stack.Screen 
          name="Depart"
          component={DepartScreen}
          options={{title: 'Depart'}}
        />
           <Stack.Screen 
          name="Pause"
          component={PauseScreen}
          options={{title: 'Pause'}}
        />
         <Stack.Screen 
          name="Retpause"
          component={RetpauseScreen}
          options={{title: 'Retpause'}}
        />
        </Stack.Navigator>
       </NavigationContainer>
    );
};
