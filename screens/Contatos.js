import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Contatos({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>


<View style={{ flex: 4, alignItems:"center", paddingTop:120}}>
<Input placeholder='nome'/>
<Input placeholder="cpf" secureTextEntry={true} />
<Input placeholder="email" secureTextEntry={true} />
<Input placeholder="Senha" secureTextEntry={true} />
</View>
  
  
<View style={{ flex: 2, alignItems:"center", paddingTop:50}} >
<Button style={{ marginTop:50}} title="Salvar"/>
</View>
</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });






 


  
  
  
  