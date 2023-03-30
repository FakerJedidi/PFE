import Navigation from "./src/navigation/navigation";
import { StyleSheet, SafeAreaView } from "react-native";

export default function App() {

    return (
        <ImageBackground source={require('../../assets/icons/bg.png')}style={styles.container}>
         
        </ImageBackground>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
      },
});