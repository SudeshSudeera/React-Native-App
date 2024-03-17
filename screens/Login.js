import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native'

const Login = () => {
    const navigation= useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Login</Text>

            <View style={styles.elementArea}>
                <TextInput
                    placeholder='Email here'
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    autoCapitalize="none"
                />

                <TextInput
                    placeholder='Password here'
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />

                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>

                <Text style={styles.sprtText}>OR</Text>

                <TouchableOpacity style={[styles.button, styles.newAccountButtonStyle]} onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.buttonText}>Create an Account</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        elementArea: {
            width: '100%',
            alignItems: 'center',
            marginTop: 25
        },
        input: {
            width: '80%',
            borderWidth: 1,
            height: 40,
            borderColor: 'rgba(189, 195, 199,1.0)',
            padding: 5,
            marginBottom: 8,
            borderRadius: 3
        },
        headerText: {
            color: '#16a085',
            fontSize: 20
        },
        button: {
            backgroundColor: '#3498db',
            width: '80%',
            height: 40,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center'
        },
        newAccountButtonStyle: {
            backgroundColor:'#34495e'
        },
        buttonText: {
            color: '#fff'
        },
        sprtText: {
            marginTop: 5,
            marginBottom: 5
        }
    })
;

export default Login;
