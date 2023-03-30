import React, { useTransition, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, ImageBackground, Pressable, Modal, TouchableOpacity, Animated } from 'react-native';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};


export default function Arrivee() {

  const [visible, setVisible] = React.useState(false);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [employeeName, setEmployeeName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleEmployeeNameChange = (value) => {
    setEmployeeName(value);
  };


  return (
    <ImageBackground source={require('../../assets/icons/bg.png')}style={styles.container}>
       <View style={styles.v1}>
        <Text style={styles.txt}>Faker, vous avez choisi</Text>
       </View> 
       <View style={styles.v2}>
        <Pressable >
          <Text style={styles.txt1}>Arrivée</Text>
        </Pressable>
       </View>
       <View style={styles.stat}>
         <Pressable style={styles.pes1}>
          <Text style={styles.txt2}>Annuler</Text>
         </Pressable>
      
         <Pressable style={styles.pes2} onPress={() => setVisible(true)}>
          <Text style={styles.txt2}>Confirmer</Text>
         </Pressable>
       </View>

       <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
             <Image
                source={require('../../assets/icons/x.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
        <Image
            source={require('../../assets/icons/success.png')}
            style={{height: 150, width: 150, marginVertical: 10}}
          />
        </View>

        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          Congratulations registration was successful
        </Text>
      </ModalPoup>
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
  v1: {
    marginTop:'-20%',
  },
  txt: {
    alignItems: 'center',
    fontSize:25,
    fontWeight:'bold',
    color: 'white',
    textAlign:'center',
  },
  v2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: '15%',
    backgroundColor: 'white',
    paddingStart: 50,
    paddingEnd:50,
    paddingTop:15,
    paddingBottom:15,
  },
  txt1: {
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  txt2: {
    alignItems:'center',
    fontSize:16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    marginTop:'20%',
  },
  pes1:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginRight:'50%',
    backgroundColor:'orange',
    marginBottom:'-20%',
   
  },
  pes2:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '-19%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginStart:'-30%',
    backgroundColor:'green',
  },
  modal: {
    backgroundColor: 'white',
    margin: '10%',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    },
    modalCloseButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    },
    modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    },
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
});