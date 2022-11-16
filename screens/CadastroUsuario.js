import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../config/firebase';
import { showMessage, hideMessage } from "react-native-flash-message";


export default function CadastroUsuario({route,navigation}){

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpf, setCpf] = React.useState('');


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>


<View style={{ flex: 4, alignItems:"center", paddingTop:120}}>
<Input placeholder="Nome"
       value={nome}
       onChangeText={nome => setNome(nome)}
       maxLength={255} />

<Input placeholder="CPF"
       value={cpf}
       onChangeText={cpf => setCpf(cpf)}
       maxLength={14} />

<Input placeholder="Email"
       value={email}
       onChangeText={email => setEmail(email)}
       textContentType={'emailAddress'}
       maxLength={255} />

<Input placeholder="Senha" 
       value={password}
       onChangeText={password => setPassword(password)}
       secureTextEntry={true}
       maxLength={255}/>
</View>
  
  
<View style={{ flex: 2, alignItems:"center", paddingTop:100}} >
<Button style={{ marginTop:50}} 
title="Salvar"
onPress={() => {
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          navigation.goBack();
      })
      .catch((error) => {
          showMessage({
              message: `${error.code}, ${error.message}`,
              type: 'danger',
          });
          //console.error(error.code, error.message);
      })
}}/>
</View>
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });






 

