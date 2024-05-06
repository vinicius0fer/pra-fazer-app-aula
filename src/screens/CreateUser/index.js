import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function CreateUser() {
   const[ nome, setNome] = useState ("")
   const[ email, setEmail] = useState ("")
   const[ senha, setSenha] = useState ("")
   const[ errorCreateUser, setErrorCreateUser] = useState ("null")
   
  function Validate(){
    if(nome == ""){
        setErrorCreateUser("Informe o seu nome ")
    } else if (email == ""){
        setErrorCreateUser("Informe o seu e-mail")
    }else if (senha == ""){
        setErrorCreateUser("Informe uma senha");
    }else{
        setErrorCreateUser(null)
    }
  }

    return (
        <View style={styles.container}>
            {errorCreateUser != null && (
                <Text style={styles.alert}>{errorCreateUser}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value= {nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value= {email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Senha'
                value= {senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={Validate}
            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    )
}