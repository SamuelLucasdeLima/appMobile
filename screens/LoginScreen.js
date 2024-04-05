// screens/LoginScreen.js
import React, { useState , useEffect } from 'react';
import { View, Text, Button, KeyboardAvoidingView, Image, TextInput , StyleSheet, TouchableOpacity , Animated , } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
 
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [Logo] = useState(new Animated.ValueXY({x: 200, y:155}))

   useEffect(()=>{
    Animated.parallel([
        Animated.spring(offset.y, {
            toValue: 0,
            speed: 4 ,
            bounciness: 20
        }),
        Animated.timing(opacity, {
            toValue: 1,
            duration: 200 ,

        })

    ]).start();
   
   }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
        style = {{
            width:Logo.x,
            height:Logo.y
        }}


          source={require('../assets/logo.png')}
        />
      </View>
      <Animated.View 
      style = {[styles.container , 
      {
        opacity: opacity,
        transform:[
            {translateY: offset.y}
        ]
      }
      ]}>


        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
        style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true} // Para esconder a senha
          value={password}
        />
<TouchableOpacity style = {styles.btn} onPress={handleLogin}>

    <Text style = {styles.submitText} >Acessar</Text>
    
       
</TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919'
    },
    containerLogo: {
      flex: 1,
      justifyContent: 'center'
    },
    container: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      
    },
    input: {
      backgroundColor: '#fff',
      width: '90%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10
    },
    btn: {
      backgroundColor: '#35AAFF',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    },
    submitText: {
      color: '#fff',
      fontSize: 18
    }
  });
  
  export default LoginScreen;