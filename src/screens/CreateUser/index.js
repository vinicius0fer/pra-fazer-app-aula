import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function CreateUser() {
    let errorCreateUser = null

    return (
        <View style={styles.container}>
            {errorCreateUser != null && (
                <Text style={styles.alert}>{errorCreateUser}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='Nome'
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Senha'
            />

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    )
}