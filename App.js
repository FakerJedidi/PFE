import Navigation from "./src/navigation/navigation";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './src/store/rootReducer'
export default function App() {

  return (

    <SafeAreaView style={styles.root}>
   <Provider store={store}>
    <Navigation />
   </Provider>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F9FBFC', 
    },
});