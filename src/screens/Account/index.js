import { firebase } from '../../services/firebaseConfig'
import { getAuth, signOut } from "firebase/auth";
import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style';

export default function Account({navigation}) {

  const auth = getAuth();


  function logoff() {
  
    signOut(auth).then(() => {
      navigation.navigate ('Login')
    }).catch((error) => {
      // An error happened.
    });

  }


  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Dados do usuários</Text>
      <Text style= {styles.info}>Nome</Text>
      <Text style= {styles.info}>E-mail</Text>

      <TouchableOpacity
        style= {styles.button}
       onPress={logoff}>
        <Text style={styles.textButton}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}